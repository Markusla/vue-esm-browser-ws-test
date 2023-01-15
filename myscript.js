import { createApp } from "vue";
import app from "./classes/app.js";
import router from "./classes/router.js";

// Create new Vue app
const vueapp = createApp(app);
vueapp.config.unwrapInjectedRef = true;
vueapp.use(router).mount("#vuetest");
