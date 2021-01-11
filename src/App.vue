<template>
  <div id="app">
    <router-view></router-view>
    <main-bar></main-bar>
  </div>
</template>
<script>
import MainBar from 'components/content/MainBar/MainBar'
export default {
  name:'',
  components:{
    MainBar
  }
}
</script>

<style>
  @import url('assets/css/base.css');
</style>
