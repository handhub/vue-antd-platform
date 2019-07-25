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
        <a-menu-item v-for="sub in item.children" :key="sub.path" @click="openMenu(sub)">
          <span>{{sub.title}}</span>
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
    $route(to) {
      this.selectedKeys = [to.path];
      if (!this.collapsed) {
        const key = to.query.menu;
        const found = this.openKeys.find(v => v === key);
        if (!found) {
          this.openKeys.push(key);
        }
        // 手风琴效果 只打开选中的菜单
        // this.openKeys = [key];
      }
    },
    data(val) {
      if (!this.$route.query.token) {
        this.$router.replace({ name: 'login' });
        return;
      }
      let menu = val[0].children[0];
      if (this.$route.path !== '/') {
        val.every((item) => {
          menu = item.children.find(sub => sub.path === this.$route.path);
          return !menu;
        });
      }
      if (menu) {
        this.openKeys = [menu.menuIndex];
        this.$bus.$emit('showMenu', menu);
      } else {
        this.$router.replace({ name: 'login' });
      }
    },
    collapsed(val) {
      if (val) {
        this.openKeys = [];
      } else {
        this.openKeys = [parseInt(this.$route.query.menu, 10)];
      }
    },
  },
  methods: {
    openMenu(item) {
      this.$bus.$emit('showMenu', item);
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
