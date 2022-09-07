<template>
  <main>
    <div v-for="post in getPosts" :key="post.id" class="the-post">
      <the-post
        :title="post.title"
        :content="post.content"
        :imgUrl="post.imageUrl"
        :topic="post.topic"
        :id="post.id"
      ></the-post>
    </div>
  </main>
</template>

<script>
import ThePost from "./ThePost.vue";
import { mapGetters } from "vuex";

export default {
  components: { ThePost },
  computed: {
    ...mapGetters(["getPosts"]),
  },
  component: {
    ThePost,
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  background-color: bisque;
  flex-wrap: wrap;
}

.the-post {
  margin: 2%;
}
</style>
