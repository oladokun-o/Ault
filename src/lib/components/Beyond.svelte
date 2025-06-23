<script>
	import Security from '$lib/assets/security.png';
	import Exclusivity from '$lib/assets/exclusivity.png';
	import Liquidity from '$lib/assets/liquidity.png';

	const features = [
		{
			title: 'Security',
			image: Security,
			description:
				'All Deposits Are Stored As Physical Allocated Gold Vaulted In LBMA-Certified London Vault.'
		},
		{
			title: 'Exclusivity',
			image: Exclusivity,
			description:
				'Our referral-only model ensures you belong to a carefully curated group of members and that we deliver a personalized service, tailored to your needs.'
		},
		{
			title: 'Liquidity',
			image: Liquidity,
			description:
				'Seamless Access To Your Funds. Withdraw, Transfer, Or Spend Your Allocated Gold Assets Wherever And Whenever Needed.'
		}
	];

	let currentIndex = 0;
	let carouselContainer;

	// Function to scroll to specific item
	function scrollToItem(index) {
		if (carouselContainer) {
			const itemWidth = 288 + 16; // card width + gap
			carouselContainer.scrollLeft = index * itemWidth;
			currentIndex = index;
		}
	}

	// Function to go to next item
	function nextItem() {
		const nextIndex = (currentIndex + 1) % features.length;
		scrollToItem(nextIndex);
	}

	// Function to go to previous item
	function prevItem() {
		const prevIndex = currentIndex === 0 ? features.length - 1 : currentIndex - 1;
		scrollToItem(prevIndex);
	}

	// Update current index based on scroll position
	function handleScroll() {
		if (carouselContainer) {
			const itemWidth = 288 + 16; // card width + gap
			const scrollLeft = carouselContainer.scrollLeft;
			const newIndex = Math.round(scrollLeft / itemWidth);
			currentIndex = Math.min(Math.max(newIndex, 0), features.length - 1);
		}
	}

	// Auto-play functionality (optional)
	let autoPlayInterval;

	function startAutoPlay() {
		autoPlayInterval = setInterval(() => {
			nextItem();
		}, 4000); // Change slide every 4 seconds
	}

	function stopAutoPlay() {
		if (autoPlayInterval) {
			clearInterval(autoPlayInterval);
		}
	}

	// Uncomment these lines if you want auto-play
	// onMount(() => {
	// 	startAutoPlay();
	// 	return stopAutoPlay;
	// });
</script>

<!-- Carousel for small screens only -->
<div class="relative h-[300px] w-full md:hidden">
	<div class="absolute right-0 left-0">
		<div class="overflow-hidden px- md:hidden">
			<div
				bind:this={carouselContainer}
				on:scroll={handleScroll}
				on:mouseenter={stopAutoPlay}
				on:mouseleave={startAutoPlay}
				class="no-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
			>
				{#each features as feature, index}
					<div class="w-[288px] flex-shrink-0 snap-start rounded-[4px] bg-[#181818] p-4">
						<img src={feature.image} alt={feature.title} class="mx-auto mb-4 w-[165px]" />
						<h3 class="text-[25px] font-[400] text-white">{feature.title}</h3>
						<p class="text-sm text-white/80">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Navigation Arrows -->
		<!-- <button
			on:click={prevItem}
			class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</button>

		<button
			on:click={nextItem}
			class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button> -->

		<!-- Dot Indicators -->
		<!-- <div class="mt-4 flex justify-center gap-2">
			{#each features as _, index}
				<button
					on:click={() => scrollToItem(index)}
					class="h-3 w-3 rounded-full transition-colors {currentIndex === index
						? 'bg-white'
						: 'bg-white/30 hover:bg-white/50'}"
				></button>
			{/each}
		</div> -->
	</div>
</div>

<style>
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
		-webkit-overflow-scrolling: touch;
	}

	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
