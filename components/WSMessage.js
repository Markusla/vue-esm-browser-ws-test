export default {
	template: `<div v-if="ws?.wsMessage">{{ ws?.wsMessage }}</div>`,
	props: ["ws"],
};
