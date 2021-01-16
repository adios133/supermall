<template>
  <div class=''>
    <h2>detail</h2>
    <p>{{iid}}</p>
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
        iid:''
      };
    },
    computed: {

    },
    methods: {

    },
    created() {
      this.iid = this.$route.params.iid
    }
  }
</script>

<style scoped>

</style>