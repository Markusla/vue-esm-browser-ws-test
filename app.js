export default {
	name: "app",

	template: `
    <div>
		<router-link to="/">Go to Home</router-link>
		<router-link to="/hello">Go to Welt</router-link>
        <router-view />
    </div>
    `,
};
