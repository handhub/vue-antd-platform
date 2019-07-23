<template>
  <global-layout>
    <a-tabs
      :active-key="activePage"
      type="editable-card"
      @change="changePage"
      @edit="onEdit"
      :hideAdd="true"
    >
      <a-tab-pane :id="page.fullPath" :key="page.fullPath" v-for="page in pageList">
        <span slot="tab" :pagekey="page.fullPath">{{page.name}}</span>
      </a-tab-pane>
    </a-tabs>
    <div class="breadcrumb wide">
      <a-breadcrumb>
        <a-breadcrumb-item :key="item.path" v-for="(item, index) in breadcrumb">
          <span v-if="index === 0"><a href="#/dashboard/workplace">{{item.name}}</a></span>
          <span v-else>{{item.name}}</span>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <transition name="page-toggle">
      <router-view />
    </transition>
  </global-layout>
</template>

<script>
import GlobalLayout from './GlobalLayout.vue';
/* eslint-disable */ 
export default {
  components: { GlobalLayout },
  data() {
    return {
      activePage: '',
      pageList: [],
      breadcrumb: [],
    };
  },
  watch: {
    'activePage'(key) {
      this.$router.push(key);
    },
    '$route'(newRoute, oldRoute) {
      this.activePage = newRoute.fullPath;
      const found = this.pageList.find((item) => {
        return item.fullPath === newRoute.fullPath;
      });
      if (!found) {
        this.pageList.push(newRoute);
      }
    },
  },
  methods: {
    changePage(key) {
      this.activePage = key;
    },
    onEdit(key, action) {
      if (action === 'remove') {
        this.remove(key);
      }
    },
    remove(key) {
      if (this.pageList.length === 1) {
        this.$message.warning('这是最后一页，不能再关闭了');
        return;
      }
      const removeIndex = this.pageList.findIndex((item) => {
        return item.fullPath === key;
      });
      const currentIndex = this.pageList.findIndex((item) => {
        return item.fullPath === this.activePage;
      });
      this.pageList = this.pageList.filter(item => item.fullPath !== key);
      if (removeIndex < currentIndex || currentIndex === this.pageList.length) {
        this.activePage = this.pageList[currentIndex -1].fullPath;
      } else {
        this.activePage = this.pageList[currentIndex].fullPath;
      }
    },
    getBreadcrumb() {
      this.breadcrumb = this.$route.matched;
    },
  },
  created() {
    this.pageList.push(this.$route);
    this.activePage = this.$route.fullPath;
  },
  mounted() {
    this.getBreadcrumb();
  },
  updated() {
    this.getBreadcrumb();
  },
};
</script>

<style lang="less" scoped>
.wide{
  margin-bottom:16px;
}
</style>

