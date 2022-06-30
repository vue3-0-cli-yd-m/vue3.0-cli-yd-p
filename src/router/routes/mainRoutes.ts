import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/index.vue';

const MainRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'HomeIndex',
    component: Home,
    meta: {
      title: '首页',
    },
  },
];

export default MainRoute;
