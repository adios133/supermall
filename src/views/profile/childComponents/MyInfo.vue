<template>
  <div class="my-info" @click="showInfo">
    <div class="avatar">
      <img src="~assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="oprate">
      <div class="login">登录/注册</div>
      <img src="~assets/img/profile/phone.svg" alt="" />
      <span>暂无绑定手机号</span>
    </div>
    <div class="more">
      <div class="more-icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    showInfo() {
      this.$toasts.show("Σ(っ °Д °;)っ,莫得API");
    },
  },
};
</script>

<style scoped>
.my-info {
  display: flex;
  height: 6.6rem;
  color: #fff;
  background-color: var(--color-tint);
}
.my-info .avatar {
  width: 4.5rem;
  margin: 1.2rem 0.6rem;
}
.my-info .avatar img {
  width: 100%;
}
.oprate {
  margin: 1.7rem 0.6rem;
}
.oprate .login {
  font-size: 1.2rem;
  margin: 0.3rem 0.5rem;
}
.oprate img {
  width: 1rem;
  vertical-align: middle;
}
.oprate span {
  font-size: 0.8rem;
}
.more {
  position: relative;
}
.more-icon {
  position: absolute;
  top: 2.7rem;
  left: 7rem;
  width: 0.8rem;
  height: 0.8rem;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg);
}
</style>
