<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-bar v-if="this.$route.meta.showTab" />
  </div>
</template>
<script>
import MainBar from "components/content/mainbar/MainBar";

export default {
  name: "",
  components: {
    MainBar,
  },
};
</script>

<style>
@import url("assets/css/base.css");
</style>
