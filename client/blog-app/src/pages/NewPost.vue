<template>
  <div>
    <the-header></the-header>

    <main>
      <add-post></add-post>
    </main>
  </div>
</template>

<script>
import AddPost from "@/components/AddPost.vue";

export default {
  components: {
    AddPost,
  },
};
</script>

<style scoped>
main {
  padding: 7% 0;
}
</style>
