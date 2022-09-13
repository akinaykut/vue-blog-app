<template>
  <div class="add-post">
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          v-model="newPost.title"
        />
      </div>

      <div class="mb-3">
        <label for="topic" class="form-label">Topic</label>
        <br />
        <select v-model="newPost.topic" name="topic">
          <option value="web-development">Web Development</option>
          <option value="cyber-security">Syber Security</option>
          <option value="mobil-programming">Mobil Programming</option>
          <option value="game-development">Game Development</option>
          <option value="data-sience">Data Sience</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="imageUrl" class="form-label">Image Url</label>
        <input
          type="text"
          class="form-control"
          id="imageUrl"
          name="imageUrl"
          v-model="newPost.imageUrl"
        />
      </div>

      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <br />
        <textarea
          name="content"
          id="postContent"
          cols="30"
          rows="10"
          style="height: 182px; width: 100%"
          v-model="newPost.content"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newPost: {
        title: "",
        content: "",
        imageUrl: "",
        topic: "web-development",
      },
    };
  },
  computed: {},
  methods: {
    handleSubmit() {
      axios.post("http://localhost:5000", this.newPost);
      axios.post("http://localhost:5000/posts", this.newPost);
      this.$store.commit("addPost", this.newPost);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.add-post {
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  padding: 3%;
  border: 1px solid black;
  border-radius: 5px;
  width: 50%;
}
</style>
