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
      @openChange="openChange"
    >
      <a-sub-menu v-for="(item, index) in data" :key="index+''">
        <span slot="title">
          <a-icon :type="item.icon" />
          <span>{{item.title}}</span>
        </span>
        <a-menu-item v-for="sub in item.children"
        :key="sub.path">
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
  },
  data() {
    return {
      openKeys: [],
      defaultOpenKeys: [0],
      selectedKeys: [],
    };
  },
  watch: {
    openKeys(val) {
      window.console.log('openKeys', val);
    },
    $route(val) {
      this.selectedKeys = [`${val.path}`];
    },
  },
  methods: {
    openChange(Keys) {
      window.console.log(Keys);
    },
  },
  created() {
    /* eslint-disable */
    this.selectedKeys = [`${this.$route.path}`];
    let selectIndex = [];
    const getSelectedIndex = (datas, indexs) => {
      let k = 0,
        len = Array.isArray(datas) ? datas.length : 0;
      while (k < len) {
        let data = datas[k];
        if (data.path && data.path == this.selectedKeys) {
          selectIndex = indexs;
          return;
        } else {
          k += 1;
          getSelectedIndex(data.children, [...indexs, (k - 1).toString()]);
        }
      }
    };
    getSelectedIndex(this.data, []);
    this.openKeys = selectIndex;
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
