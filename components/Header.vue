<template>
	<header
		relative
		flex="~ col"
		md:flex="~ row"
		gap-x-2
		justify-between
		md:items-center
		lg:text-xl
		text-lg
		h-min
		md:px-10vw
		sm:px-10vw
		px="2.5vw"
	>
		<div h-50vh :hidden="!menuOpen" md:flex="~ row" gap-x-2 justify-between items-center md:w="3/7" lg:w="2/5" order-2 md:order-1>
			<nuxt-link
				lg:h-24
				h-16
				flex="col ~"
				justify-center
				px-4
				text-center
				active-class=" md:border-teal-5 md:underline-none underline-teal underline"
				border-b-2
				hover="bg-gray-7 border-gray-7"
				border-gray-8
				to="/programming"
			>
				Programming
			</nuxt-link>
			<nuxt-link
				lg:h-24
				h-16
				flex="col ~"
				justify-center
				whitespace-nowrap
				px-4
				text-center
				active-class=" md:border-teal-5 md:underline-none underline-teal underline"
				border-b-2
				hover="bg-gray-7 border-gray-7"
				border-gray-8
				to="/pnp"
			>
				Pen & Paper
			</nuxt-link>
		</div>
		<div md:w="1/7" lg:w="1/5" flex="~ row" items-center justify-between md:justify-center order-1 md:order-2 md:p-0 p-4>
			<nuxt-link to="/">
				<Logo hover:text-teal-5 lg:h-24 lg:w-24 h-16 w-16 />
			</nuxt-link>
			<div md:hidden @click="menuOpen = !menuOpen">
				<Icon name="fa:bars" h-8 w-8 />
			</div>
		</div>
		<div h-50vh :hidden="!menuOpen" md:flex="~ row" gap-x-2 justify-between items-center md:w="3/7" lg:w="2/5" order-3>
			<nuxt-link
				lg:h-24
				h-16
				flex="col ~"
				justify-center
				px-4
				text-center
				active-class=" md:border-teal-5 md:underline-none underline-teal underline"
				border-b-2
				border-gray-8
				hover="bg-gray-7 border-gray-7"
				to="/philosophy"
			>
				Philosophy
			</nuxt-link>
			<nuxt-link
				lg:h-24
				h-16
				flex="col ~"
				justify-center
				px-4
				text-center
				active-class=" md:border-teal-5 md:underline-none underline-teal underline"
				border-b-2
				border-gray-8
				hover="bg-gray-7 border-gray-7"
				to="/writing"
			>
				Writing
			</nuxt-link>
		</div>
	</header>
</template>

<script lang="ts" setup>
	const menuOpen = ref(false);
</script>
