<template>
  <ul class="slide-menu">
    <li
      v-for="(item, index) in categories"
      :key="index"
      :class="{ actived: index === currentIndex }"
      @click="itemSelect(index)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "",
  props: {
    categories: {
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
    itemSelect(index) {
      this.currentIndex = index;
      // 自定义事件，将index传递给Category.vue，请求对应分类数据
      this.$emit("itemSelect", index);
    },
  },
};
</script>

<style scoped>
.slide-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 5.5rem;
  height: calc(100vh - 93px);
  text-align: center;
  font-size: 0.9rem;
  background-color: #eee;
}
.slide-menu li {
  height: 6.25%;
  line-height: calc((100vh - 93px) / 16);
}
.slide-menu .actived {
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-tint);
}
</style>
