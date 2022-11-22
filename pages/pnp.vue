<template>
	<main flex="col ~" gap-4>
		<span text-2xl font-semibold>WIP - My Characters</span>
		<span text-lg> I have been playing Pen-and-Paper-RPGs since 2010 and I am loving them! </span>
		<section mb-4 flex="~ col" gap-2>
			<div v-for="(character, i) in characters" :key="i" target="_blank" rounded border>
				<div p-2 cursor-pointer text-xl @click="selectCharacter(character)">
					{{ character.name }}
				</div>
				<div v-if="character.active" rounded-b bg-gray-8>
					<div flex="~ col" px-2>
						<span>Species: {{ character.species }}</span>
						<span>Profession: {{ character.profession }}</span>
					</div>
					<div flex="~ row" gap-2 items-center px-2>
						<span>Character Sheet:</span>
						<nuxt-link :to="character.sheets.get(System.TDE)" hover:text-teal-4 target="_blank" underline text-sm
							>TDE</nuxt-link
						>
						<nuxt-link :to="character.sheets.get(System.DND)" hover:text-teal-4 target="_blank" underline text-sm
							>DnD</nuxt-link
						>
					</div>
					<div flex="~ row" justify-around border-t mt-2 items-center>
						<span
							:class="character.tab === Tab.IG ? 'bg-gray-7 border-b-gray-7' : 'border-b-gray-3'"
							border-b
							cursor-pointer
							py-2
							text-center
							border-r
							w="1/2"
							@click="character.tab = Tab.IG"
						>
							In Game
						</span>
						<span
							:class="character.tab === Tab.OOG ? 'bg-gray-7 border-b-gray-7' : 'border-b-gray-3'"
							border-b
							cursor-pointer
							py-2
							text-center
							w="1/2"
							@click="character.tab = Tab.OOG"
						>
							Out of Game
						</span>
					</div>
					<div bg-gray-7 p-2 rounded-b>
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
			tab: Tab.IG,
			species: "Half-Elf",
			profession: "Bard",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, "CharactersLaryllanIG"],
				[Tab.OOG, "CharactersLaryllanOOG"],
			]),
			name: "Laryllan Abendbringer",
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/87364170"],
				[System.TDE, "CharactersMasanaOOG"],
			]),
		},
		{
			tab: Tab.IG,
			species: "Anvil-Dwarf",
			profession: "Mercenary",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, "CharactersPergimtoschIG"],
				[Tab.OOG, "CharactersPergimtoschOOG"],
			]),
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/88340988"],
				[System.TDE, "CharactersMasanaOOG"],
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
				[System.TDE, "CharactersMasanaOOG"],
			]),
		},
		{
			tab: Tab.IG,
			species: "Human",
			profession: "Knight",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, "CharactersCordowanIG"],
				[Tab.OOG, "CharactersCordowanOOG"],
			]),
			name: "Cordowan von Löwenhaupt",
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/88341380"],
				[System.TDE, "CharactersMasanaOOG"],
			]),
		},
		{
			tab: Tab.IG,
			species: "Wood-Elf",
			profession: "Ranger",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, "CharactersIthambarIG"],
				[Tab.OOG, "CharactersIthambarOOG"],
			]),
			name: "Ithambar Glanz-der-Nacht",
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/88341499"],
				[System.TDE, "CharactersMasanaOOG"],
			]),
		},
		{
			tab: Tab.IG,
			species: "Dwarf",
			profession: "Air-Geode",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, "CharactersTarenIG"],
				[Tab.OOG, "CharactersTarenOOG"],
			]),
			name: "Taren groscho Bronn",
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/88341606"],
				[System.TDE, "CharactersMasanaOOG"],
			]),
		},
		{
			tab: Tab.IG,
			species: "Human",
			profession: "Ilumnestrian Priest",
			active: false,
			description: new Map<Tab, string>([
				[Tab.IG, "CharactersHesidianIG"],
				[Tab.OOG, "CharactersHesidianOOG"],
			]),
			name: "Hesindian Sindaru",
			sheets: new Map<System, string>([
				[System.DND, "https://www.dndbeyond.com/characters/88341786"],
				[System.TDE, "CharactersMasanaOOG"],
			]),
		},
	]);

	function selectCharacter(character: Character): void {
		character.active = !character.active;
	}
</script>
