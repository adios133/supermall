<template>
  <div class='totop'>
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name:'ToTop'
  }
</script>

<style scoped>
.totop {
  position: fixed;
  right: 4vh;
  bottom: 8vh;
  z-index: 9;
}
.totop img {
  width: 8.5vh;
  height: 8.5vh;
}

</style>