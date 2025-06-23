<script>
	import Service1 from '$lib/assets/service1.png';
	import Service2 from '$lib/assets/service2.png';
	import Service3 from '$lib/assets/service3.png';

	const services = [
		{
			title: '24/7 Concierge:',
			description: `Your dedicated Relationship Manager is always available to handle your requests and privileges, ensuring your needs are met with care and precision.`,
			image: Service1
		},
		{
			title: 'Global Support:',
			description: `Our worldwide network provides seamless access to your gold and personalized assistance wherever you are.`,
			image: Service2
		},
		{
			title: 'Effortless Fund Access:',
			description: `Easily manage your allocated gold and securely send instructions through our intuitive web app.`,
			image: Service3
		}
	];

	let currentServiceIndex = 0;
	let servicesCarouselContainer;

	// Function to scroll to specific service
	function scrollToService(index) {
		if (servicesCarouselContainer) {
			const itemWidth = 288 + 24; // card width + gap
			servicesCarouselContainer.scrollLeft = index * itemWidth;
			currentServiceIndex = index;
		}
	}

	// Function to go to next service
	function nextService() {
		const nextIndex = (currentServiceIndex + 1) % services.length;
		scrollToService(nextIndex);
	}

	// Function to go to previous service
	function prevService() {
		const prevIndex = currentServiceIndex === 0 ? services.length - 1 : currentServiceIndex - 1;
		scrollToService(prevIndex);
	}

	// Update current index based on scroll position
	function handleServicesScroll() {
		if (servicesCarouselContainer) {
			const itemWidth = 288 + 24; // card width + gap
			const scrollLeft = servicesCarouselContainer.scrollLeft;
			const newIndex = Math.round(scrollLeft / itemWidth);
			currentServiceIndex = Math.min(Math.max(newIndex, 0), services.length - 1);
		}
	}

	// Touch/swipe support
	let touchStartX = 0;
	let touchEndX = 0;
	let isDragging = false;

	function handleTouchStart(e) {
		touchStartX = e.changedTouches[0].screenX;
		isDragging = true;
	}

	function handleTouchMove(e) {
		if (!isDragging) return;
		e.preventDefault();
	}

	function handleTouchEnd(e) {
		if (!isDragging) return;
		touchEndX = e.changedTouches[0].screenX;
		handleSwipe();
		isDragging = false;
	}

	function handleSwipe() {
		const swipeThreshold = 50;
		const diff = touchStartX - touchEndX;

		if (Math.abs(diff) > swipeThreshold) {
			if (diff > 0) {
				// Swiped left - go to next
				nextService();
			} else {
				// Swiped right - go to previous
				prevService();
			}
		}
	}

	// Auto-play functionality (optional)
	let autoPlayInterval;

	function startAutoPlay() {
		autoPlayInterval = setInterval(() => {
			nextService();
		}, 5000); // Change slide every 5 seconds
	}

	function stopAutoPlay() {
		if (autoPlayInterval) {
			clearInterval(autoPlayInterval);
		}
	}

	// Keyboard navigation
	function handleKeydown(e) {
		if (e.key === 'ArrowLeft') {
			prevService();
		} else if (e.key === 'ArrowRight') {
			nextService();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Carousel (small screens only) -->
<div class="relative md:hidden w-full">
	<div
		bind:this={servicesCarouselContainer}
		on:scroll={handleServicesScroll}
		on:touchstart={handleTouchStart}
		on:touchmove={handleTouchMove}
		on:touchend={handleTouchEnd}
		on:mouseenter={stopAutoPlay}
		on:mouseleave={startAutoPlay}
		class="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-10 w-full"
	>
		{#each services as item, index}
			<div
				class="flex w-[288px] shrink-0 snap-start flex-col gap-5 p-4 transition-transform duration-200 hover:scale-[1.02]"
			>
				<div class="h-[180px] w-full overflow-hidden rounded">
					<img
						src={item.image}
						alt="service"
						class="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
						loading="lazy"
					/>
				</div>
				<div class="text-[14px] lg:text-[20px]">
					<h3 class="font-semibold tracking-normal capitalize">{item.title}</h3>
					<p class="leading-relaxed font-light tracking-normal capitalize">{item.description}</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Navigation Arrows -->
	<!-- <button
		on:click={prevService}
		class="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white shadow-lg transition-all duration-200 hover:bg-black/80"
		aria-label="Previous service"
	>
		<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>

	<button
		on:click={nextService}
		class="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white shadow-lg transition-all duration-200 hover:bg-black/80"
		aria-label="Next service"
	>
		<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button> -->

	<!-- Service Indicators -->
	<!-- <div class="mt-6 flex justify-center gap-3">
		{#each services as _, index}
			<button
				on:click={() => scrollToService(index)}
				class="transition-all duration-300 {currentServiceIndex === index
					? 'h-2 w-8 rounded-full bg-white'
					: 'h-2 w-2 rounded-full bg-white/40 hover:bg-white/60'}"
				aria-label="Go to service {index + 1}"
			></button>
		{/each}
	</div> -->

	<!-- Service Counter -->
	<!-- <div class="mt-3 text-center text-sm text-white/70">
		<span class="font-medium">{currentServiceIndex + 1}</span>
		<span class="mx-1">/</span>
		<span>{services.length}</span>
	</div> -->

	<!-- Progress Bar -->
	<!-- <div class="mx-4 mt-4">
		<div class="h-1 w-full rounded-full bg-white/20">
			<div
				class="h-1 rounded-full bg-white transition-all duration-300 ease-out"
				style="width: {((currentServiceIndex + 1) / services.length) * 100}%"
			></div>
		</div>
	</div> -->
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
