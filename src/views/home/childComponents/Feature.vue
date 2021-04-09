<template>
  <div class="feature">
    <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="imageLoad" />
  </div>
</template>

<script>
export default {
  methods: {
    imageLoad() {
      this.$emit("featureLoad");
    },
  },
};
</script>

<style scoped>
.feature {
  margin-top: 0.625rem;
}
.feature img {
  width: 100%;
}
</style>
