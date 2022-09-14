<template>
  <div id="myChart" :style="{ width: '30em', height: '20em' }"></div>
</template>

<script>
export default {
  name: "lineEcharts",

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
#myChart {
  background-color: #fff;
  border: 1px solid darkgrey;
  /* 设置圆角 */
  border-radius: 10px;
  width: 100vw;
  margin: 18px 12px;
}
</style>