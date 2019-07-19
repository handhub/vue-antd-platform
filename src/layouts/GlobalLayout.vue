<template>
  <div>
    <a-layout class="lay-out-wrap">
      <a-layout-sider width="260" breakpoint="lg"
      :trigger="null"
      collapsible
      v-model="collapsed">
        <menu-view :data="menuData"></menu-view>
      </a-layout-sider>
      <a-layout style="min-height:100vh;">
        <a-layout-header class="head-view">
          <head-view @toggle="toggleMenu"></head-view>
        </a-layout-header>
        <a-layout-content>
          <slot></slot>
        </a-layout-content>
        <a-layout-footer>
          <foot-view></foot-view>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import HeadView from './HeadView.vue';
import MenuView from './MenuView.vue';
import FootView from './FootView.vue';

export default {
  components: {
    HeadView, MenuView, FootView,
  },
  data() {
    return {
      collapsed: false,
      collapsed2: false,
      theme: 'dark',
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
  created() {
    // this.$axios.get('/menuList', {}).then((res) => {
    //   this.menuData = res.data;
    // });
  },
  methods: {
    toggleMenu(val) {
      this.collapsed = val;
    },
  },
};
</script>

<style lang="less" scoped>
.lay-out-wrap{
  flex-direction: row;
}
.head-view{
  padding: 0;
  height: 64px;
  line-height: 64px;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  position: relative;
  background: #fff;
}
</style>
