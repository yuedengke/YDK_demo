<template>
  <div class="banner">
    <img
      v-for="(img, index) in imgLists"
      :key="index"
      :src="img"
      v-show="index === cur"
      height="240px"
      width="1000px"
    />
    <!-- <div class="banner_circle">
      <ul>
        <li
          v-for="(img, index) in imgLists"
          :key="index"
          :class="{ selected: cur === index }"
        ></li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      imgLists: [
        require("@/assets/banner/1.jpg"),
        require("@/assets/banner/2.jpg"),
        require("@/assets/banner/3.jpg"),
        require("@/assets/banner/4.jpg"),
        require("@/assets/banner/5.jpg"),
      ],
      cur: 0, //初始化
      timer: null, //定时器初始化
    };
  },
  mounted() {
    //初始化
    this.autoPlay();
  },
  methods: {
    play() {
      this.cur++;
      if (this.cur === this.imgLists.length) {
        this.cur = 0;
      }
    },
    autoPlay() {
      this.timer = setInterval(this.play, 2000);
    },
  },
  destroyed() {
    // 销毁定时器
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
</style>