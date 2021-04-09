<template>
  <div id="detail">
    <nav-bar @navClick="pageScroll" ref="detailNav" />
    <scroll
      class="detail-scroll"
      ref="scroll"
      @scrollPosition="pageScroller"
      :probeType="3"
    >
      <swiper :swiperImg="swiperImg" @swiperLoad="imgLoad" />
      <item-info :itemInfo="itemInfo" />
      <services :services="itemInfo" />
      <shop-info :shopInfo="shopInfo" />
      <detail-info :detailInfo="detailInfo" @imageLoad="imgLoad" />
      <detail-params :goodsParams="goodsParams" ref="Dparams" />
      <detail-comment :commentInfo="commentInfo" ref="Dcomment" />
      <goods-list :goods="recommendList" ref="Dgoods" />
    </scroll>
    <to-top @click.native="topClick" v-show="isShowTop" />
    <bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
import NavBar from "./childComponents/NavBar";
import Swiper from "./childComponents/Swiper";
import ItemInfo from "./childComponents/ItemInfo";
import Services from "./childComponents/Services";
import ShopInfo from "./childComponents/ShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailInfo from "./childComponents/DetailInfo";
import DetailParams from "./childComponents/DetailParams";
import DetailComment from "./childComponents/DetailComment";
import GoodsList from "components/content/goods/GoodsList";
import BottomBar from "./childComponents/BottomBar";

import { imgFunction, toTopFn } from "common/mixin";

// 引入网络请求封装
import { getDetailData, itemInfo, Shop, GoodsParams, getRecommend } from "network/detail";
import { TOP_DISTANCE } from "common/const";

export default {
  name: "Detail",
  components: {
    NavBar,
    Swiper,
    ItemInfo,
    Services,
    ShopInfo,
    Scroll,
    DetailInfo,
    DetailParams,
    DetailComment,
    GoodsList,
    BottomBar,
  },
  data() {
    return {
      iid: "",
      swiperImg: [],
      itemInfo: {},
      shopInfo: {},
      detailInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommendList: [],
      pageOffset: [],
      counter: 0,
      currentIndex: 0,
    };
  },
  mixins: [imgFunction, toTopFn],
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      // 由于该事件同时监听了轮播图图片加载（两个都做了处理两个的所有图片只会触发一次），所以当两个都触发才获取offsetTop
      if (++this.counter == 2) {
        this.pageOffset.push(0);
        this.pageOffset.push(this.$refs.Dparams.$el.offsetTop - 44);
        this.pageOffset.push(this.$refs.Dcomment.$el.offsetTop - 44);
        this.pageOffset.push(this.$refs.Dgoods.$el.offsetTop - 44);
        this.pageOffset.push(Number.MAX_VALUE);
      }
    },
    pageScroll(index) {
      // 点击导航跳转到指定位置   目前scroll距离顶部有nav-bar高度距离44，所以要减去
      this.$refs.scroll.scrollTo(0, -this.pageOffset[index], 300);
    },
    pageScroller(position) {
      // 显示回到顶部功能mixin，这个是不能混入的，methods内部的方法合并，方法内部会直接覆盖
      this.isShowTop = -position.y > TOP_DISTANCE;

      // 做当滚动到指定位置，nav对应变化
      /* 
        eg :[0,2000,3000,4000,max]
        0- 2000   详情
        2000-3000  params
        3000-4000  comment
        4000- max  recommend
      */
      for (let i = 0; i < this.pageOffset.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          -position.y >= this.pageOffset[i] &&
          -position.y < this.pageOffset[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.detailNav.currentIndex = this.currentIndex;
        }
      }
    },
    addToCart() {
      // 添加到购物车
      // 按理应该讲用户信息一并传递，本案案例没有做
      const addGoods = {};
      addGoods.image = this.swiperImg[0];
      addGoods.title = this.itemInfo.title;
      addGoods.iid = this.iid;
      addGoods.price = this.itemInfo.lowPrice;
      addGoods.desc = this.detailInfo.desc;
      // 操作较复杂，先dispatch到actions
      this.$store.dispatch("addCart", addGoods).then((res) => {
        this.$toasts.show(res);
        // console.log(this.$toas);
      });
    },
  },
  created() {
    // 1.获取传过来的商品id
    this.iid = this.$route.params.iid;
    // 请求数据
    getDetailData(this.iid).then((res) => {
      const data = res.result;
      // 轮播图数据
      this.swiperImg = data.itemInfo.topImages;
      this.itemInfo = new itemInfo(data.itemInfo, data.columns, data.shopInfo);
      this.shopInfo = new Shop(data.shopInfo);
      // 详情数据
      this.detailInfo = data.detailInfo;
      // 参数数据
      this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule);
      // 用户品论
      this.commentInfo = data.rate.list[0];
    });
    // 获取推荐数据
    getRecommend().then((res) => {
      this.recommendList = res.data.list;
    });
  },
  destroyed() {
    // 取消事件中心监听
    this.$bus.$off("imgLoad", this.refreshFn);
  },
};
</script>

<style scoped>
.detail-scroll {
  overflow: hidden;
  height: calc(100vh - 93px);
}
</style>
