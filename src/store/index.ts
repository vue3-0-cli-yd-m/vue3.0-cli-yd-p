import type { App } from 'vue';
import { createStore, createLogger } from 'vuex';

const debug = process.env.NODE_ENV !== 'production';
// 自动注入所有 ./modules 下的 vueX 子模块  vite的方法
const modulesFile = import.meta.globEager('./modules/*.ts') as any;
const modules = {} as any;

Object.keys(modulesFile).forEach(async (key: any) => {
  const moduleName = key.replace(/^\.\/.*\/(.*)\.\w+$/, '$1');
  modules[moduleName] = modulesFile[key].default;
});

export const store = createStore({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : [], // 操作vueX => 控制台打印
});

export function setupStore(app: App<Element>) {
  app.use(store);
}
