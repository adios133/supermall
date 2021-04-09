<template>
  <div class="goods-list">
    <goods-list-item :itemData="item" v-for="(item, index) in goods" :key="index" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 5px;
  padding: 0 3px;
}
</style>
