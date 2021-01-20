<template>
  <div class='detail-nav'>
    <nav-bar>
      <template v-slot:left>
        <img src="~assets/img/common/back.svg" alt="" @click="goBack">
      </template>
      <template v-slot:center>
        <div class="navbar">
          <div v-for="(item,index) in navCategory" :key="index" 
                :class="{actived:currentIndex === index}"
                @click="navClick(index)">{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name:'',
    components: {
      NavBar
    },
    data () {
      return {
        navCategory:['商品','参数','评论','推荐'],
        currentIndex:0
      };
    },
    computed: {

    },
    methods: {
      // 返回首页
      goBack() {
        this.$router.back()
      },
      // 点击nav切换
      navClick(index) {
        this.currentIndex = index
        // 点击发送自定义事件，将index传出去
        this.$emit("navClick",index)
      }
    },
  }
</script>

<style scoped>
.detail-nav {
  box-shadow: 0 1px 1px 1px rgba(0,0,0,.1);
}
.detail-nav img {
  margin-top: 10px;
}
.navbar {
  display: flex;
}
.navbar div {
  flex: 1;
  font-size: 14px;
}
.actived {
  color: var(--color-high-text);
}
</style>