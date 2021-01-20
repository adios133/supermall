<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="clear-fix">
      <div class="start"></div>
      <div class="detail-desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
      <div class="detail-key">{{ detailInfo.detailImage[0].key }}</div>
      <div class="img-list">
        <img
          :src="item"
          alt=""
          v-for="(item, index) in detailInfo.detailImage[0].list"
          :key="index"
          @load="imgLoad"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgLength: 0,
      counter: 0,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length;
    },
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imgLength) {
        this.$emit("imageLoad");
      }
    },
  },
};
</script>

<style scoped>
.detail-info {
  margin-top: 2rem;
}
.detail-desc {
  padding: 1rem 1.2rem;
  line-height: 1.3;
  font-size: .9rem;
}
.start,
.end {
  position: relative;
  width: 30%;
  height: 1px;
  background-color: #aaa;
}
.start {
  float: left;
  margin-left: 0.8rem;
}
.start::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0.35rem;
  height: 0.25rem;
  background-color: #000;
}
.end {
  float: right;
  margin-right: 0.8rem;
}
.end::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.35rem;
  height: 0.25rem;
  background-color: #000;
}
.detail-key {
  margin: 0.8rem 0;
  padding-left: 1.2rem;
}
.img-list img {
  width: 100%;
  vertical-align: middle;
}
</style>
