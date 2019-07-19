<template>
  <div>
    <i-menu :theme="theme" :collapsed="collapsed" :menuData="menuData" @select="onSelect"/>
  </div>
</template>

<script>
import IMenu from '@/layouts/menu';

export default {
  components: { IMenu },
  data() {
    return {
      menuData: [
        {
          icon: 'dashboard',
          title: '主页',
          children: [
            {
              path: '/dashboard/workplace',
              name: '工作台',
            },
          ],
        },
        {
          icon: 'user',
          title: '权限管理',
          children: [
            {
              path: '/authority/customer',
              name: '用户管理',
            },
            {
              path: '/authority/role',
              name: '角色管理',
            },
          ],
        },
      ],
    };
  },
  methods: {
  },
};
</script>
