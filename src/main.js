import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

import "./assets/main.css";
import "./assets/utilities.css";

createApp(App).use(bootstrap).mount("#app");
