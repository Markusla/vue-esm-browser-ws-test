export default {
	name: "WebsocketMessages",
	template: `
		<h1>Websocket</h1>
		<div v-if="ws?.wsMessage">{{ ws?.wsMessage }}</div>
	`,
	inject: ["ws"],
};
