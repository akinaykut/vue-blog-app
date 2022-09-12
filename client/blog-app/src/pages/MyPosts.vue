<template>
  <div>
    <the-header></the-header>
    <main>
      <the-all-posts></the-all-posts>
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheAllPosts from "@/components/TheAllPosts.vue";
export default {
  components: {
    TheHeader,
    TheAllPosts,
  },
};
</script>

<style scoped>
main {
  width: 81%;
  margin: 0 auto;
  padding: 5% 0;
}
</style>
