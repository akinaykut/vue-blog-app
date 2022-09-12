import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      posts: [],
      isLogin: true,
      author: "akinaykut05@gmail.com",
    };
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    addPost(state, payload) {
      state.posts.unshift(payload);
    },
    deletePost(state, payload) {
      state.posts = state.posts.filter((post) => post.id !== payload);
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getIsLogin(state) {
      return state.isLogin;
    },
    getAuthor(state) {
      return state.author;
    },
  },
  actions: {
    deneme1(_, payload) {
      console.log("Hello deneme1: " + payload);
    },
    toggleLogin(context) {
      context.commit("toggleLogin");
    },
  },
});

export default store;
