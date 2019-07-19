<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
//页面切换动画
.page-toggle-enter-active{
  transition: all 0.2s ease-in 0.25s;
}
.page-toggle-leave-active{
  transition: all 0.2s ease-out 0s;
}
.page-toggle-enter, .page-toggle-leave-to{
  opacity: 0;
  padding: 0px;
}
</style>
