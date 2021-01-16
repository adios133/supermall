<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-bar></main-bar>
  </div>
</template>
<script>
import MainBar from 'components/content/mainbar/MainBar'


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
