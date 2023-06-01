<template>
	<div flex="~ col" md:flex="~ row" relative items-center justify-center border-y-2 border-y-gray-6>
		<footer flex="~ col" md:flex="~ row" h-min w-80vw items-center justify-between gap-2 lg:w-70vw xl:w-60vw>
			<section flex="~ col" md:flex="~ row" md:gap-8 md:w="1/3">
				<nuxt-link flex="col ~" h-16 w-screen justify-center text-center md:w-auto hover:text-teal-5 to="/imprint"
					>Imprint</nuxt-link
				>

				<button
					flex="col ~"
					h-16
					w-screen
					items-center
					justify-center
					text-center
					md:w-auto
					hover:text-teal-5
					to="/cookies"
					@click="showDialog()"
				>
					Cookies
				</button>
			</section>
			<section class="hidden xl:block">
				<Logo h-16 w-16 />
			</section>
			<section flex="~ row" md:w="1/3" justify-between gap-8 py-4 md:justify-end md:py-0>
				<nuxt-link to="https://github.com/FelixGrafschmidt" title="GitHub" target="_blank" hover:text-teal-5>
					<Icon name="fa:github" h-8 w-8 />
				</nuxt-link>
				<nuxt-link to="https://www.linkedin.com/in/felix-grafschmidt-190a36172/" title="LinkedIn" target="_blank" hover:text-teal-5>
					<Icon name="fa:linkedin" h-8 w-8 />
				</nuxt-link>
				<nuxt-link to="https://www.xing.com/profile/Felix_Grafschmidt2" title="Xing" target="_blank" hover:text-teal-5>
					<Icon name="fa:xing" h-8 w-8 />
				</nuxt-link>
				<nuxt-link to="https://cv.felgraf.dev?language=en" title="CV" target="_blank" hover:text-teal-5>
					<Icon name="pepicons:cv" h-8 w-8 />
				</nuxt-link>
			</section>
			<dialog ref="dialog" rounded-md bg-gray-6 p-0 class="backdrop:bg-gray-9/70" @click="hideDialog()">
				<div w-fit p-2 text-xl text-gray-3>
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
