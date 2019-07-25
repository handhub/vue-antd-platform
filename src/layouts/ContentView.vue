<template>
  <global-layout>
    <a-tabs
      :active-key="activeKey"
      type="editable-card"
      @change="showTab"
      @edit="onEdit"
      :hideAdd="true"
    >
      <a-tab-pane :key="index + ''" v-for="(item, index) in tabs">
        <span slot="tab">{{item.title}}</span>
      </a-tab-pane>
    </a-tabs>
    <!-- <div class="breadcrumb wide">
      <a-breadcrumb>
        <a-breadcrumb-item :key="item.path" v-for="(item, index) in breadcrumb">
          <span v-if="index === 0"><a href="/"></a></span>
          <span v-else>{{item.meta.name}}</span>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div> -->
    <transition name="page-toggle">
      <router-view />
    </transition>
  </global-layout>
</template>

<script>
import GlobalLayout from './GlobalLayout.vue';

export default {
  components: { GlobalLayout },
  data() {
    return {
      activeKey: 0,
      tabs: [],
      breadcrumb: [],
    };
  },
  methods: {
    showTab(key) {
      const menu = this.tabs[key];
      this.activeKey = `${key}`;
      this.$router.push({ path: menu.path, query: { menu: menu.menuIndex, token: menu.token } });
    },
    onEdit(key, action) {
      if (action === 'remove') {
        this.remove(key);
      }
    },
    remove(key) {
      if (this.tabs.length === 1) {
        this.$message.warning('这是最后一页，不能再关闭了');
        return;
      }
      this.tabs.splice(key, 1);
      if (key < this.activeKey || this.activeKey - this.tabs.length === 0) {
        this.showTab(this.activeKey - 1);
      } else {
        this.showTab(this.activeKey);
      }
    },
    listenMenu() {
      this.$bus.$on('showMenu', (menu) => {
        const found = this.tabs.find(item => item.path === menu.path);
        if (!found) {
          this.tabs.push(menu);
        }
        const index = this.tabs.findIndex(item => item.path === menu.path);
        this.showTab(index);
      });
    },
  },
  created() {
    this.listenMenu();
  },
};
</script>

<style lang="less" scoped>
.wide{
  margin-bottom:16px;
}
</style>
