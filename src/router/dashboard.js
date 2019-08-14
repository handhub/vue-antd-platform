export default [
  {
    path: '/dashboard/workplace',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/dashboard/workplace.vue'),
  },
];
