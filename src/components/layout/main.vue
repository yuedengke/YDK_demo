<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {};
  },
};
</script>

<style scoped>
.main {
  /* 小于1024px,横向出现滚动条 */
  min-width: 64em;
  overflow: hidden;
}
</style>