<template>
	<div class="relative flex flex-col items-center justify-center border-y-2 border-y-gray-6 md:flex-row">
		<footer class="h-min w-80vw flex flex-col items-center justify-between gap-2 lg:w-70vw xl:w-60vw md:flex-row">
			<section class="flex flex-col md:w-1/3 md:flex-row md:gap-8">
				<nuxt-link class="h-16 w-screen flex flex-col justify-center text-center md:w-auto hover:text-teal-5" to="/imprint">
					Imprint
				</nuxt-link>
				<button
					class="h-16 w-screen flex flex-col items-center justify-center text-center md:w-auto hover:text-teal-5"
					@click="showDialog()"
				>
					Cookies
				</button>
			</section>
			<section class="hidden xl:block">
				<Logo class="h-16 w-16" />
			</section>
			<section class="flex flex-row justify-between gap-8 py-4 md:w-1/3 md:justify-end md:py-0">
				<nuxt-link to="https://github.com/FelixGrafschmidt" title="GitHub" target="_blank" class="hover:text-teal-5">
					<Icon name="fa:github" class="h-8 w-8" />
				</nuxt-link>
				<nuxt-link
					to="https://www.linkedin.com/in/felix-grafschmidt-190a36172/"
					title="LinkedIn"
					target="_blank"
					class="hover:text-teal-5"
				>
					<Icon name="fa:linkedin" class="h-8 w-8" />
				</nuxt-link>
				<nuxt-link to="https://www.xing.com/profile/Felix_Grafschmidt2" title="Xing" target="_blank" class="hover:text-teal-5">
					<Icon name="fa:xing" class="h-8 w-8" />
				</nuxt-link>
				<nuxt-link to="https://cv.felgraf.dev" title="CV" target="_blank" class="hover:text-teal-5">
					<Icon name="pepicons:cv" class="h-8 w-8" />
				</nuxt-link>
			</section>
			<dialog ref="dialog" class="rounded-md bg-gray-6 p-0 backdrop:bg-gray-9/70" @click="hideDialog()">
				<div class="w-fit p-2 text-xl text-gray-3">
					<span @click.stop> This website does not use any cookies. </span>
				</div>
			</dialog>
		</footer>
	</div>
</template>

<script lang="ts" setup>
	const dialog = ref<HTMLDialogElement | null>(null);
	function showDialog() {
		document.body.classList.add("overflow-y-hidden");
		dialog.value?.showModal();
	}

	function hideDialog() {
		document.body.classList.remove("overflow-y-hidden");
		dialog.value?.close();
	}
</script>
