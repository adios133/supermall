<template>
  <div id="shop-cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav">
      <template v-slot:center> 购物车({{ cLength }}) </template>
    </nav-bar>
    <!-- 滚动区域 -->
    <scroll ref="cartScroll" class="cart-scroll">
      <goods-list />
    </scroll>
    <bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "./childComponents/GoodsList";
import BottomBar from "./childComponents/BottomBar";
// mapgetters,导入getters
import { mapGetters } from "vuex";

export default {
  name: "",
  components: {
    NavBar,
    Scroll,
    GoodsList,
    BottomBar,
  },
  computed: {
    // 两种方式，数组，对象（对象可以自定义名字）
    // ...mapGetters(['cartLength']),
    ...mapGetters({
      cLength: "cartLength",
    }),
  },
  activated() {
    // 当进入该页面，刷新滚动高度
    this.$refs.cartScroll.refresh();
  },
};
</script>

<style scoped>
#shop-cart {
  height: 100vh;
}
.cart-nav {
  color: #fff;
  background-color: var(--color-tint);
}
.cart-scroll {
  height: calc(100% - 138px);
  overflow: hidden;
}
</style>
