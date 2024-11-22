<template>
	<div class="relative min-h-screen flex flex-col bg-gray-7 text-gray-3">
		<Header class="w-full bg-gray-8" />
		<NuxtPage class="mx-auto w-95vw flex-grow py-4 lg:w-70vw md:w-80vw sm:w-80vw xl:w-60vw" />
		<Footer class="bg-gray-8" />
		<div class="py-2 text-center">&copy; Felix Grafschmidt {{ new Date().getFullYear() }}</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="postcss">
	@import "@unocss/reset/tailwind.css";

	html {
		scrollbar-gutter: unset;
		@apply bg-gray-7 text-gray-3;
	}
	body {
		@apply scrollbar scrollbar-rounded scrollbar-w-2 scrollbar-radius-2 scrollbar-track-radius-4 scrollbar-thumb-radius-4 scrollbar-track-color-gray-5 scrollbar-thumb-color-gray-9 overflow-y-overlay;
	}
</style>
