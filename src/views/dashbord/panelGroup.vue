<template>
  <el-row :gutter="20" class="panel_group">
    <el-col
      v-for="(p, index) in panelLists"
      :key="index"
    >
      <div class="panel_card" :style="{ background: p.color }">
        <div>
          {{ p.name }}
        </div>
        <countTo
          :startVal="p.startVal"
          :endVal="p.endVal"
          :duration="p.duration"
        />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import countTo from "vue-count-to"; //数字滚动插件
export default {
  name: "panelGroup",
  components: {
    countTo,
  },
  /**
   * startVal    开始数值
   * endVal      结束数值
   * duration    持续时间   以毫秒为单位
   */
  data() {
    return {
      panelLists: [
        {
          startVal: 0,
          endVal: 2000,
          duration: 1200,
          name: "name1",
          color: "#67c23a",
        },
        {
          startVal: 0,
          endVal: 2000,
          duration: 1200,
          name: "name2",
          color: "#e6a23c",
        },
        {
          startVal: 0,
          endVal: 2000,
          duration: 1200,
          name: "name3",
          color: "#f56c6c",
        },
        {
          startVal: 0,
          endVal: 2000,
          duration: 1200,
          name: "name4",
          color: "#409eff",
        },
      ],
    };
  },
};
</script>

<style scoped>
.panel_group {
  display: flex;
  flex-direction: row;
  justify-content: space-spa;
  align-items: center;
}
.panel_card {
  background-color: #fff;
  line-height: 5em;
  border-radius: 10px;
  margin: 18px 12px;
}
</style>