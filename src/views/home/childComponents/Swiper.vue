<template>
  <div class="swiperCpn">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
          <img :src="item.image" alt="" @load="imageLoad">
  </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant"
// 导入样式，很重要！！！！！
import 'vant/lib/swipe/style'

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    },
  },
  data() {
    return {
      isLoad:false
    }
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('swiperLoad')
        this.isLoad = true
      }
    }
  }
};
</script>

<style scoped>

.swiperCpn img {
  width: 100%;
}
</style>
