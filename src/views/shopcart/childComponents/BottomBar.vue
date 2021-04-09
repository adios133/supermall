<template>
  <div class="bottom-bar">
    <div class="select-all">
      <check-button
        @click.native="selectAll"
        :isChecked="isCheckedAll"
        class="check-button"
      />
      <span>全选</span>
    </div>
    <div class="total-price">
      总计:<b>￥{{ totalPrice }}</b>
    </div>
    <div class="goPay" @click="toPay">去结算({{ toPayCount }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

import { mapGetters } from "vuex";
export default {
  name: "",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["totalPrice", "toPayCount", "cartList"]),
    isCheckedAll() {
      if (this.cartList.length === 0) {
        return false;
      }
      return !this.cartList.find((item) => {
        return !item.ischecked;
      });
      return true;
    },
  },
  methods: {
    selectAll() {
      if (this.isCheckedAll) {
        this.cartList.forEach((item) => (item.ischecked = false));
      } else {
        this.cartList.forEach((item) => (item.ischecked = true));
      }
    },
    toPay() {
      if (this.toPayCount === 0) {
        // $toasts
        this.$toasts.show("您还未选择商品");
      } else {
        this.$toasts.show("ಥ_ಥ\n\n 没有支付API");
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: space-between;
  height: 45px;
  background-color: #eee;
}
.select-all {
  margin: 0.8rem 0.8rem;
}
.select-all .check-button {
  display: inline-block;
}
.select-all span {
  position: relative;
  top: -0.2rem;
  left: 0.2rem;
}
.total-price b {
  line-height: 45px;
  color: var(--color-high-text);
}
.goPay {
  width: 7rem;
  padding: 0 1rem;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 1.1rem;
  background-color: var(--color-tint);
}
</style>
