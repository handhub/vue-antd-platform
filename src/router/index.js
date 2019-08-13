import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import bus from '@/libs/bus';

Vue.use(Router);

let routesChildren = [];
const matches = require.context('./', false, /\.\/((?!index)\w+\.js)/);
matches.keys().forEach((key) => {
  routesChildren = routesChildren.concat(matches(key).default);
});

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layouts/ContentView.vue'),
    children: routesChildren,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
];

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line
  bus.source.cancel && bus.source.cancel();
  bus.source = axios.CancelToken.source();
  next();
});
export default router;
