import { RouteRecordRaw } from 'vue-router';
import Login from '@/views/login/index.vue';

const LoginRoute: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
    },
  },
];

export default LoginRoute;
