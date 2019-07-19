<template>
  <div class="global-header">
    <div class="global-header-wide">
      <a-icon @click="toggle"
      class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      <div class="global-header-right">
        <header-search class="header-item"/>
        <header-notice class="header-item"/>
        <header-avatar class="header-item"/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSearch from './head/HeaderSearch.vue';
import HeaderNotice from './head/HeaderNotice.vue';
import HeaderAvatar from './head/HeaderlAvatar.vue';

export default {
  components: { HeaderSearch, HeaderNotice, HeaderAvatar },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
      this.$emit('toggle', this.collapsed);
    },
  },
};
</script>


<style lang="less" scoped>
.trigger{
  font-size: 20px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
  border:none;
}
.trigger:hover{
  color: #1890ff;
}
.header-item{
  padding: 0 12px;
  display: inline-block;
  height: 100%;
  cursor: pointer;
  vertical-align: middle;
  i{
    font-size: 16px;
    color: rgba(0,0,0,.65);
  }
}
.global-header{
  padding: 0 24px 0 0;
  -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  position: relative;
  &.light{
    background: #fff;
  }
  &.dark{
    background: #001529;
  }
  .global-header-wide{
    &.head{
      max-width: 1400px;
      margin: auto;
    }
    &.side{
    }
    .logo {
      height: 64px;
      line-height: 58px;
      vertical-align: top;
      display: inline-block;
      padding: 0 12px 0 24px;
      cursor: pointer;
      font-size: 20px;
      &.pc{
        padding: 0 12px 0 0;
      }
      img {
        display: inline-block;
        vertical-align: middle;
      }
      h1{
        display: inline-block;
        font-size: 16px;
      }
      &.dark h1{
        color: #fff;
      }
    }
    .global-header-menu{
      display: inline-block;
    }
    .global-header-right{
      float: right;
      &.dark{
        color: #fff;
        i{
          color: #fff;
        }
      }
    }
  }
}
</style>
