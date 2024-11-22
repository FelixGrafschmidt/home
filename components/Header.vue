<template>
	<div class="relative flex flex-row justify-center border-b-2 border-b-gray-6">
		<header
			class="h-min w-80vw flex flex-col justify-between gap-x-2 text-lg lg:w-70vw xl:w-60vw md:flex-row md:items-center lg:text-xl"
		>
			<div
				class="absolute left-0 top-25 order-2 w-full items-center justify-between gap-x-2 bg-gray-8 md:static md:order-1 md:h-auto md:w-3/7 md:flex md:flex-row md:justify-start"
				:class="{ hidden: !menuOpen }"
			>
				<nuxt-link
					active-class="md:border-teal-5 md:[text-decoration-line:none] md:underline-none underline-teal underline"
					class="h-16 flex flex-col justify-center border-b-2 border-gray-8 px-4 text-center lg:h-24 hover:border-gray-7 hover:bg-gray-7"
					to="/programming"
					@click="menuOpen = false"
				>
					Programming
				</nuxt-link>
				<nuxt-link
					active-class="md:border-teal-5 md:[text-decoration-line:none] md:underline-none underline-teal underline"
					class="h-16 flex flex-col justify-center border-b-2 border-gray-8 px-4 text-center lg:h-24 hover:border-gray-7 hover:bg-gray-7"
					to="/pnp"
					@click="menuOpen = false"
				>
					Pen & Paper
				</nuxt-link>
				<div class="h-1 min-w-1 flex-1 border-b-2 border-b-gray-3 hidden xl:block" />
			</div>
			<div class="order-1 flex flex-row items-center justify-between p-4 md:order-2 lg:w-min md:w-1/7 md:justify-center md:p-0">
				<nuxt-link to="/" @click="menuOpen = false">
					<Logo class="h-16 w-16 lg:h-24 lg:w-24 hover:text-teal-5" />
				</nuxt-link>
				<div class="md:hidden" @click="menuOpen = !menuOpen">
					<Icon :name="menuOpen ? 'fa:close' : 'fa:bars'" class="h-8 w-8" />
				</div>
			</div>
			<div
				md=""
				:class="{ hidden: !menuOpen }"
				class="absolute left-0 top-57 order-3 w-full items-center justify-between gap-x-2 bg-gray-8 md:static md:h-auto md:w-3/7 md:flex md:flex-row md:justify-start"
			>
				<div class="h-1 min-w-1 flex-1 border-b-2 border-b-gray-3 hidden xl:block" />
				<nuxt-link
					active-class=" md:border-teal-5 md:[text-decoration-line:none] md:underline-none underline-teal underline"
					class="h-16 flex flex-col justify-center border-b-2 border-gray-8 px-4 text-center lg:h-24 hover:border-gray-7 hover:bg-gray-7"
					hover=""
					to="/philosophy"
					@click="menuOpen = false"
				>
					Philosophy
				</nuxt-link>
				<nuxt-link
					active-class=" md:border-teal-5 md:[text-decoration-line:none] md:underline-none underline-teal underline"
					class="h-16 flex flex-col justify-center border-b-2 border-gray-8 px-4 text-center lg:h-24 hover:border-gray-7 hover:bg-gray-7"
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
