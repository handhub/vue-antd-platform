<template>
  <div>
    Dashboard
  </div>
</template>

<script>
import user from '@/api/const/user';

export default {
  created() {
    this.getTest();
  },
  methods: {
    getTest() {
      const param = {
        id: 1,
        value: 'xxx',
      };
      this.$reqPost(user.Demo, param).then((res) => {
        window.console.log(res);
      });
    },
  },
};
</script>
