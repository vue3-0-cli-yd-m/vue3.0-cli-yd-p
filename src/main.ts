import { createApp, } from 'vue';
import { setupStore } from '@/store';
import 'element-plus/theme-chalk/index.css'

import { router, setupRouter } from './router';

import setupRouterGuard from './router/guard';

import setupYoungDanStorage from '@/utils/cache';

import App from './App.vue';

import { ElInput, ElButton, ElSwitch } from 'element-plus'

import 'element-plus/dist/index.css';
import './assets/scss/_index.scss';
import './assets/scss/_element.scss';


async function immediately(): Promise<void> {
  const app = createApp(App);

  app.use(ElInput).use(ElButton).use(ElSwitch)

  setupYoungDanStorage();
  // Configure store
  setupStore(app);
  // Configure routing
  setupRouter(app);
  // router-guard
  setupRouterGuard(router);
  // wait router ready
  await router.isReady();
  app.mount('#app');
}

immediately();
