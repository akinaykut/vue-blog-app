<template>
  <div class="card" style="width: 21rem; height: 100%">
    <img :src="imgUrl" class="card-img-top post-image" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ content.length > 150 ? content.substring(0, 150) + "..." : content }}
        <router-link to="" @click="handleReadMore">Read more</router-link>
      </p>
      <hr />
      <div class="post-footer">
        <span class="post-topic">{{ topic }}</span>
        <span
          ><!-- <router-link to="/">Read More</router-link> -->

          <button @click="deletePost" v-if="false">delete</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "imgUrl", "topic", "id"],
  methods: {
    deletePost() {
      this.$store.commit("deletePost", this.id);
    },
    handleReadMore() {
      console.log("handleReadMore");
      this.$router.push("/posts/" + this.id);
    },
  },
};
</script>

<style scoped>
.post-topic {
  text-decoration: underline;
}

.post-footer {
  display: flex;
  justify-content: space-between;
}

.post-image {
  height: 20rem;
}
</style>
