<template>
	<footer flex="~ row" gap-2 justify-between items-center md:px-20vw sm:px-10vw px="2.5vw">
		<div flex="~ row wrap" gap-8 w="1/3">
			<nuxt-link hover:text-teal-5 to="/imprint">Imprint</nuxt-link>
			<nuxt-link hover:text-teal-5 to="/privacy">Privacy Policy</nuxt-link>
			<nuxt-link hover:text-teal-5 to="/cookies">Cookies</nuxt-link>
		</div>
		<div>
			<Logo h-16 w-16 />
		</div>
		<div flex="~ row wrap" gap-8 w="1/3" justify-end>
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
		</div>
	</footer>
</template>

<script lang="ts" setup></script>
