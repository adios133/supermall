<template>
  <div class='category-detail'>
    <category-item v-for="(item,index) in cateList" 
    :key="index" 
    :item="item" 
    class="cate-item clear-fix" />
  </div>
</template>

<script>
  import CategoryItem from "./CategoryItem"

  export default {
    name:'',
    components: {
      CategoryItem
    },
    props: {
      cateList: {
        type:Array,
        default() {
          return []
        }
      }
    },
    computed: {
      cateLen() {
        return this.cateList.length
      }
    },
    methods: {

    },
  }
</script>

<style scoped>
.category-detail {
  overflow: hidden;
}
.category-detail .cate-item {
  float: left;
  width: 25%;
}
</style>