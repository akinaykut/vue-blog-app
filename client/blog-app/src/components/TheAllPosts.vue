<template>
  <div class="posts">
    <div v-for="post in myPosts" :key="post._id" class="the-post">
      <the-post
        :title="post.title"
        :content="post.content"
        :imgUrl="post.imageUrl"
        :topic="post.topic"
        :id="post.id"
      >
        <button class="btn btn-lg btn-success">Edit</button>
        <button class="btn btn-lg btn-danger" @click="deletePost(post._id)">
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
      id: "",
    };
  },

  methods: {
    deletePost(_id) {
      console.log("geldi" + _id);
      this.myPosts = this.myPosts.filter((post) => post.id !== _id);
      this.$store.commit("deletePost", _id);

      axios.delete("http://localhost:5000/posts", {
        data: {
          id: _id,
        },
      });
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
