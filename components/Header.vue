<template>
	<div flex="~ row " justify-center relative border-b-gray-6 border-b-2>
		<header flex="~ col" md:flex="~ row" gap-x-2 justify-between md:items-center lg:text-xl text-lg w-80vw lg:w-70vw xl:w-60vw h-min>
			<div
				md="h-auto flex flex-row w-3/7 order-1 static justify-start"
				absolute
				left-0
				top-25
				w-full
				bg-gray-8
				:un-hidden="!menuOpen"
				gap-x-2
				justify-between
				items-center
				order-2
			>
				<nuxt-link
					lg:h-24
					h-16
					flex="col ~"
					justify-center
					px-4
					text-center
					active-class=" md:border-teal-5 md:[text-decoration-line:none] md:underline-none underline-teal underline"
					border-b-2
					hover="bg-gray-7 border-gray-7"
					border-gray-8
					to="/programming"
					@click="menuOpen = false"
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
					active-class=" md:border-teal-5 md:[text-decoration-line:none] md:underline-none underline-teal underline"
					border-b-2
					hover="bg-gray-7 border-gray-7"
					border-gray-8
					to="/pnp"
					@click="menuOpen = false"
				>
					Pen & Paper
				</nuxt-link>
				<div border-b-2 border-b-gray-3 flex-1 h-1 min-w-1 un-hidden xl:block />
			</div>
			<div md:w="1/7" lg:w="min" flex="~ row" items-center justify-between md:justify-center order-1 md:order-2 md:p-0 p-4>
				<nuxt-link to="/" @click="menuOpen = false">
					<Logo hover:text-teal-5 lg:h-24 lg:w-24 h-16 w-16 />
				</nuxt-link>
				<div md:hidden @click="menuOpen = !menuOpen">
					<Icon :name="menuOpen ? 'fa:close' : 'fa:bars'" h-8 w-8 />
				</div>
			</div>
			<div
				md="h-auto flex flex-row w-3/7 static justify-start"
				absolute
				top-57
				left-0
				bg-gray-8
				:un-hidden="!menuOpen"
				gap-x-2
				justify-between
				items-center
				w-full
				order-3
			>
				<div border-b-2 border-b-gray-3 flex-1 h-1 min-w-1 un-hidden xl:block />
				<nuxt-link
					lg:h-24
					h-16
					flex="col ~"
					justify-center
					px-4
					text-center
					active-class=" md:border-teal-5 md:[text-decoration-line:none] md:underline-none underline-teal underline"
					border-b-2
					border-gray-8
					hover="bg-gray-7 border-gray-7"
					to="/philosophy"
					@click="menuOpen = false"
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
					active-class=" md:border-teal-5 md:[text-decoration-line:none] md:underline-none underline-teal underline"
					border-b-2
					border-gray-8
					hover="bg-gray-7 border-gray-7"
					to="/writing"
					@click="menuOpen = false"
				>
					Writing
				</nuxt-link>
			</div>
		</header>
	</div>
</template>

<script lang="ts" setup>
	const menuOpen = ref(false);
</script>
