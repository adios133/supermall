<template>
  <div class="tab-bar-item" @click="tabClick">
    <div v-if="!isActived">
      <slot name="item-img-normal"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    path: String,
    tabFontColor: {
      type: String,
      default: "#ff5777",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActived() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActived ? { color: this.tabFontColor } : {};
    },
  },
  methods: {
    tabClick() {
      this.$router.push(this.path).catch((e) => e);
    },
  },
};
</script>

<style scoped>
/* @import url(); */
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
