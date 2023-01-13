import {
	onMounted,
	onUpdated,
	onUnmounted,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

import HalloWelt from "./HalloWelt.js";
import WSMessage from "./WSMessage.js";
import WS from "../classes/ws.js";

export default {
	name: "App",
	template: `<div><HalloWelt /><WSMessage :ws="ws" /></div>`,

	data() {
		return {
			ws: null,
		};
	},
	methods: {},
	components: {
		HalloWelt,
		WSMessage,
	},
	mounted() {
		this.ws = new WS();
		this.ws.connectws();
	},
	setup(props, context) {
		onMounted(() => {
			console.info("App mounted!");
		});
		onUpdated(() => {
			console.info("App updated!");
		});
		onUnmounted(() => {
			console.info("App unmounted!");
		});
	},
};
