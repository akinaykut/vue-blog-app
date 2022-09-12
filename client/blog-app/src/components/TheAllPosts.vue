<template>
  <div class="posts">
    <div v-for="post in myPosts" :key="post.id" class="the-post">
      <the-post
        :title="post.title"
        :content="post.content"
        :imgUrl="post.imageUrl"
        :topic="post.topic"
        :id="post.id"
      >
        <button class="btn btn-lg btn-success">Edit</button>
        <button class="btn btn-lg btn-danger" @click="deletePost(post.id)">
          Delete
        </button>
      </the-post>
    </div>
  </div>
</template>

<script>
import ThePost from "./ThePost.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      myPosts: [],
    };
  },

  methods: {
    deletePost(id) {
      console.log("geldi" + id);
      this.myPosts = this.myPosts.filter((post) => post.id !== id);
      this.$store.commit("deletePost", id);
      axios.post("http://localhost:5000/delete-post", { id: id });
    },
  },
  created() {
    this.myPosts = this.getPosts.filter(
      (post) => post.author === this.getAuthor
    );
  },
  components: { ThePost },
  computed: {
    ...mapGetters(["getAuthor", "getPosts"]),
  },
};
</script>

<style scoped>
.posts {
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
}

.the-post {
  margin: 2%;
}
</style>
