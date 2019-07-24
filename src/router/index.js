import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let routesChildren = [];
const matches = require.context('./', false, /\.\/((?!index)\w+\.js)/);
matches.keys().forEach((key) => {
  routesChildren = routesChildren.concat(matches(key).default);
});

const routes = [
  {
    path: '/',
    name: '首页',
    redirect: '/dashboard/workplace',
    component: () => import('@/layouts/ContentView.vue'),
    children: routesChildren,
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/Login.vue'),
  },
];

const router = new Router({ routes });
export default router;
