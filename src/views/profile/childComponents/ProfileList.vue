<template>
  <div class="proflie-list">
    <div>
      <img src="~assets/img/profile/message.svg" alt="" />
      <i>我的消息</i>
    </div>
    <div>
      <img src="~assets/img/profile/pointer.svg" alt="" />
      <i>积分商城</i>
    </div>
    <div>
      <img src="~assets/img/profile/vip.svg" alt="" />
      <i>会员卡</i>
    </div>
    <div>
      <img src="~assets/img/profile/cart.svg" alt="" />
      <i>我的购物车</i>
    </div>
    <div>
      <img src="~assets/img/profile/shopping.svg" alt="" />
      <i>下载APP</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped>
.proflie-list img {
  width: 1.2rem;
  vertical-align: middle;
  margin: 0.5rem;
}
.proflie-list i {
  font-style: normal;
  font-size: 0.9rem;
}
.proflie-list > div {
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid #eee;
}
</style>
