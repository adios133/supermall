<template>
  <div class="services">
    <div v-for="(item, index) in services.services" :key="index" class="service">
      <img :src="item.icon" alt="" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    services: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0px;
  line-height: 1.8rem;
  font-size: 0.9rem;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.service {
  width: 33%;
  /* flex: 33%; */
  text-align: center;
}
.service img {
  margin-right: 2px;
  width: 4.1vw;
  vertical-align: middle;
}
</style>
