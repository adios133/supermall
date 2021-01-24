<template>
    <div class='toast' v-if="isShow"> 
      <p >{{message}}</p>
    </div>
</template>

<script>
  
  export default {
    name:'Toast',
    data () {
      return {
        message:'',
        isShow:false
      };
    },
    methods: {
      show(msg , duration=2000) {
        this.message = msg
        this.isShow = true
        setTimeout(()=> {
          this.message = ''
          this.isShow = false
        },duration)
      }
    },
  }
</script>

<style scoped>

.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding:.3rem .3rem;
  color: #fff;
  border-radius: 5px;
  background-color: rgba(0,0,0,.75);
  z-index: 999;
}
</style>