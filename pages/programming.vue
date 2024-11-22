<template>
	<main class="flex flex-col gap-4">
		<span class="text-2xl font-semibold">My Projects</span>
		<section class="mb-4">
			<p class="text-xl">Here you can find a list of the projects I have worked on over the years in my spare time.</p>
			<p class="text-xl">There are some additional projects that are not listed here since I decided to keep them private.</p>
		</section>
		<section
			v-for="(project, i) in projects"
			:key="i"
			class="items-center justify-between gap-4 xl:flex xl:flex-row xl:even:flex-row-reverse"
		>
			<div class="flex flex-col xl:w-2/3">
				<nuxt-link class="w-fit hover:text-teal-5 hover:underline" target="_blank" :href="project.url">
					<span class="text-xl">{{ project.title }}</span>
				</nuxt-link>
				<nuxt-link
					class="mb-1 max-w-95vw w-min overflow-x-hidden text-ellipsis whitespace-nowrap text-sm hover:text-teal-5"
					target="_blank"
					:href="project.source"
				>
					{{ project.source }}
				</nuxt-link>
				<p v-for="(line, j) in project.description" :key="j" class="my-1">{{ line }}</p>
			</div>
			<div class="hidden xl:block xl:w-1/3">
				<img
					:src="project.image"
					:alt="project.title"
					class="cursor-pointer border-1 border-teal-5 rounded-md"
					@click="showImage(project)"
				/>
			</div>
		</section>
		<dialog ref="dialog" class="w-80% p-0 backdrop:bg-gray-9/70" @click="hideImage">
			<img :src="largeImage" :alt="largeImage" @click.stop />
		</dialog>
		<div v-if="scrolled" class="sticky bottom-4 flex flex-row justify-center">
			<button class="w-12 rounded-full bg-gray-5 hover:text-teal-5" @click="toTop">
				<Icon name="fa:arrow-up" class="h-12 w-6" />
			</button>
		</div>
	</main>
</template>

<script lang="ts" setup>
	interface Project {
		title: string;
		url: string;
		description: string[];
		image: string;
		source: string;
	}

	const largeImage = ref("");
	const dialog = ref<HTMLDialogElement | null>(null);

	const projects: Project[] = [
		{
			title: "Character List Manager",
			url: "https://lists.felgraf.dev",
			description: [
				"The origin of most of my projects is the same, I want to achieve something in my private life, start creating something for my personal use and then decide to make it available for everyone.",
				"This was the first of these cases. I love anime and would like to have more merchandise. The best way to get merch is to visit conventions. Unfortunately I really don't like going to places with many strangers which put me in something of a bind. Initially my idea was to just have a list of images of characters I like and hand it to my wife when she visits conventions. While this did work in theory, I was not really content with the solution. Updating a pdf-file is not as comfortable as I would like so I set out to create a simple web app that can fulfill my goal. Over time I generalized the app more and more and in its current iteration it can, in theory, handle lists of any type, not only anime characters. I put huge emphasis on customizability so users can change pretty much everything, the lists, the individual entries, as well as the attributes an entry has.",
				"This project underwent the most technological changes of any of my projects. After its initial pdf-phase it was a vue.js/SpringBoot application before I transitioned to its current version which is a pure nuxt.js project. I also started work on porting it to nuxt 3.0 but it is unfortunately not ready for a release yet.",
			],

			image: "/img/lists.png",
			source: "https://github.com/FelixGrafschmidt/character_viewer",
		},
		{
			title: "Quiz",
			url: "https://quiz.felgraf.dev",
			description: [
				"I listen to a lot of anime music (anison). And I mean A LOT. I am constantly expanding my collection and since my wife also likes some of the music, we listen to all my new additions after every season. At some point I had the idea to make a little quiz out of it. I would write down the genres of the shows, she listens to the songs and guesses which song matches to which genre combination.",
				"Then the day of the annual visit of some of my dear friends drew near and I had the idea to make this little quiz into something that could be played with more people and proper techincal integration.",
				"This project was quite challenging for me. In the past my applications always worked as separate instances and you could save and load data to and from a server. But in this case I needed a constant stream of data between client and server to keep all game sessions linked. After trying with a polling mechanism for some time, I finally sat down and read through the documentation for redis PUB/SUB and web sockets. This allowed me to have a very efficient pushing mechanism to synchronize all relevant data.",
				"This project could, in theory, also be used for larger occasions. I might ask a afew local conventions if they were interested in trying it in the future.",
			],
			image: "/img/quiz.png",
			source: "https://github.com/FelixGrafschmidt/quiz",
		},
		{
			title: "Recipes",
			url: "https://recipes.felgraf.dev",
			description: [
				"(Only available in German right now since most of my recipes are in German, sorry)",
				"My wife and I started cooking a little more two years ago and enjoyed it quite a bit. Unfortunately most of the time the most difficult part for us is to decide what to cook. To make this easier, I started developing this little application. Currently you can only save your recipes but the most important feature to be implemented is the ability to randomly generate a given number of recipes, matching some user defined tags, if required.",
			],
			image: "/img/recipes.png",
			source: "https://github.com/FelixGrafschmidt/recipes",
		},
	];

	const scrolled = computed(() => {
		return useWindowScroll().y.value > 200;
	});

	function showImage(project: Project) {
		document.body.classList.add("overflow-y-hidden");
		largeImage.value = project.image;
		dialog.value?.showModal();
	}

	function hideImage() {
		document.body.classList.remove("overflow-y-hidden");
		largeImage.value = "";
		dialog.value?.close();
	}
	function toTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
</script>
