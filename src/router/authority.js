export default [
  {
    path: '/authority/role',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/authority/role.vue'),
  },
  {
    path: '/authority/user',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/authority/user.vue'),
  },
];
