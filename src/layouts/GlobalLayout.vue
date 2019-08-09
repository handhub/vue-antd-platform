<template>
  <div>
    <a-layout class="lay-out-wrap">
      <a-layout-sider width="260"
      :trigger="null"
      collapsible
      v-model="collapsed">
        <menu-view :data="menuData" :collapsed="collapsed"></menu-view>
      </a-layout-sider>
      <a-layout class="wrap-view">
        <a-layout-header class="head-view">
          <head-view @toggle="toggleMenu"></head-view>
        </a-layout-header>
        <a-layout-content class="content-view">
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
      theme: 'dark',
      menuData: [],
    };
  },
  methods: {
    toggleMenu(val) {
      this.collapsed = val;
    },
    getMenus() {
      this.$request.post('/user/menus', { token: this.$route.query.token }).then((res) => {
        const { data } = res;
        data.forEach((item, index) => {
          item.children.forEach((subItem, subIndex) => {
            data[index].children[subIndex].menuIndex = index;
            data[index].children[subIndex].token = this.$route.query.token;
          });
        });
        this.menuData = data;
      });
    },
  },
  created() {
    this.getMenus();
  },
};
</script>

<style lang="less" scoped>
.lay-out-wrap{
  flex-direction: row;
}
.wrap-view{
  min-height:100vh;
  display:flex;
  flex-direction: column;
}
.head-view{
  padding: 0;
  height: 64px;
  line-height: 64px;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  position: relative;
  background: #fff;
}
.content-view{
  position:relative;
  flex:1;
  padding:14px 14px 0;
}
</style>
