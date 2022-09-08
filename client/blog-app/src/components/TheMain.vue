<template>
  <main>
    <div class="main-filter-buttons">
      <!-- <button
        class="main-filter-button"
        @click="filterPosts('web-development')"
      >
        web development
      </button>
      <button class="main-filter-button" @click="filterPosts('cyber-security')">
        cyber-security
      </button>
      <button
        class="main-filter-button btn btn-md btn-primary"
        @click="filterPosts('game-development')"
      >
        game development
      </button>
      <button
        class="main-filter-button"
        @click="filterPosts('game-development')"
      >
        game development
      </button>
      <button
        class="main-filter-button"
        @click="filterPosts('game-development')"
      >
        game development
      </button> -->

      <label for="filter"> Filter </label>
      <select v-model="topic" name="filter">
        <option value="web-development">Web Development</option>
        <option value="cyber-security">Cyber Security</option>
        <option value="mobil-programming">Mobil Programming</option>
        <option value="game-development">Game Development</option>
        <option value="data-sience">Data Sience</option>
        <option value="all">All</option>
      </select>
    </div>

    <hr />
    <div class="posts">
      <div v-for="post in posts" :key="post.id" class="the-post">
        <the-post
          :title="post.title"
          :content="post.content"
          :imgUrl="post.imageUrl"
          :topic="post.topic"
          :id="post.id"
        ></the-post>
      </div>
    </div>
  </main>
</template>

<script>
import ThePost from "./ThePost.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      posts: [],
      topic: "all",
    };
  },
  created() {
    this.posts = this.getPosts;
  },
  components: { ThePost },
  computed: {
    ...mapGetters(["getPosts"]),
  },
  component: {
    ThePost,
  },

  watch: {
    topic(newValue) {
      this.filterPosts(newValue);
    },
  },

  methods: {
    filterPosts(topic) {
      if (topic === "all") {
        this.posts = this.getPosts;
      } else {
        this.posts = this.getPosts.filter((post) => post.topic === topic);
      }
    },
  },
};
</script>

<style scoped>
main {
  width: 81%;
  margin: 0 auto;
  padding-top: 5%;
}
.main-filter-buttons {
  display: flex;
  justify-content: flex-end;
}

/* .main-filter-button {
  padding: 2%;
} */

.posts {
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
}

.the-post {
  margin: 2%;
}

label {
  padding: 0 1rem;
}
</style>
