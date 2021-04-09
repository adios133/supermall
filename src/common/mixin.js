// home detail
import { debounce } from "./utils"
export const imgFunction = {
  data() {
    return {
      refreshFn: null,
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.refreshFn = () => {
      refresh();
    }
    this.$bus.$on("imgLoad", this.refreshFn)
  },
}
// 混入回到顶部 home detail category
import ToTop from "components/content/totop/ToTop";

export const toTopFn = {
  components: {
    ToTop
  },
  data() {
    return {
      isShowTop: false,
    }
  },
  methods: {
    // 回到顶部功能
    topClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
  }
}

// 点击切换 pop new sell in home  category 
import { TOP_DISTANCE, POP, NEW, SELL } from "common/const"
export const SwitchGoods = {
  data() {
    return {
      currentType: POP,
    }
  },
  methods: {
    goodsSwitch(index) {
      switch (index) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = NEW;
          break;
        case 2:
          this.currentType = SELL;
          break;
      }
      this.$refs.tabControl2.currentIndex = index
      this.$refs.tabControl1.currentIndex = index
    },
  },
}

// 吸顶，以及显示totop home category
export const FixedTop = {
  data() {
    return {
      isFixed: false,
      offsetTop: 0,
    }
  },
  methods: {
    homeScroll(position) {
      // 显示回到顶部功能mixin，这个是不能混入的，方法内部会直接覆盖
      this.isShowTop = -position.y > TOP_DISTANCE;
      // tabcontroller 吸顶,当轮播图加载完成触发事件
      this.isFixed = -position.y > this.offsetTop;
    },
  },
}

// 传给子组件goodslist的数据计算属性 home category
export const GoodsCartData = {
  computed: {
    goodsTypeList() {
      return this.goods[this.currentType].list;
    },
  }
}

// 页面活跃 非活跃 home category
export const activeOrNot = {
  data() {
    return {
      saveY: 0,
    }
  },
  activated() {
    // 这个不会触发imgLoad，所以不能使用this.refreshDOM()
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    // 保存滚动位置
    this.saveY = this.$refs.scroll.scroll.y
    this.$bus.$off('imgLoad', this.refreshFn)
  }
}