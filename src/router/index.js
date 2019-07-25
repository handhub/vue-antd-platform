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

export default router;
