<template>
  <div class="shop-info">
    <div class="shop-info-brand">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-detail">
      <div class="shop-about">
        <div class="c-sells">
          <div>{{ shopInfo.cSells | sellFix }}</div>
          <div>总销量</div>
        </div>
        <div class="c-goods">
          <div>{{ shopInfo.cGoods }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-score">
        <div v-for="(item, index) in shopInfo.score" :key="index" class="shop-score-item">
          <span>{{ item.name }}</span>
          <span :class="{ better1: item.isBetter }">{{ item.score | scoreFix(2)}}</span>
          <span :class="{ better2: item.isBetter }"><i>{{
            item.isBetter ? "高" : "低"
          }}</i></span>
        </div>
      </div>
    </div>
    <div class="go-shop"><i>进店逛逛</i></div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellFix(num) {
      const result = num
      if(result > 10000) {
        return (result/10000).toFixed(1) + '万'
      }
      return result
    },
    scoreFix(num,fix) {
      return num.toFixed(fix)
    }
  },
  methods: {},
};
</script>

<style scoped>
  .shop-info {
    padding: 1.6rem 0.8rem;
    box-shadow: 0 1px 1px 1px rgba(0,0,0,.1);
  }
  .shop-info img {
    width: 18vw;
    vertical-align: middle;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.08);
  }
  .shop-info .shop-info-brand span {
    padding: 1rem;
    font-size: 1.2rem;
    color: #333;
  }
  .shop-detail {
    display: flex;
    margin-top: 1.2rem;
  }
  .shop-about,
  .shop-score {
    flex: 1;
  }
  .shop-about {
    display: flex;
    font-size: 1.4rem;
    border-right: 1px solid #ccc;
  }
  .c-sells,
  .c-goods {
    flex: 1;
    text-align: center;
    padding: 0.5rem;
    color: #000;
  }
  .c-sells div:last-child,
  .c-goods div:last-child {
    margin-top: 0.5rem;
    font-size: 0.75rem;
  }
  .shop-info .shop-score {
    font-size: 0.8rem;
  }
  .shop-score-item {
    display: flex;
    margin-left: 5vw;
  }
  .shop-score span {
    flex: 2;
    /* text-align: center; */
    color: #000;
    font-size: 0.8rem;
    line-height: 1.4rem;
  }
  .shop-score span:nth-child(2) {
    flex: 1;
    color: #0a0;

  }
  .shop-score span:last-child {
    flex: 1;
    width: .5rem;
    color: #fff;
  }
  .shop-score span:last-child i {
    padding: 1px;
    font-style: normal;
    background-color: #0a0;
    border-radius: 15%;
  }
  .shop-info .shop-score .better1 {
    color: red;
  }
  .shop-info .shop-score .better2 i {
    background-color: #f00;
  }
  .go-shop {
    margin: 2rem 0 0; 
    text-align: center;
    color: #000;
  }
  .go-shop i {
    height: 1.5rem;
    padding: .5rem 2rem;
    line-height: 1.5rem;
    font-style: normal;
    background-color: #f2f5f8;
    border-radius: .5rem;
  }
</style>
