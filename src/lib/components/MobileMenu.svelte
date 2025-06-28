<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { quintOut, backOut } from 'svelte/easing';
	import { openJoinForm } from '$lib/stores/formStore';
	import Button from './Button.svelte';

	let isOpen = false;
	let mounted = false;

	onMount(() => {
		mounted = true;

		// Close menu when clicking outside or pressing escape
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (isOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-btn')) {
				isOpen = false;
			}
		};

		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isOpen) {
				isOpen = false;
			}
		};

		document.addEventListener('click', handleClickOutside);
		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	// Prevent body scroll when menu is open
	$: if (mounted) {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<!-- Mobile Hamburger -->
<button
	class="hamburger-btn relative z-[500] block rounded-lg p-0 transition-all duration-300 hover:bg-white/10 focus:outline-none active:scale-95 lg:hidden"
	on:click={toggleMenu}
	aria-label="Toggle menu"
	aria-expanded={isOpen}
>
	<div
		class="relative top-[-2px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full {isOpen
			? 'border-2 border-[#7C7C7C]'
			: ''}"
	>
		<!-- Top Line -->
		<span
			class="absolute block h-0.5 w-5 transition-all duration-300 ease-in-out
    {isOpen ? 'rotate-45 bg-[#7C7C7C]' : '-translate-y-1.3 bg-[white]'}"
		></span>

		<!-- Bottom Line -->
		<span
			class="absolute block h-0.5 w-5 transition-all duration-300 ease-in-out
    {isOpen ? '-rotate-45 bg-[#7C7C7C]' : 'translate-y-1.5 bg-[white]'}"
		></span>
	</div>
</button>

<!-- Mobile Menu Overlay and Menu -->
{#if isOpen}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-[400] bg-black/80 backdrop-blur-sm lg:hidden"
		transition:fade={{ duration: 300, easing: quintOut }}
		on:click={closeMenu}
		role="button"
		tabindex="0"
		aria-label="Close menu"
	></div>

	<!-- Mobile Menu -->
	<nav
		class="mobile-menu fixed top-0 right-0 z-[450] h-full w-full overflow-y-auto shadow-2xl lg:hidden"
		transition:fly={{ x: 400, duration: 400, easing: backOut }}
		role="navigation"
		aria-label="Mobile navigation"
	>
		<!-- Menu Content -->
		<div class="mt-5 p-6 pt-20">
			<ul class="text-left">
				{#each [{ href: '/#discover', label: 'Discover', delay: 0 }, { href: '/#solutions', label: 'Solutions', delay: 50 }, { href: '/#onboarding', label: 'Onboarding', delay: 100 }, { href: '/#insights', label: 'Insights', delay: 150 }] as item, index}
					<li in:fly={{ x: 100, duration: 300, delay: item.delay, easing: quintOut }}>
						<a
							href={item.href}
							rel="external"
							class="group block rounded-xl px-2 py-3 text-[20px] font-[400] text-white/90 transition-all duration-300 hover:translate-x-2 hover:bg-white/5 hover:text-white active:scale-98"
							on:click={closeMenu}
						>
							<span class="flex items-center justify-between capitalize">
								{item.label}
								<svg
									class="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</span>
							<div
								class="h-px w-0 bg-gradient-to-r from-white/20 to-transparent transition-all duration-300 group-hover:w-full"
							></div>
						</a>
					</li>
				{/each}
			</ul>

			<!-- CTA Buttons -->
			<div class="mt-8 space-y-4 px-2 text-[20px]">
				<div in:fly={{ y: 50, duration: 400, delay: 250, easing: backOut }}>
					<Button
						on:click={closeMenu}
						variant="outline"
						extendedClass="group grid h-[55px] w-full place-items-center rounded-[10px] border-3 justify-center text-[20px] font-[400] uppercase transition-all duration-300 active:scale-95"
					>
						LOG IN
					</Button>
				</div>
				<div in:fly={{ y: 50, duration: 400, delay: 200, easing: backOut }}>
					<Button
						on:click={() => {
							closeMenu();
							openJoinForm();
						}}
						extendedClass="group grid h-[55px] w-full place-items-center rounded-[10px] border-3 justify-center text-[20px] font-[400] uppercase transition-all duration-300 active:scale-95"
					>
						<span class="transition-all duration-300 group-hover:tracking-wider">JOIN AULT</span>
					</Button>
				</div>
			</div>
		</div>
	</nav>
{/if}

<style>
	/* Smooth transitions for all interactive elements */
	:global(.mobile-menu a) {
		transform-origin: left center;
	}

	/* Prevent text selection on menu items */
	:global(.mobile-menu) {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	/* Custom active state */
	.active\:scale-98:active {
		transform: scale(0.98);
	}

	.active\:scale-95:active {
		transform: scale(0.95);
	}
</style>
