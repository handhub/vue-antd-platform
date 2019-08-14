import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "root.page" */ './page/index.vue'),
    meta: { title: '' },
  },
];

export default new VueRouter({
  routes,
});
