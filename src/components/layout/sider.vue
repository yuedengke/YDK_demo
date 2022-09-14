<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div v-for="(r, i) in routerLists" :key="i">
        <router-link :to="r.path">
          <el-menu-item :index="i + 1">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ r.name }}</span>
          </el-menu-item>
        </router-link>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "sider",
  data() {
    return {};
  },
  computed: {
    ...mapState("route", ["routerLists"]),
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo {
  padding-top: 20px;
  min-height: 53.4em;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
.el-menu-item {
  float: left;
}
</style>