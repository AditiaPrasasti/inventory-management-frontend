import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import router from "./router"; // Only one router import
import { createPinia } from "pinia";
import axios from "axios"; // This import can stay if you're using axios elsewhere in the app

createApp(App).use(router).use(createPinia()).mount("#app");
