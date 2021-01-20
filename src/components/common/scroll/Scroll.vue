<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 引入核心
import BScroll from "@better-scroll/core";
// 引入插件pullup
import Pullup from "@better-scroll/pull-up";

// 插件，可以实时监听dom变化，达到dom变化，刷新content高度。
// 本案例暂时不使用这种方法刷新。
// 已未卸载模块
// import ObserveDOM from "@better-scroll/observe-dom";

// 注册
BScroll.use(Pullup);
// BScroll.use(ObserveDOM);

export default {
  name: "Scroll",
  components: {},
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 封装滚动到顶部，
    scrollTo(x, y, time=500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 封装刷新DOM
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    // 封装结束下拉加载更多，可进行下次上拉
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    }
  },
  mounted() {
    // 创建bs实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      // observeDOM: true,
    });

    // 监听滚动事件,如果probeType值为2，3，即监听才监听
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        // 发送位置，当达到某个位置，将totop显示隐藏
        this.$emit("scrollPosition", position);
      });
    }
    // 监听到底加载更多
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp',()=> {
        this.$emit('atBottom')
      })
    }
  },
};
</script>

<style scoped></style>
