<template>
	<div flex="~ row " relative justify-center border-b-2 border-b-gray-6>
		<header flex="~ col" md:flex="~ row" h-min w-80vw justify-between gap-x-2 text-lg lg:w-70vw xl:w-60vw md:items-center lg:text-xl>
			<div
				md="h-auto flex flex-row w-3/7 order-1 static justify-start"
				absolute
				left-0
				top-25
				order-2
				w-full
				items-center
				justify-between
				gap-x-2
				bg-gray-8
				:class="{ hidden: !menuOpen }"
			>
				<nuxt-link
					flex="col ~"
					active-class=" md:border-teal-5 md:[text-decoration-line:none] md:underline-none underline-teal underline"
					hover="bg-gray-7 border-gray-7"
					h-16
					justify-center
					border-b-2
					border-gray-8
					px-4
					text-center
					lg:h-24
					to="/programming"
					@click="menuOpen = false"
				>
					Programming
				</nuxt-link>
				<nuxt-link
					flex="col ~"
					active-class=" md:border-teal-5 md:[text-decoration-line:none] md:underline-none underline-teal underline"
					hover="bg-gray-7 border-gray-7"
					h-16
					justify-center
					whitespace-nowrap
					border-b-2
					border-gray-8
					px-4
					text-center
					lg:h-24
					to="/pnp"
					@click="menuOpen = false"
				>
					Pen & Paper
				</nuxt-link>
				<div class="h-1 min-w-1 flex-1 border-b-2 border-b-gray-3 hidden xl:block" />
			</div>
			<div md:w="1/7" lg:w="min" flex="~ row" order-1 items-center justify-between p-4 md:order-2 md:justify-center md:p-0>
				<nuxt-link to="/" @click="menuOpen = false">
					<Logo h-16 w-16 lg:h-24 lg:w-24 hover:text-teal-5 />
				</nuxt-link>
				<div md:hidden @click="menuOpen = !menuOpen">
					<Icon :name="menuOpen ? 'fa:close' : 'fa:bars'" h-8 w-8 />
				</div>
			</div>
			<div
				md="h-auto flex flex-row w-3/7 static justify-start"
				:class="{ hidden: !menuOpen }"
				absolute
				left-0
				top-57
				order-3
				w-full
				items-center
				justify-between
				gap-x-2
				bg-gray-8
			>
				<div class="h-1 min-w-1 flex-1 border-b-2 border-b-gray-3 hidden xl:block" />
				<nuxt-link
					flex="col ~"
					active-class=" md:border-teal-5 md:[text-decoration-line:none] md:underline-none underline-teal underline"
					h-16
					justify-center
					border-b-2
					border-gray-8
					px-4
					text-center
					lg:h-24
					hover="bg-gray-7 border-gray-7"
					to="/philosophy"
					@click="menuOpen = false"
				>
					Philosophy
				</nuxt-link>
				<nuxt-link
					flex="col ~"
					active-class=" md:border-teal-5 md:[text-decoration-line:none] md:underline-none underline-teal underline"
					h-16
					justify-center
					border-b-2
					border-gray-8
					px-4
					text-center
					lg:h-24
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
