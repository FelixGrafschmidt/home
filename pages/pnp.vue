<template>
	<main flex="col ~" gap-4>
		<span text-2xl font-semibold>WIP - My Characters</span>
		<span text-lg> I have been playing Pen-and-Paper-RPGs since 2010 and I am loving them! </span>
		<span text-md>Warning! Wild mixture of German and English below! You have been warned!</span>
		<section mb-4 flex="~ col" gap-2>
			<div v-for="(character, i) in characters" :key="i" target="_blank" border rounded>
				<div cursor-pointer p-2 text-xl @click="selectCharacter(character)">
					{{ character.name }}
				</div>
				<div v-if="character.active" rounded-b bg-gray-8>
					<div flex="~ col" px-2>
						<span>Species: {{ character.species }}</span>
						<span>Profession: {{ character.profession }}</span>
					</div>
					<div flex="~ row" items-center gap-2 px-2>
						<span>Character Sheet:</span>
						<nuxt-link
							v-if="character.sheets.get(System.TDE)"
							:to="character.sheets.get(System.TDE)"
							target="_blank"
							text-sm
							underline
							hover:text-teal-4
							>TDE</nuxt-link
						>
						<nuxt-link
							v-if="character.sheets.get(System.DND)"
							:to="character.sheets.get(System.DND)"
							target="_blank"
							text-sm
							underline
							hover:text-teal-4
							>DnD</nuxt-link
						>
					</div>
					<div flex="~ row" mt-2 items-center justify-around border-t>
						<span
							v-if="character.description.get(Tab.IG)"
							:class="character.tab === Tab.IG ? 'bg-gray-7 border-b-gray-7' : 'border-b-gray-3'"
							grow
							cursor-pointer
							border-b
							border-r
							py-2
							text-center
							w="1/2"
							@click="character.tab = Tab.IG"
						>
							In Game
						</span>
						<span
							v-if="character.description.get(Tab.OOG)"
							:class="character.tab === Tab.OOG ? 'bg-gray-7 border-b-gray-7' : 'border-b-gray-3'"
							grow
							cursor-pointer
							border-b
							py-2
							text-center
							w="1/2"
							@click="character.tab = Tab.OOG"
						>
							Out of Game
						</span>
					</div>
					<div
						max-h-96
						overflow-y-overlay
						rounded-b
						bg-gray-7
						p-2
						scrollbar-thumb-color-gray-9
						scrollbar-track-color-gray-5
						scrollbar-radius-2
						scrollbar-thumb-radius-4
						scrollbar-track-radius-4
						scrollbar-w-2
						scrollbar
						scrollbar-rounded
					>
						<component :is="character.description.get(character.tab)" />
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script lang="ts" setup>
	import { Ref } from "vue";

	enum Tab {
		IG = "IG",
		OOG = "OOG",
	}
	enum System {
		DND = "DnD",
		TDE = "TDE",
	}
	interface Character {
		name: string;
		sheets: Map<System, string>;
		species: string;
		profession: string;
		active: boolean;
		tab: Tab;
		description: Map<Tab, string>;
	}
	const characters: Ref<Character[]> = ref([
		{
			tab: Tab.IG,
			species: "Half-Elf",
			profession: "Mercenary",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, "CharactersMasanaIG"],
				[Tab.OOG, "CharactersMasanaOOG"],
			]),
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/83758189"],
				[System.TDE, "/characters/Masana.html"],
			]),
			name: "Masana Ruhige-Hand-Ruhiger-Geist",
		},
		{
			tab: Tab.OOG,
			species: "Half-Elf",
			profession: "Bard",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, ""],
				[Tab.OOG, "CharactersLaryllanOOG"],
			]),
			name: "Laryllan Abendbringer",
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/87364170"],
				[System.TDE, "/characters/Laryllan.html"],
			]),
		},
		{
			tab: Tab.OOG,
			species: "Anvil-Dwarf",
			profession: "Mercenary",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, ""],
				[Tab.OOG, "CharactersPergimtoschOOG"],
			]),
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/88340988"],
				[System.TDE, ""],
			]),
			name: "Pergimtosch groscho Pergschosch",
		},
		{
			tab: Tab.IG,
			species: "Human (Half Thorval, Half Brabakian)",
			profession: "Black Mage",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, "CharactersYuanIG"],
				[Tab.OOG, "CharactersYuanOOG"],
			]),
			name: "Yuan Flaminjo Kjaskar Raskirson",
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/88341155"],
				[System.TDE, "/characters/Yuan.html"],
			]),
		},
		{
			tab: Tab.IG,
			species: "Human",
			profession: "Knight",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, ""],
				[Tab.OOG, ""],
			]),
			name: "Cordowan von Löwenhaupt",
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/88341380"],
				[System.TDE, "/characters/Cordowan.html"],
			]),
		},
		{
			tab: Tab.IG,
			species: "Wood-Elf",
			profession: "Wyldrunner",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, "CharactersIthambarIG"],
				[Tab.OOG, "CharactersIthambarOOG"],
			]),
			name: "Ithambar Glanz-der-Nacht",
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/88341499"],
				[System.TDE, "/characters/Ithambar.html"],
			]),
		},
		{
			tab: Tab.IG,
			species: "Dwarf",
			profession: "Air-Geode",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, ""],
				[Tab.OOG, ""],
			]),
			name: "Taren groscho Bronn",
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/88341606"],
				[System.TDE, "/characters/Taren.html"],
			]),
		},
		{
			tab: Tab.IG,
			species: "Human",
			profession: "Ilumnestrian Priest",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, ""],
				[Tab.OOG, ""],
			]),
			name: "Hesindian Sindaru",
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/88341786"],
				[System.TDE, "/characters/Hesindian.html"],
			]),
		},
		{
			tab: Tab.IG,
			species: "Human",
			profession: "Philosopher",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, ""],
				[Tab.OOG, ""],
			]),
			name: "Khusrauh ibn Farsid sal Ismeth",
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/89334334"],
				[System.TDE, "/characters/Khusrauh.html"],
			]),
		},
	]);

	function selectCharacter(character: Character): void {
		character.active = !character.active;
	}
</script>
