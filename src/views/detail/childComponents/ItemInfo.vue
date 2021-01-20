<template>
  <div class='item-info'>
    <p>{{itemInfo.title}}</p>
    <span class="price">{{itemInfo.newPrice}}</span>
    <span class="old-price"> {{itemInfo.oldPrice}} </span>
    <span class="discount" 
    :style="{backgroundColor:itemInfo.discountBgColor}"
    v-if="itemInfo.discountDesc != ''">{{itemInfo.discountDesc}}</span>
    <div class="columns">
      <span v-for="item in itemInfo.columns" :key="item">{{item}}</span>
    </div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    name:'',
    props: {
      itemInfo:{
        type:Object,
        default() {
          return {}
        }
      }
    },
    data () {
      return {

      };
    },
    
  }
</script>

<style scoped>
.item-info {
  margin-top: 8px;
  font-size: 1.1rem;
  box-shadow: 0 1px 1px 1px rgba(0,0,0,.1);
}
.item-info p {
  padding: 8px;
  line-height: 1.5rem;
  color: #000;
}

.item-info .price {
  margin-left: 3vw;
  color: var(--color-high-text);
  font-size: 1.7rem;
}
.item-info .old-price {
  margin-left: .5rem;
  line-height: .8rem;
  color: #999;
  font-size: 1.1rem;
  text-decoration: line-through;
}
.item-info .discount {
  position: relative;
  top: -.4rem;
  padding: 4px;
  margin-left: 12px;
  font-size: .8rem;
  color: #fff;
  border-radius: 6px;
}
.columns {
  display: flex;
  justify-content: space-between;
  padding: 20px 6px;
  font-size: .9rem;
  color: #999;
  
} 


</style>