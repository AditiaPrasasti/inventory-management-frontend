import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.css";
import router from "./router";
import { createPinia } from "pinia";
import axios from "axios";

createApp(App).use(createPinia()).use(router).mount("#app");
