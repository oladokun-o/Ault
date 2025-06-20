<script>
	import Logo from '$lib/assets/logo.svg';
	import MobileMenu from "./MobileMenu.svelte";
</script>

<nav class="sticky top-0 z-10 flex items-center justify-between px-8 py-4 md:py-0">
	<!-- Logo -->
	<div class="cursor-pointer relative z-[500]">
		<a href="/"><img src={Logo} alt="logo" class="w-[86px] md:w-[149px]" /></a>
	</div>

	<!-- Desktop Links -->
	<div class="hidden items-center gap-20 font-[442] lg:flex">
		<ul class="flex gap-10 text-[15px]">
			<li>
				<a
					href="#how-it-works"
					class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
					>Discover</a
				>
			</li>
			<li>
				<a
					href="#your-card"
					class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
					>Your Card</a
				>
			</li>
			<li>
				<a
					href="#benefits"
					class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
					>Benefits</a
				>
			</li>
			<li>
				<a
					href="#insight"
					class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
					>Insight</a
				>
			</li>
		</ul>
		<div class="flex gap-7">
			<a
				href="#log-in"
				class="group grid h-[55px] w-[150px] place-items-center rounded-[10px] border-3 border-[#D9D9D9] bg-transparent text-center text-[14px] font-[700] text-white uppercase transition-all duration-300 hover:bg-[#D9D9D9] hover:text-black hover:shadow-lg"
				><span class="transition-all duration-300 group-hover:tracking-wider">LOG IN</span></a
			>
			<a
				href="#about"
				class="group grid h-[55px] w-[150px] place-items-center rounded-[10px] bg-[#D9D9D9] text-center text-[14px] font-[700] text-black uppercase transition-all duration-300"
				><span class="transition-all duration-300 group-hover:tracking-wider">Get Started</span></a
			>
		</div>
	</div>

	<MobileMenu />
</nav>
