<template>
  <div>
    <div class="header_title">客户管理系统</div>
    <div class="header_btn">
      <el-button type="primary" @click="goBack()">退出</el-button>
    </div>
    <el-badge class="item" :value="12">
      <el-button
        class="share-button"
        icon="el-icon-share"
        type="primary"
      ></el-button>
    </el-badge>
  </div>
</template>

<script>
export default {
  name: "headers",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>

<style scoped>
.header_title {
  float: left;
  font-size: 20px;
  font-weight: bold;
  color: blue;
}
.header_btn {
  float: right;
}
.item {
  margin-right: 40px;
  margin-left: 40px;
  float: right;
}
</style>