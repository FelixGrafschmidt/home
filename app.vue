<template>
	<div bg-gray-7 text-gray-3 min-h-screen flex="~ col" relative>
		<Header bg-gray-8 w-full />
		<NuxtPage flex-grow mx-auto py-4 lg:w-70vw xl:w-60vw md:w-80vw sm:w-80vw w-95vw />
		<Footer bg-gray-8 />
		<div text-center py-2>&copy; Felix Grafschmidt {{ new Date().getFullYear() }}</div>
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
