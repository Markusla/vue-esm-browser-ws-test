import { createApp } from "vue";
import app from "./app.js";
import router from "./router.js";
import ws from "./classes/ws.js";

// Create new Vue app
createApp(app).use(router).provide("ws", ws).mount("#vuetest");
