<template>
  <header>
    <nav>
      <router-link to="/" class="nav-project-name">Blog App</router-link>
      <div>
        <ul class="nav-items">
          <li class="nav-item"><router-link to="/">Home</router-link></li>
          <li class="nav-item"><router-link to="/about">About</router-link></li>
          <li class="nav-item">
            <router-link to="/my-posts" v-if="getIsLogin">My Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/new-post" v-if="getIsLogin">New Post</router-link>
          </li>

          <li class="nav-item sign-up">
            <router-link to="/signup" class="sign-up__a">SignUp</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getIsLogin"]),
  },
};
</script>

<style scoped>
header {
  padding: 2rem;
  background-color: aliceblue;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}

.nav-item {
  list-style-type: none;
  padding: 1rem;
}

a {
  text-decoration: none;
}

.nav-project-name {
  font-size: 2rem;
}

a:hover {
  color: black;
}

.sign-up {
  background-color: blue;
  font-size: 1.3rem;
  padding: 5px;
  border-radius: 5px;
}

.sign-up:hover {
  background-color: #add5ff;
}
.sign-up__a:hover {
  color: blue;
}
.sign-up__a {
  color: white;
}
</style>
