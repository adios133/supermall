<template>
  <div class="detail-comment">
    <h2 class="comment-title">
      <i>用户评论</i>
      <i>更多</i>
    </h2>
    <!--  -->
    <div class="comment-user" v-if="commentInfo.user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
      <p>{{ commentInfo.content }}</p>
    </div>
    <div class="comment-info">
      <span class="comment-time">{{ commentInfo.created | dateFormate }}</span>
      <span class="comment-style">{{ commentInfo.style }}</span>
    </div>
    <div class="comment-img" v-if="commentInfo.images">
      <img :src="item" alt="" v-for="(item, index) in commentInfo.images" :key="index" />
    </div>
    <div class="comment-repeat" v-if="commentInfo.explain">
      {{ commentInfo.explain }}
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    dateFormate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
.detail-comment {
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
}
.comment-title {
  display: flex;
  width: 100%;
  padding: 0 1.2rem;
  line-height: 3;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.comment-title i {
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
}
.comment-user img {
  margin: 0.8rem 0.5rem;
  width: 3rem;
  border-radius: 50%;
  vertical-align: middle;
}
.comment-user p {
  margin: 0 0.8rem;
  color: #666;
  font-size: 0.9rem;
}
.comment-info {
  margin: 0.8rem;
  font-size: 0.8rem;
  color: #aaa;
}
.comment-info span {
  padding-right: 1rem;
}
.comment-img {
  width: 90%;
  margin: 1rem auto;
}
.comment-img img {
  width: 24%;
  margin: 2px;
}
.comment-repeat {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  width: 93%;
  height: 3.3rem;
  margin: 1rem auto;
  padding: 0.5rem 0.6rem;
  font-size: 0.8rem;
  line-height: 1.2;
  background-color: #eee;
  border-radius: 0.5rem;
}
</style>
