<template>
  <div class="single-post-page">
    <the-header></the-header>

    <div class="main">
      <div class="post" v-if="!error">
        <h3 class="title">{{ blogPost.title }}</h3>

        <img class="post-image" :src="blogPost.imageUrl" alt="" />

        <p>{{ blogPost.content }}</p>
      </div>
      <div class="error" v-if="error">
        <h1>There is not a kind of content</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "../components/TheHeader.vue";
export default {
  data() {
    return {
      blogPost: {
        id: "",
        title: "",
        content: "",
        imageUrl: "",
        topic: "",
      },
      error: false,
    };
  },
  components: { TheHeader },
  computed: {
    ...mapGetters(["getPosts"]),
  },
  created() {
    this.error = false;
    const path = this.$route.params;
    const post = this.getPosts.filter((post) => post._id == path.postId);
    this.blogPost = post[0];
    if (!this.blogPost) {
      this.error = true;
    }
  },
};
</script>

<style scoped>
.post {
  width: 90%;
  margin: 0 auto;
  padding: 7%;
}

.title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}

.post-image {
  margin: 3% 0;
  width: 50%;
}
</style>
