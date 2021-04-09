<template>
  <div id="category">
    <!-- 导航 -->
    <nav-bar class="cate-nav">
      <template v-slot:center> 商品分类 </template>
    </nav-bar>
    <div class="cate-content">
      <!-- 侧边分类 -->
      <slide-menu :categories="sildeList" @itemSelect="itemSelect" />
      <div class="right-content">
        <tab-controller
          :goodsType="['流行', '新款', '热卖']"
          @goodsSwitch="goodsSwitch"
          ref="tabControl1"
          class="tab-contrl"
          v-show="isFixed"
        />

        <!-- 滚动部分 -->
        <scroll
          class="cate-scroll scroll-box"
          ref="scroll"
          @scrollPosition="homeScroll"
          :probeType="3"
        >
          <!-- 分类细节部分 -->
          <category-detail :cateList="categoryDetail" />
          <!-- tabcontroller -->
          <tab-controller
            :goodsType="['流行', '新款', '热卖']"
            @goodsSwitch="goodsSwitch"
            ref="tabControl2"
          />
          <goods-list :goods="goodsTypeList" />
        </scroll>
      </div>
      <to-top @click.native="topClick" v-show="isShowTop" />
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabController from "components/content/tabcontroller/TabController";
import GoodsList from "components/content/goods/GoodsList";

import SlideMenu from "./childComponents/SlideMenu";
import CategoryDetail from "./childComponents/CategoryDetail";

import { getSlideCategory, getCategoryDetail, getCategoryGoods } from "network/category";

import {
  imgFunction,
  toTopFn,
  SwitchGoods,
  FixedTop,
  GoodsCartData,
  activeOrNot,
} from "common/mixin";
import { POP, NEW, SELL } from "common/const";

export default {
  name: "",
  mixins: [imgFunction, toTopFn, SwitchGoods, FixedTop, GoodsCartData, activeOrNot],
  components: {
    NavBar,
    SlideMenu,
    Scroll,
    CategoryDetail,
    TabController,
    GoodsList,
  },
  data() {
    return {
      // 左边分类列表
      sildeList: [],
      // 每个分类对应具体数据
      categoryDetail: [],
      currentIndex: 0,
      goods: {
        pop: { list: [] },
        new: { list: [] },
        sell: { list: [] },
      },
    };
  },
  methods: {
    // 封装侧边分类请求
    _getSlideCategory() {
      getSlideCategory().then((res) => {
        const data = res.data.category;
        this.sildeList = data.list;
        // 第一次请求分类具体数据
        this._getCategoryDetail(this.sildeList[0].maitKey);
        // goodslist
        this._getCategoryGoods(POP);
        this._getCategoryGoods(NEW);
        this._getCategoryGoods(SELL);
      });
    },
    // 封装分类具体数据请求
    _getCategoryDetail(maitKey) {
      getCategoryDetail(maitKey).then((res) => {
        this.categoryDetail = res.data.list;
      });
    },
    // 获取具体商品数据
    _getCategoryGoods(type) {
      const miniWallkey = this.sildeList[this.currentIndex].miniWallkey;
      getCategoryGoods(miniWallkey, type).then((res) => {
        this.goods[type].list = res;
      });
    },
    // 是否显示到顶图标 mixin

    // 封装刷新DOM方法
    refreshDOM() {
      // 刷新dom计算高度
      this.reFn = () => {
        this.$refs.scroll.refresh();
      };
      this.$bus.$on("imgLoad", this.reFn);
    },
    /* 点击tabcontroller 切换流行，新品，热卖 三个种类 
        ['流行'，'新品'，'热卖'] 对应 type ['pop','new','sell'] 对应index 0，1，2
      */
    //  mixin

    // 子组件自定义事件发出，点击分类请求每个分类
    itemSelect(index) {
      // console.log(index);
      this.currentIndex = index;
      const maitKey = this.sildeList[index].maitKey;
      // 请求每个分类数据
      this._getCategoryDetail(maitKey);
      // 当切换左边重新请求，下面的数据
      this._getCategoryGoods(POP);
      this._getCategoryGoods(NEW);
      this._getCategoryGoods(SELL);
      // 每点击一次滚动到最开始
      this.$refs.scroll.scrollTo(0, 0, 0);
    },
  },
  created() {
    // 获取分类数据,调用封装在methods里面的方法
    this._getSlideCategory();
  },
  mounted() {
    // 首次挂载也刷新
    this.refreshDOM();
    this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
  },
  updated() {
    // 每次点击左边，更新再次刷新
    this.refreshDOM();
    this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
  },
};
</script>

<style scoped>
.cate-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.cate-content {
  display: flex;
}
.right-content {
  width: calc(100vw - 5.5rem);
}
.cate-scroll {
  height: calc(100vh - 93px);
  width: calc(100vw - 5.5rem);
  overflow: hidden;
}
.tab-contrl {
  position: relative;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 6;
}
.scroll-box {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  z-index: 1;
}
</style>
