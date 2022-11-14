import { presetWind, presetAttributify, transformerDirectives } from "unocss";
import { defineNuxtConfig } from "nuxt/config";
import { presetScrollbar } from "unocss-preset-scrollbar";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			title: "Felix Grafschmidt - Homepage",
		},
	},
	modules: ["@pinia/nuxt", "@unocss/nuxt", "nuxt-icon", "@vueuse/nuxt"],
	unocss: {
		// presets
		uno: true, // enabled `@unocss/preset-uno`
		icons: true, // enabled `@unocss/preset-icons`
		attributify: true, // enabled `@unocss/preset-attributify`,

		// core options
		shortcuts: [],
		rules: [],
		presets: [
			presetWind(),
			presetAttributify(),
			presetScrollbar({
				// config
			}),
		],
		transformers: [transformerDirectives()],
	},
});
