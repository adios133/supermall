<template>
  <div class='recommend'>
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
        <img :src="item.image" :alt="item.title"  class="recommend-item-img" @load="imageLoad">
        <div class="recommend-item-title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    name:'',
    components: {

    },
    props: {
      recommend: {
        type:Array,
        default() {
          return []
        }
      }
    },
    data() {
      return{
        isLoad:false
      }
    },
    methods: {
      imageLoad() {
        if(!this.isLoad) {
        this.$emit("recommendLoad")
        this.isLoad = true
        }
      }
    }
  
  }
</script>

<style scoped>
/* @import url(); */
.recommend {
  display: flex;
  background-color: #fff;
  box-shadow: 0 1px 1px 1px rgba(0,0,0,.05);
}
.recommend-item {
  flex: 1;
  font-size: 13px;
  text-align: center;
}
.recommend img {
  width: 70px;
  margin: 10px 0;
}
.recommend-item-title {
  padding-bottom: 8px;
}
</style>