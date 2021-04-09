<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ff8198">
    <van-swipe-item v-for="(item, index) in swiperImg" :key="index">
      <img :src="item" alt="" @load="swiperLoad" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
// 导入样式，很重要！！！！！
import "vant/lib/swipe/style";

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  name: "",
  props: {
    swiperImg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  computed: {},
  methods: {
    swiperLoad() {
      if (!this.isLoad) {
        this.$emit("swiperLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
.my-swipe {
  height: 67vw;
}
.my-swipe img {
  width: 100%;
  transform: translate(0, -100px);
}
</style>
