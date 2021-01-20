<template>
  <div class="bottom-bar">
    <div class="left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="shopcart">加入购物车</div>
      <div class="purchases">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 49px;
  background-color: #fff;
}
.left,
.right {
  display: flex;
  flex: 1;
  height: 100%;
  width: 50%;
  line-height: 49px;
}
/* 左边部分 */
.left {
  font-size: .9rem;
}
.left>div {
  flex: 1;
  text-align: center;
}
.left .icon {
  display: block;
  width: 1.35rem;
  height: 1.35rem;
  margin: .35rem auto 0;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100% ;
}
/* 字体和图标为什么间距这么大 */
.left .text {
  position: relative;
  top: -.8rem;
}
.left .service {
  background-position: 0 -3.19rem;
}
.left .shop {
  background-position: 0 -5.88rem;
}


/* 右边部分 */
.right {
  text-align: center;
  color: #fff;
  justify-content: space-between;
}
.shopcart, .purchases {
  flex: 1;
  width: 50%;
}
.right .shopcart {
  background-color: #ffde11;
}
.right .purchases {
  background-color: var(--color-tint);
}
</style>
