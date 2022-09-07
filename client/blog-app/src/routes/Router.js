import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../pages/TheHome.vue";
import TheContact from "../pages/TheContact.vue";
import TheAbout from "@/pages/TheAbout.vue";
import TheSignUp from "@/pages/TheSignUp.vue";
import TheSinglePost from "@/pages/TheSinglePost.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/contact", component: TheContact },
    { path: "/about", component: TheAbout },
    { path: "/signup", component: TheSignUp },
    { path: "/singlepost", component: TheSinglePost },
  ],
});

export default router;
