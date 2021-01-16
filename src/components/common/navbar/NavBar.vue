<template>
  <div class='nav-bar'>
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    name:'',
    components: {

    },
    data () {
      return {

      };
    },
    computed: {

    },
    methods: {

    },
  }
</script>

<style scoped>
/* @import url(); */
  .nav-bar {
    display: flex;
    height: 44px;
    text-align: center;
    line-height: 44px;
  }
  .left,.right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>