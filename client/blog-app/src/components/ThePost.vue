<template>
  <div class="card" style="width: 18rem">
    <img :src="imgUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ content.length > 150 ? content.substring(0, 150) + "..." : content }}
        <router-link to="/singlepost" @click="handleReadMore"
          >Read more</router-link
        >
      </p>
      <hr />
      <div class="post-footer">
        <span class="post-topic">{{ topic }}</span>
        <span
          ><!-- <router-link to="/">Read More</router-link> -->

          <button @click="deletePost" v-if="!true">delete</button>
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
      const singlePost = {
        id: this.id,
        title: this.title,
        content: this.content,
        imageUrl: this.imgUrl,
        topic: this.topic,
      };

      this.$store.commit("setSinglePost", singlePost);
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
</style>
