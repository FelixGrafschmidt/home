// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
				devtools: { enabled: true },
				ssr: false,

				app: {
								head: {
												title: "Felix Grafschmidt - Homepage",
								},
				},
				security: {
								headers: {
												crossOriginEmbedderPolicy: process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
								},
				},

				modules: ["@pinia/nuxt", "@unocss/nuxt", "nuxt-icon", "@vueuse/nuxt", "@nuxt/eslint", "nuxt-security"],
				compatibilityDate: "2024-08-19",
});
