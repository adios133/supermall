<template>
  <div class="tabcontroller">
    <div
      v-for="(item, index) in goodsType"
      :key="index"
      :class="{ actived: currentIndex === index }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsType: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("goodsSwitch", index);
    },
  },
};
</script>

<style scoped>
.tabcontroller {
  display: flex;
  text-align: center;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.tabcontroller div {
  flex: 1;
}
.actived {
  color: var(--color-high-text);
}
.actived span {
  padding: 10px;
  border-bottom: 3px solid var(--color-high-text);
}
</style>
