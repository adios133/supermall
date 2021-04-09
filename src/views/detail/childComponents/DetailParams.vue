<template>
  <div class="detail-params">
    <!-- 参数表 -->
    <div class="params">
      <table
        class="params-table"
        v-for="(table, index) in goodsParams.sizes"
        :key="index"
      >
        <caption class="p-title">
          {{
            goodsParams.rkey
          }}
        </caption>
        <tr v-for="(tr, indey) in table" :key="indey">
          <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
        </tr>
      </table>
      <p class="disclaimer">{{ goodsParams.disclaimer }}</p>
    </div>
    <table class="set-table">
      <caption class="s-title">
        {{
          goodsParams.ikey
        }}
      </caption>
      <tr v-for="(item, index) in goodsParams.infos" :key="index">
        <td class="s-key">{{ item.key }}</td>
        <td class="s-value">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-params {
  padding-bottom: 3rem;
  border-bottom: 2px solid #ccc;
}
.disclaimer {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  line-height: 1.5;
  border-bottom: 2px solid #ccc;
}
.p-title,
.s-title {
  line-height: 2rem;
}
.params-table {
  margin: 1.5rem auto 0;
  width: 90%;
  border-collapse: collapse;
}
.params-table tr {
  line-height: 2;
  font-size: 0.9rem;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.set-table {
  margin: 1.5rem auto 0;
  width: 90%;
  border-collapse: collapse;
  border-bottom: 1px solid #aaa;
}
.set-table tr {
  line-height: 2.5;
  font-size: 0.9rem;
  border-bottom: 1px solid #ccc;
}
.set-table .s-key {
  width: 2rem;
}
.set-table .s-value {
  padding-left: 1.1rem;
  color: var(--color-high-text);
}
</style>
