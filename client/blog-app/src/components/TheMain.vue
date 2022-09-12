<template>
  <main>
    <div class="main-filter-buttons">
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
      <div v-for="post in filteredPosts" :key="post.id" class="the-post">
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
      allPosts: [],
      filteredPosts: [],
      topic: "all",
    };
  },
  created() {
    /* this.posts = this.getPosts; */
    /* axios.get("http://localhost:5000").then((response) => {
      this.$store.commit("setPosts", response.data);
      
    }); */

    this.allPosts = this.getPosts;
    this.filteredPosts = this.allPosts;

    /* axios
      .get(
        "https://blog-app-vue-444a9-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
      )
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://blog-app-vue-444a9-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
        
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        let data = [];
        for (let i in response.data) {
          console.log(response.data[i]);
          data.push(response.data[i]);
        }
        console.log(data);

        this.posts = data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });  */
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
        this.filteredPosts = this.allPosts;
      } else {
        this.filteredPosts = this.allPosts.filter(
          (post) => post.topic === topic
        );
      }
    },
  },
};
</script>

<style scoped>
main {
  width: 81%;
  margin: 0 auto;
  padding: 5% 0;
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
