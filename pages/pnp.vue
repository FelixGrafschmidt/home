<template>
	<main flex="col ~" gap-4>
		<span text-2xl font-semibold>WIP - My Characters</span>
		<section mb-4 flex="~ col" gap-2>
			<nuxt-link
				v-for="(character, i) in characters"
				:key="i"
				target="_blank"
				text-xl
				cursor-pointer
				hover:text-teal-4
				:to="character.url"
			>
				{{ character.name }}
			</nuxt-link>
		</section>
	</main>
</template>

<script lang="ts" setup>
	const characters = [
		{ name: "Masana Ruhige-Hand-Ruhiger-Geist", url: "https://www.dndbeyond.com/characters/83758189" },
		{ name: "Laryllan Abendbringer", url: "https://www.dndbeyond.com/characters/87364170" },
		{ name: "Pergimtosch groscho Pergschosch", url: "https://www.dndbeyond.com/characters/88340988" },
		{ name: "Yuan Flaminjo Kjaskar Raskirson", url: "https://www.dndbeyond.com/characters/88341155" },
		{ name: "Cordowan von Löwenhaupt", url: "https://www.dndbeyond.com/characters/88341380" },
		{ name: "Ithambar Glanz-der-Nacht", url: "https://www.dndbeyond.com/characters/88341499" },
		{ name: "Taren groscho Bronn", url: "https://www.dndbeyond.com/characters/88341606" },
		{ name: "Hesindian Sindaru", url: "https://www.dndbeyond.com/characters/88341786" },
	];
</script>
