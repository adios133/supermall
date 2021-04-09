<template>
  <div class="">
    <tab-bar>
      <tab-bar-item path="/home">
        <template #item-img-normal>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </template>
        <template #item-img-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template #item-title>
          <div>主页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template #item-img-normal>
          <img src="~assets/img/tabbar/category.svg" alt="" />
        </template>
        <template #item-img-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template #item-title>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <template #item-img-normal>
          <img src="~assets/img/tabbar/shopcart.svg" alt="" />
        </template>
        <template #item-img-active>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
        </template>
        <template #item-title>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template #item-img-normal>
          <img src="~assets/img/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <template #item-title>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "",
  components: {
    TabBarItem,
    TabBar,
  },
};
</script>

<style scoped></style>
