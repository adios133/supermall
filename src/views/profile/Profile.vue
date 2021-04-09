<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <template v-slot:center>
        <i>我的</i>
      </template>
    </nav-bar>
    <my-info />
    <my-discount />
    <profile-list />
    <copy-right />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import MyInfo from "./childComponents/MyInfo";
import myDiscount from "./childComponents/MyDiscount";
import ProfileList from "./childComponents/ProfileList";
import CopyRight from "./childComponents/CopyRight";
export default {
  name: "",
  components: {
    NavBar,
    MyInfo,
    myDiscount,
    ProfileList,
    CopyRight,
  },
};
</script>

<style scoped>
.profile-nav {
  color: #fff;
  background-color: var(--color-tint);
}
.profile-nav i {
  font-style: normal;
}
</style>
