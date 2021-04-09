<template>
  <div class="my-discount" @click="myClick">
    <div>
      <div><b>0.00</b><span>元</span></div>
      <div class="discrible">我的余额</div>
    </div>
    <div class="special-one">
      <div><b>0</b><span>个</span></div>
      <div class="discrible">我的优惠</div>
    </div>
    <div>
      <div><b>0</b><span>分</span></div>
      <div class="discrible">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    myClick() {
      this.$toasts.show("别点了，啥都没有");
    },
  },
};
</script>

<style scoped>
.my-discount {
  display: flex;
  padding: 1.5rem 0;
  text-align: center;
  font-size: 0.85rem;
  justify-content: space-around;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.my-discount > div {
  width: 33.333%;
}
.my-discount b {
  font-size: 1.3rem;
  color: #f5776f;
}
.my-discount .discrible {
  margin-top: 0.25rem;
}
.special-one {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
</style>
