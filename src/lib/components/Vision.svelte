<script>
	import { onMount } from 'svelte';

	const vision = [
		{
			title: 'BUY',
			to: 'Own With Confidence',
			how: 'Securely purchase and hold allocated gold, safely stored in LBMA-certified vaults.'
		},
		{
			title: 'SPEND',
			to: 'Spend Without Limits',
			how: 'Enjoy seamless global spending with instant access to your gold and exclusive benefits through your Mastercard.'
		},
		{
			title: 'MORE',
			to: 'Unlock Returns and Credit',
			how: 'Lease or borrow-against your gold assets with unparalleled flexibility and security.'
		}
	];

	let activeIndex = 0;
	let containerElement;
	let isScrolling = false;

	onMount(() => {
		let scrollTimer;

		const handleScroll = () => {
			if (!containerElement) return;

			// Clear existing timer
			clearTimeout(scrollTimer);
			isScrolling = true;

			// Calculate which section should be active based on scroll position
			const containerRect = containerElement.getBoundingClientRect();
			const containerCenter = containerRect.top + containerRect.height / 2;
			const windowCenter = window.innerHeight / 2;

			// Determine active index based on how far we've scrolled through the container
			const scrollProgress = Math.max(
				0,
				Math.min(1, (windowCenter - containerRect.top) / containerRect.height)
			);
			const newIndex = Math.min(Math.floor(scrollProgress * vision.length), vision.length - 1);

			if (newIndex !== activeIndex) {
				activeIndex = newIndex;
			}

			// Set timer to stop scrolling state
			scrollTimer = setTimeout(() => {
				isScrolling = false;
			}, 100);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(scrollTimer);
		};
	});

	// Handle manual navigation (optional - for touch/click interaction)
	const setActiveIndex = (index) => {
		activeIndex = index;
	};
</script>

<div
	bind:this={containerElement}
	class="flex flex-col items-center gap-3 pt-20 transition-all duration-300"
>
	<!-- Vision Titles -->
	<div
		class="3xl:text-[64px] mx-auto flex -translate-y-1/2 transform gap-3 text-[30px] tracking-tighter uppercase sm:text-[37px] md:leading-none lg:text-[42px]"
	>
		{#each vision as item, index}
			<button
				class="cursor-pointer transition-all duration-500 ease-out hover:scale-105 {index ===
				activeIndex
					? 'font-[370] text-white'
					: 'text-[#686868] hover:text-[#888888]'}"
				on:click={() => setActiveIndex(index)}
			>
				{item.title}{index < vision.length - 1 ? '.' : '.'}
			</button>
		{/each}
	</div>

	<!-- Active Content -->
	<div
		class="mx-auto mt-5 flex flex-col gap-2 font-[400] transition-all duration-700 ease-out md:w-[400px]"
	>
		{#key activeIndex}
			<h2
				class="2x:text-[36px] transform text-[20px] capitalize transition-all duration-700 ease-out lg:text-[28px]"
				style="animation: slideInUp 0.7s ease-out;"
			>
				{vision[activeIndex].to}
			</h2>
			<p
				class="transform px-5 text-[14px] text-[#FFFFFFCC] transition-all duration-700 ease-out lg:text-[20px] h-[70px]"
				style="animation: slideInUp 0.7s ease-out 0.1s both;"
			>
				{vision[activeIndex].how}
			</p>
		{/key}
	</div>

	<!-- Progress Indicator -->
	<!-- <div class="mt-8 flex gap-2">
		{#each vision as _, index} -->
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<!-- <button
				class="h-3 w-3 rounded-full transition-all duration-300 {index === activeIndex
					? 'bg-white'
					: 'bg-[#686868] hover:bg-[#888888]'}"
				on:click={() => setActiveIndex(index)}
			/>
		{/each}
	</div> -->

	<!-- Scroll Hint -->
	<!-- {#if !isScrolling && activeIndex === 0}
		<div class="absolute bottom-8 flex animate-bounce flex-col items-center gap-2">
			<span class="text-sm text-[#FFFFFFCC]">Scroll to explore</span>
			<svg class="h-6 w-6 text-[#FFFFFFCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</div>
	{/if} -->
</div>

<style>
	@keyframes slideInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Smooth scrolling for the entire page */
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Custom scrollbar styling (optional) */
	:global(::-webkit-scrollbar) {
		width: 8px;
	}

	:global(::-webkit-scrollbar-track) {
		background: rgba(255, 255, 255, 0.1);
	}

	:global(::-webkit-scrollbar-thumb) {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 4px;
	}

	:global(::-webkit-scrollbar-thumb:hover) {
		background: rgba(255, 255, 255, 0.5);
	}
</style>
