<template>
  <div class='cart-goods-list'>
    <goods-list-item v-for="(item,index) in goodsList" :key="index" :info="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem"
  export default {
    name:'',
    components: {
      GoodsListItem
    },
    data() {
      return {
        goodsList:this.$store.state.cartList
      }
    },
  }
</script>

<style scoped>


</style>