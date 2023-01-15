import { createRouter, createWebHistory } from "vue-router";

// const Index = () => import("./components/Index.js");
import Index from "./components/Index.js";
import HalloWelt from "./components/HalloWelt.js";
import WSMessage from "./components/WSMessage.js";

const routes = [
	{ path: "/", component: Index },
	{ path: "/hello", component: HalloWelt },
	{ path: "/ws", component: WSMessage },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
