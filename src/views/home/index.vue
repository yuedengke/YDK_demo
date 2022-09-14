<template>
  <div>
    <el-container>
      <el-header> <Header /></el-header>
      <el-container>
        <el-aside width="200px"><Sider /></el-aside>
        <el-main><Main /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "../../components/layout/headers.vue";
import Sider from "../../components/layout/sider.vue";
import Main from "../../components/layout/main.vue";
export default {
  name: "home",
  components: {
    Header,
    Sider,
    Main,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  min-height: 54.6em;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>