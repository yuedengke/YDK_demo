<template>
  <div>
    <!-- 轮播 -->
    <div class="card_banner">
      <banner />
    </div>
    <!-- 数字滚动 -->
    <div class="card_background">
      <panel-group />
    </div>
    <!-- echarts图表 -->
    <div class="card_echarts">
      <line-echarts />
      <line-echarts />
      <line-echarts />
    </div>
  </div>
</template>

<script>
import banner from "../../components/banner/banner.vue";
import lineEcharts from "./lineEcharts.vue";
import panelGroup from "./panelGroup.vue";
export default {
  name: "dashbord",
  components: {
    banner,
    panelGroup,
    lineEcharts,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.card_banner {
  height: 15em;
  background-color: #b3c0d1;
  border: 1px solid darkgrey;
  /* 设置圆角 */
  border-radius: 10px;
}
.card_background {
  height: 12em;
  background-color: #b3c0d1;
  border: 1px solid darkgrey;
  /* 设置圆角 */
  border-radius: 10px;
  margin-top: 12px;
}
.card_echarts {
  background-color: #b3c0d1;
  border: 1px solid darkgrey;
  /* 设置圆角 */
  border-radius: 10px;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>