<template>
  <div class="add-post">
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="newPost.title" placeholder="Tittle" />

      <br />

      <input
        type="textarea"
        v-model="newPost.content"
        placeholder="Content"
        row="3"
        colum="5"
      />
      <br />
      <input type="text" v-model="newPost.imageUrl" placeholder="Image url" />
      <br />
      <select v-model="newPost.topic" placeholder="">
        <option value="web-development">Web Development</option>
        <option value="cyber-security">Syber Security</option>
        <option value="mobil-programming">Mobil Programming</option>
        <option value="game-development">Game Development</option>
        <option value="data-sience">Data Sience</option>
      </select>
      <button class="btn btn-lg btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPost: {
        id: new Date().getMilliseconds(),
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
</style>
