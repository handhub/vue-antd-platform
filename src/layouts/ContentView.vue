<template>
  <global-layout>
    <transition name="page-toggle">
      <router-view />
    </transition>
  </global-layout>
</template>

<script>
import GlobalLayout from './GlobalLayout.vue';

export default {
  components: { GlobalLayout },
};
</script>
