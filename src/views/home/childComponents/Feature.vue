<template>
  <div class='feature'>
    <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="imageLoad">
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
      imageLoad() {
        this.$emit("featureLoad")
      }
    },
  }
</script>

<style scoped>
/* @import url(); */
  .feature {
    margin-top: .625rem;
  }
  .feature img {
    width: 100%;
  }
</style>