<template>
  <div class='goods-item' @click="linkTo">
      <img :src="showImg" alt="" @load="imgLoad">
      <p>{{itemData.title}}</p>
      <span class="price">￥:{{itemData.price}}</span>
      <span class="collection">{{itemData.cfav}}</span>
  </div>
</template>

<script>

  export default {
    props: {
      itemData:{
        type:Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      // 当img加载完成时，触发事件，以便刷新DOM  服务于better-scroll，采用事件总线的方式，与scroll.vue通信
      imgLoad() {
        // console.log(this.$bus);
        this.$bus.$emit("imgLoad")
      },
      linkTo() {
        // console.log(this.itemData);
        this.$router.push('/detail/' + this.itemData.iid)
      },
      
    },
    computed: {
      showImg() {
        return  this.itemData.image ||this.itemData.show.img
      },
      // 并没有对应数据
      // productId() {
      //   return this.itemData.item_id || this.itemData.iid
      // }
    }

  }
</script>

<style scoped>
  .goods-item {
    flex: 45%;
    overflow: hidden;
    margin: 10px 7px;
    padding-bottom: 5px;
    font-size: 12px;
    text-align: center;
    /* border: 1px solid #eee; */
    border-radius: 6%;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,.1);
    
  }
  .goods-item img {
    width: 100%;
  }
  .goods-item p {
    margin: 5px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goods-item span {
    margin:10px;
  }
  .goods-item .price {
    color: var(--color-high-text);
  }
  .goods-item .collection {
    position: relative;
  }

  .goods-item .collection::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>