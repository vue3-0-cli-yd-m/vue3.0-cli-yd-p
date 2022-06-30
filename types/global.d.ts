/* eslint-disable no-shadow */
export { };

/* eslint-disable no-unused-vars */
interface YoungDanStorage {
  set(key: string, value: any): void;// 设置缓存
  get(key: string, def?: any): any;// 获取缓存
  change<T = any>(key: string, onChange: (oldValue: T) => T | null, baseValue?: any): void;// 修改缓存
  remove(key: string): void;// 移除缓存
  clear(): void;// 清空缓存（所有）
  has(key: string): boolean;// 判断是否存在某个缓存
  size(): number;// 读取某个缓存的长度
  getKeys(): Array<string>;// storage当中所有key集合
  getValues(): Array<any>;// 所有数据集合
  readonly set(key: string, value: any, expire: Nullable<number> = null): void;
}

declare global {
  declare interface Window {
    youngDanStorage: YoungDanStorage;
  }
  declare type Nullable<T> = T | null;
  declare const youngDanStorage: YoungDanStorage;// 全局定义 可直接读取
}
