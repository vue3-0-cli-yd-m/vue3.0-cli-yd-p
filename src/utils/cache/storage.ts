import { isNullOrUnDef, isSymbol } from '@/utils/ts/is';

export interface CreateStorageParams {
  prefixKey: string;
  mode: 'session' | 'local';
}

/**
 * 判断当前值是否能够被JSON.stringify识别
 * @param data 需要判断的值
 * @returns 前参数是否可以string化
 */
export function hasStringify(data: any): boolean {
  if (data === undefined) {
    return false;
  }
  if (data instanceof Function) {
    return false;
  }
  return !isSymbol(data);
}

export const createStorage = ({
  prefixKey = '',
  mode = 'local',
}: Partial<CreateStorageParams> = {}) => {
  if (!window.localStorage) {
    throw new Error('当前环境非无法使用localStorage');
  }
  if (!window.sessionStorage) {
    throw new Error('当前环境非无法使用sessionStorage');
  }

  /**
   * Cache class
   * 通过mode 设置 sessionStorage, localStorage,
   * @class Cache
   * @example
   */
  const YoungDanStorage = class YoungDanStorage {
    private storage: Storage;

    private prefixKey?: string;

    private getKey(storageKey: string) {
      return `${this.prefixKey}${storageKey}`.toUpperCase();
    }

    /**
     *
     * @param {*} storage
     */
    constructor() {
      this.storage = mode === 'local' ? localStorage : sessionStorage;
      this.prefixKey = prefixKey;
    }

    /**
     * 设置当前
     * @param key 设置当前存储key
     * @param value 设置当前存储value
     * @expire 过期时间(秒)
     */
    set(key: string, value: any) {
      if (hasStringify(value)) {
        const stringData = {
          timestamp: Date.now(),
          value,
        };
        this.storage.setItem(this.getKey(key), JSON.stringify(stringData));
      } else {
        throw new Error('需要存储的data不支持JSON.stringify方法，请检查当前数据');
      }
    }

    /**
     * 获取数据
     * @param {string} key 获取当前数据key
     * @returns 存储数据
     */
    get(key: string, def: any = null): any {
      const val = this.storage.getItem(this.getKey(key));
      if (!val) return def;

      try {
        const data = JSON.parse(val);
        const { value, expire } = data;
        if (isNullOrUnDef(expire) || expire >= new Date().getTime()) {
          return value;
        }
        this.remove(key);
        return null;
      } catch (err) {
        return def;
      }
    }

    /**
     * 修改存储数据的内容
     * @param key 当前存储key
     * @param onChange 修改函数
     * @param baseValue 基础数据
     */
    // eslint-disable-next-line no-unused-vars
    change<T = any>(key: string, onChange: (oldValue: T) => T | null, baseValue?: any): void {
      const data = this.get(key);
      const newTarget = onChange(data || baseValue);
      this.set(key, newTarget);
    }

    /**
     * 移除一条数据
     * @param key 移除key
     */
    remove(key: string): void {
      if (this.has(key)) {
        this.storage.removeItem(this.getKey(key));
      }
    }

    /**
     * 清除存储中所有数据
     */
    clear(): void {
      this.storage.clear();
    }

    /**
     * 判断是否存在该属性
     * @param key 需要判断的key
     */
    has(key: string): boolean {
      return Object.prototype.hasOwnProperty.call(this.storage, this.getKey(key));
    }

    /**
     * 返回当前存储库大小
     * @returns number
     */
    size(): number {
      return this.storage.length;
    }

    /**
     * 获取所有key
     * @returns 回storage当中所有key集合
     */
    getKeys(): Array<string> {
      return Object.keys(this.storage);
    }

    /**
     * 获取所有value
     * @returns 所有数据集合
     */
    getValues(): Array<string> {
      return Object.values(this.storage);
    }
  };

  return new YoungDanStorage();
};
