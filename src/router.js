import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/',
      name: '首页',
      component: () => import('@/layouts/ContentView.vue'),
      children: [
        {
          path: '/dashboard/workplace',
          name: '工作台',
          component: () => import('@/views/dashboard/workplace.vue'),
          icon: 'none',
        },
        {
          path: '/authority/role',
          name: '角色管理',
          component: () => import('@/views/authority/role.vue'),
          icon: 'none',
        },
        {
          path: '/authority/customer',
          name: '用户管理',
          component: () => import('@/views/authority/customer.vue'),
          icon: 'none',
        },
      ],
    },
  ],
});
