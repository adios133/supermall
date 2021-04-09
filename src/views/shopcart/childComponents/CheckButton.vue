<template>
  <div class="check-button" :class="{ active: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.check-button {
  width: 1.36rem;
  height: 1.36rem;
  padding: 0.18rem;
  border: 1px solid #aaa;
  border-radius: 50%;
  background-color: #fff;
}
.active {
  background-color: var(--color-tint);
  border: 1px solid transparent;
}
</style>
