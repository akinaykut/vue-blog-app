<template>
  <router-view></router-view>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  created() {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        console.log(response.data);
        this.$store.commit("setPosts", response.data);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
