<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from '$lib/assets/logo.svg';
	import MobileMenu from './MobileMenu.svelte';
	import { openJoinForm } from '$lib/stores/formStore';
	import Button from './Button.svelte';

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
					href="/#solutions"
					rel="external"
					class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
					>Solutions</a
				>
			</li>
			<li>
				<a
					href="/#onboarding"
					rel="external"
					class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
					>Onboarding</a
				>
			</li>
			<li>
				<a
					href="/#insights"
					rel="external"
					class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
					>Insights</a
				>
			</li>
		</ul>
		<div class="flex gap-7">
			<Button
				href="#login"
				variant="outline"
				extendedClass="group grid h-[55px] w-[189px] place-items-center rounded-[10px] border-3 justify-center text-[20px] font-[400] uppercase transition-all duration-300"
				><span class="transition-all duration-300 group-hover:tracking-wider">LOG IN</span></Button
			>

			<Button
				on:click={openJoinForm}
				extendedClass="group grid h-[55px] w-[189px] place-items-center rounded-[10px] bg-[#D9D9D9] justify-center text-[20px] font-[400] text-black uppercase transition-all duration-300"
				><span class="transition-all duration-300 group-hover:tracking-wider">JOIN AULT</span
				></Button
			>
		</div>
	</div>

	<MobileMenu />
</nav>
