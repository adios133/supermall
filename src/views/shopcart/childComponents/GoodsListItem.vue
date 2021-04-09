<template>
  <div class="gooods-list-item">
    <check-button
      class="check-btn"
      :isChecked="info.ischecked"
      @click.native="checkChange"
    />
    <img :src="info.image" alt="" />
    <div class="item-info">
      <h3>{{ info.title }}</h3>
      <p>{{ info.desc }}</p>
      <div class="item-bottom">
        <strong class="price">￥{{ info.price }}</strong>
        <div class="counter">
          <i @click="counterDres" :class="{ isDisable: info.counter <= 1 }">-</i>
          <span>{{ info.counter }}</span>
          <i @click="counterAdd">+</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  name: "",
  components: {
    CheckButton,
  },
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {},
  methods: {
    checkChange() {
      this.$store.commit("checkChange", this.info);
    },
    counterDres() {
      // 当数量小于1时，不能再减了
      if (this.info.counter <= 1) {
        return;
      }
      this.$store.commit("counterDres", this.info);
    },
    counterAdd() {
      this.$store.commit("counterAdd", this.info);
    },
  },
};
</script>

<style scoped>
.gooods-list-item {
  display: flex;
  border-bottom: 1px solid #ccc;
}
.gooods-list-item .check-btn {
  margin: 2.4rem 0.3rem;
}
.gooods-list-item img {
  width: 4rem;
  height: 5.5rem;
  margin: 0.5rem 0.3rem;
  border-radius: 0.5rem;
}
.gooods-list-item .item-info {
  width: 16.5rem;
}
.item-info h3,
.item-info p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0.3rem;
}
.item-info h3 {
  font-size: 0.9rem;
  line-height: 1.5;
}
.item-info p {
  font-size: 0.75rem;
  color: #999;
}
.item-bottom {
  display: flex;
  margin-top: 1rem;
  padding: 0 0.5rem;
  justify-content: space-between;
}
.item-info .price {
  font-size: 1.2rem;
  color: var(--color-high-text);
}
.item-info i {
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0 0.3rem;
  font-style: normal;
  background-color: #eaeaea;
  border: 1px solid #aaa;
}
.counter .isDisable {
  background-color: #f8f8f8;
  color: #cdcdcd;
  border: 1px solid #cdcdcd;
}
</style>
