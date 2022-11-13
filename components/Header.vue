<template>
	<header flex="~ row" gap-x-2 justify-between items-center text-xl h-min>
		<nuxt-link
			h-24
			flex="col ~"
			justify-center
			px-4
			text-center
			active-class=" border-teal-5"
			border-b-2
			hover="bg-gray-7 border-gray-7"
			border-gray-8
			to="/programming"
		>
			Programming
		</nuxt-link>
		<nuxt-link
			h-24
			flex="col ~"
			justify-center
			px-4
			text-center
			active-class=" border-teal-5"
			border-b-2
			hover="bg-gray-7 border-gray-7"
			border-gray-8
			to="/pnp"
		>
			Pen & Paper
		</nuxt-link>
		<div>
			<nuxt-link to="/">
				<Logo hover:text-teal-5 h-24 w-24 />
			</nuxt-link>
		</div>
		<nuxt-link
			h-24
			flex="col ~"
			justify-center
			px-4
			text-center
			active-class=" border-teal-5"
			border-b-2
			border-gray-8
			hover="bg-gray-7 border-gray-7"
			to="/philosophy"
		>
			Philosophy
		</nuxt-link>
		<nuxt-link
			h-24
			flex="col ~"
			justify-center
			px-4
			text-center
			active-class=" border-teal-5"
			border-b-2
			border-gray-8
			hover="bg-gray-7 border-gray-7"
			to="/writing"
		>
			Writing
		</nuxt-link>
	</header>
</template>

<script lang="ts" setup></script>
