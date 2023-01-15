import { computed } from "vue";
import WS from "./ws.js";

export default {
	name: "app",

	template: `
    <div>
		<router-link to="/">Go to Home</router-link>
		<router-link to="/hello">Go to Welt</router-link>
        <router-view />
    </div>
    `,
	data() {
		return {
			ws: null,
		};
	},
	provide() {
		return {
			ws: computed(() => this.ws),
		};
	},
	mounted() {
		this.ws = new WS();
		this.ws.connectws();
	},
};
