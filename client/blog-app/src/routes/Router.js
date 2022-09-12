import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../pages/TheHome.vue";
import NewPost from "../pages/NewPost.vue";
import TheAbout from "@/pages/TheAbout.vue";
import TheSignUp from "@/pages/TheSignUp.vue";
import TheSinglePost from "@/pages/TheSinglePost.vue";
import MyPosts from "@/pages/MyPosts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/new-post", component: NewPost },
    { path: "/about", component: TheAbout },
    { path: "/signup", component: TheSignUp },
    { path: "/posts/:postId", component: TheSinglePost },
    { path: "/my-posts", component: MyPosts },
  ],
});

export default router;
