import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/global.css";
import "./assets/css/animations.css";

createApp(App).use(router).mount("#app");
