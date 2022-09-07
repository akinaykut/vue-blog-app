import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/Router";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import TheHeader from "./components/TheHeader.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("the-header", TheHeader);

app.mount("#app");
