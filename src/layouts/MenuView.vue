<template>
  <div>
    <div class="logo">
      <img src="@/assets/img/logo.svg">
      <h1>Vue Antd Platform</h1>
    </div>
    <a-menu
      mode="inline"
      theme="dark"
      :openKeys.sync="openKeys"
      :selectedKeys="selectedKeys"
    >
      <a-sub-menu v-for="(item, index) in data" :key="index">
        <span slot="title">
          <a-icon :type="item.icon" />
          <span>{{item.title}}</span>
        </span>
        <a-menu-item v-for="sub in item.children" :key="sub.path">
          <router-link :to="sub.path">{{sub.name}}</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    collapsed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      openKeys: [],
      selectedKeys: [this.$route.path],
    };
  },
  watch: {
    $route(val) {
      this.selectedKeys = [val.path];
    },
    data() {
      this.updateMenu();
    },
    collapsed(val) {
      if (val) {
        this.openKeys = [];
      } else {
        this.updateMenu();
      }
    },
  },
  methods: {
    updateMenu() {
      const menuIndex = this.data.findIndex(item => item.children.findIndex(sub => sub.path === this.selectedKeys[0]) !== -1);
      this.openKeys = [menuIndex];
    },
  },
};
</script>

<style lang="less" scoped>
.logo{
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: 24px;
  transition: all .3s;
  overflow: hidden;
  background-color: #002140;
  img{
    width: 32px;
    display: inline-block;
    vertical-align: middle;
    border-style: none;
  }
  h1{
    color: #fff;
    font-size: 20px;
    margin: 0 0 0 12px;
    font-family: Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;
    font-weight: 600;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    vertical-align: middle;
  }
}
</style>
