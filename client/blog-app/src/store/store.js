import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      posts: [
        {
          id: 1,
          title: "How to improve web1",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
          imageUrl: "https://dummyimage.com/600x400/000/fff",
          topic: "web-development",
        },
        {
          id: 2,
          title: "How to improve web4",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
          imageUrl: "https://dummyimage.com/600x400/000/fff",
          topic: "web-development",
        },
        {
          id: 3,
          title: "How to improve web3",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
          imageUrl: "https://dummyimage.com/600x400/000/pink",
          topic: "web-development",
        },
        {
          id: 4,
          title: "How to improve web2",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
          imageUrl: "https://dummyimage.com/600x400/000/blue",
          topic: "web-development",
        },
        {
          id: 5,
          title: "How to improve web2",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
          imageUrl: "https://dummyimage.com/600x400/000/blue",
          topic: "web-development",
        },
        {
          id: 6,
          title: "How to improve web2",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
          imageUrl: "https://dummyimage.com/600x400/000/blue",
          topic: "web-development",
        },
        {
          id: 7,
          title: "How to improve web2",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
          imageUrl: "https://dummyimage.com/600x400/000/blue",
          topic: "web-development",
        },
      ],
      singlePost: {
        id: 7,
        title: "How to improve web2",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
        imageUrl: "https://dummyimage.com/600x400/000/blue",
        topic: "web-development",
      },
    };
  },
  mutations: {
    addPost(state, payload) {
      console.log("Add post methods payload: " + payload);
      state.posts.push(payload);
    },
    deletePost(state, payload) {
      state.posts = state.posts.filter((post) => post.id !== payload);
    },

    setSinglePost(state, payload) {
      state.singlePost = payload;
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getSinglePost(state) {
      return state.singlePost;
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
