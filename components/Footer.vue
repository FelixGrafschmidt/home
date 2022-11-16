<template>
	<div flex="~ col" md:flex="~ row" justify-center items-center relative border-y-gray-6 border-y-2>
		<footer flex="~ col" md:flex="~ row" w-80vw lg:w-70vw xl:w-60vw h-min gap-2 justify-between items-center>
			<section flex="~ col" md:flex="~ row" md:gap-8 md:w="1/3">
				<nuxt-link h-16 flex="col ~" justify-center w-screen md:w-auto text-center hover:text-teal-5 to="/imprint"
					>Imprint</nuxt-link
				>

				<button
					h-16
					flex="col ~"
					items-center
					justify-center
					w-screen
					md:w-auto
					text-center
					hover:text-teal-5
					to="/cookies"
					@click="showDialog()"
				>
					Cookies
				</button>
			</section>
			<section hidden xl:block>
				<Logo h-16 w-16 />
			</section>
			<section flex="~ row" gap-8 md:w="1/3" md:justify-end justify-between py-4 md:py-0>
				<a href="https://github.com/FelixGrafschmidt" title="GitHub" target="_blank" hover:text-teal-5>
					<Icon name="fa:github" h-8 w-8 />
				</a>
				<a href="https://www.linkedin.com/in/felix-grafschmidt-190a36172/" title="LinkedIn" target="_blank" hover:text-teal-5>
					<Icon name="fa:linkedin" h-8 w-8 />
				</a>
				<a href="https://www.xing.com/profile/Felix_Grafschmidt2" title="Xing" target="_blank" hover:text-teal-5>
					<Icon name="fa:xing" h-8 w-8 />
				</a>
				<a href="https://cv.ithambar.moe?language=en" title="CV" target="_blank" hover:text-teal-5>
					<Icon name="pepicons:cv" h-8 w-8 />
				</a>
			</section>
			<dialog ref="dialog" rounded-md bg-gray-6 p-0 class="backdrop:bg-gray-9/70" @click="hideDialog()">
				<div text-xl w-fit p-2 text-gray-3>
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
