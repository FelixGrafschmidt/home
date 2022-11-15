<template>
	<footer h-min flex="~ col" md:flex="~ row" gap-2 justify-between items-center md:px-5vw sm:px-10vw px="2.5vw" lg:px-10vw>
		<section flex="~ col" md:flex="~ row" md:gap-8 md:w="1/3">
			<nuxt-link h-16 flex="col ~" justify-center w-screen md:w-auto text-center hover:text-teal-5 to="/imprint">Imprint</nuxt-link>

			<nuxt-link h-16 flex="col ~" justify-center w-screen md:w-auto text-center hover:text-teal-5 whitespace-nowrap to="/privacy">
				Privacy Policy
			</nuxt-link>
			<nuxt-link h-16 flex="col ~" justify-center w-screen md:w-auto text-center hover:text-teal-5 to="/cookies">Cookies</nuxt-link>
		</section>
		<section hidden md:block>
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
	</footer>
</template>

<script lang="ts" setup></script>
