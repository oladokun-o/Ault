<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from '$lib/assets/logo.svg';
	import MobileMenu from './MobileMenu.svelte';
	import { openJoinForm } from '$lib/stores/formStore';

	let scrolled = false;
	
	onMount(() => {
		const handleScroll = () => {
			const hero = document.querySelector('#hero'); // Your hero section ID
			const scrollY = window.scrollY;
			const heroHeight = hero?.getBoundingClientRect().height || 0;

			scrolled = scrollY > heroHeight - 80; // Adjust offset if needed
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class={`sticky top-0 z-[999] flex w-full items-center justify-between px-5 py-4 transition-all duration-300 md:pt-5 lg:px-10 2xl:px-[150px] ${
		scrolled ? 'bg-[#181818]' : ''
	}`}
>
	<!-- Logo -->
	<div class="relative z-[500] cursor-pointer">
		<a href="/"><img src={Logo} alt="logo" class="w-[86px] md:w-[149px]" /></a>
	</div>

	<!-- Desktop Links -->
	<div class="hidden items-center gap-5 font-[400] lg:flex xl:gap-20">
		<ul class="flex gap-10 text-[20px]">
			<li>
				<a
					href="/#how-it-works"
					rel="external"
					class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
					>Discover</a
				>
			</li>
			<li>
				<a
					href="/#your-card"
					rel="external"
					class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
					>Your Card</a
				>
			</li>
			<li>
				<a
					href="/#benefits"
					rel="external"
					class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
					>Benefits</a
				>
			</li>
			<li>
				<a
					href="/#insight"
					rel="external"
					class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
					>Insights</a
				>
			</li>
		</ul>
		<div class="flex gap-7">
			<a
				href="#log-in"
				class="group grid h-[55px] w-[189px] place-items-center rounded-[10px] border-3 border-[#D9D9D9] bg-transparent text-center text-[20px] font-[400] text-white uppercase transition-all duration-300 hover:bg-[#D9D9D9] hover:text-black hover:shadow-lg"
				><span class="transition-all duration-300 group-hover:tracking-wider">LOG IN</span></a
			>
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a
				href="javaScript:void(0)"
				on:click={openJoinForm}
				class="group grid h-[55px] w-[189px] place-items-center rounded-[10px] bg-[#D9D9D9] text-center text-[20px] font-[400] text-black uppercase transition-all duration-300"
				><span class="transition-all duration-300 group-hover:tracking-wider">JOIN AULT</span></a
			>
		</div>
	</div>

	<MobileMenu />
</nav>
