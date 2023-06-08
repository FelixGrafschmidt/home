// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			title: "Felix Grafschmidt - Homepage",
		},
	},
	modules: ["@pinia/nuxt", "@unocss/nuxt", "nuxt-icon", "@vueuse/nuxt"],
});
