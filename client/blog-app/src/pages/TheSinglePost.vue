<template>
  <div class="single-post-page">
    <the-header></the-header>

    <div class="main">
      <h3>{{ getSinglePost.title }}</h3>

      <img :src="getSinglePost.imageUrl" alt="" />

      <p>{{ getSinglePost.content }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheHeader },
  computed: {
    ...mapGetters(["getSinglePost"]),
  },
  /* props: ["title", "content", "imgUrl", "topic", "id"], */
};
</script>
