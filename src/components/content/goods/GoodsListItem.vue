<template>
  <div class="goods-item" @click="linkTo">
    <img v-lazy="showImg" alt="" @load="imgLoad" />
    <p>{{ itemData.title }}</p>
    <span class="price">￥{{ itemData.price }}</span>
    <span class="collection">{{ itemData.cfav }}</span>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // 当img加载完成时，触发事件，以便刷新DOM  服务于better-scroll，采用事件总线的方式，与scroll.vue通信
    imgLoad() {
      this.$bus.$emit("imgLoad");
    },
    linkTo() {
      this.$router.push("/detail/" + this.itemData.iid);
    },
  },
  computed: {
    showImg() {
      return this.itemData.image || this.itemData.img || this.itemData.show.img;
    },
  },
};
</script>

<style scoped>
.goods-item {
  flex: 45%;
  overflow: hidden;
  margin: 0.625rem 0.4375rem;
  padding-bottom: 0.3125rem;
  font-size: 0.75rem;
  text-align: center;
  /* border: 1px solid #eee; */
  border-radius: 6%;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
}
.goods-item img {
  width: 100%;
}
.goods-item p {
  margin: 5px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-item span {
  margin: 0.625rem;
}
.goods-item .price {
  color: var(--color-high-text);
}
.goods-item .collection {
  position: relative;
}

.goods-item .collection::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
