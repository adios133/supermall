<template>
  <div id='category'>
    <!-- 导航 -->
    <nav-bar class="cate-nav">
      <template v-slot:center>
        商品分类
      </template>
    </nav-bar>
    <div class="cate-content">
      <!-- 侧边分类 -->
      <slide-menu :categories="sildeList" @itemSelect="itemSelect" /> 
      <!-- 滚动部分 -->
      <scroll class="cate-scroll" ref="scroll">
        <category-detail :cateList="categoryDetail" />
      </scroll>
    </div>
    
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import Scroll from "components/common/scroll/Scroll"

  import SlideMenu from "./childComponents/SlideMenu"
  import CategoryDetail from "./childComponents/CategoryDetail"

  import {getSlideCategory,getCategoryDetail,getCategoryGoods} from "network/category"
  export default {
    name:'',
    components: {
      NavBar,
      SlideMenu,
      Scroll,
      CategoryDetail,
    },
    data () {
      return {
        sildeList:[],
        categoryDetail:[],
        reFn:null,
      };
    },
    methods: {
      // 封装侧边分类请求
      _getSlideCategory() {
        getSlideCategory().then(res=> {
          const data = res.data.category
          // console.log(data);
          this.sildeList = data.list
          // 第一次请求分类具体数据
        this._getCategoryDetail(this.sildeList[0].maitKey)
      })
      },
      // 封装分类具体数据请求
      _getCategoryDetail(maitKey) {
        getCategoryDetail(maitKey).then(res=> {
          this.categoryDetail = res.data.list
        })
      },
      refreshDOM() {
        // 刷新dom计算高度
        this.reFn = () => {
        this.$refs.scroll.refresh()
        }
        this.$bus.$on('imgLoad',this.reFn)
      },
      // 子组件自定义事件发出，点击分类请求每个分类
      itemSelect(index) {
        const maitKey = this.sildeList[index].maitKey;
        this._getCategoryDetail(maitKey)
        // 每点击一次也重新计算高度
        this.$refs.scroll.scrollTo(0,0,0)
      },
    },
    created() {
      // 获取分类数据,调用封装在methods里面的方法
      this._getSlideCategory()
    },
    mounted() {
      // 首次挂载也刷新
      this.refreshDOM()
    },
    updated() {
      // 每次点击左边，更新再次刷新
      this.refreshDOM()
    },
    deactivated() {
      this.$bus.$off('imgLoad',this.reFn)
    } 
  }
</script>

<style scoped>
.cate-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.cate-content {
  display: flex;
}
.cate-scroll {
  height: calc(100vh - 93px);
  width: calc(100vw - 5.5rem);
  overflow: hidden;

}

</style>