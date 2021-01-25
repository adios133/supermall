<template>
  <div class="category-item">
    <img :src="item.image" alt="" @load="imgLoad"/>
    <p>{{ item.title }}</p>
  </div>
</template>

<script>
// 引入防抖函数
import {debounce} from "common/utils"
export default {
  name: "",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      debounce(this.$bus.$emit('imgLoad'),50)
      
    }
  }
};
</script>

<style scoped>
.category-item {
  width: 4rem;
  margin: .7rem;
  text-align: center;
}
.category-item img {
  width: 100%;
  margin-bottom: .3rem;
}
.category-item p {
  font-size: .8rem;
}
</style>
