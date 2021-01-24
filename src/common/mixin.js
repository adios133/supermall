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
// 混入回到顶部
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
    // 是否显示到顶图标，不能混入，
    // showTop(position) {
    //   this.isShowTop = -position.y > 700;
    // }
  }
}