export default [
  {
    path: '/authority/role',
    name: '角色管理',
    component: () => import('@/views/authority/role.vue'),
    icon: 'none',
  },
  {
    path: '/authority/user',
    name: '用户管理',
    component: () => import('@/views/authority/user.vue'),
    icon: 'none',
  },
];
