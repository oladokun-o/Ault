<script>
	const steps = [
		{
			title: 'Step 1: Invitation & Consultation',
			dots: 1,
			description:
				'Your journey starts with an exclusive referral. Your Relationship Manager conducts a personalized consultation to understand your financial goals and preferences.'
		},
		{
			title: 'Step 2: Account Setup & Verification',
			dots: 2,
			description:
				'Our team guides you through verification and sets up your AULT account. Once funded, your gold is purchased and securely stored within three business days.'
		},
		{
			title: 'Step 3: Platform Access',
			dots: 3,
			description:
				'You receive secure access to the AULT web app. Your Relationship Manager helps you navigate the platform to manage assets and access exclusive services.'
		},
		{
			title: 'Step 4: AULT Card Issuance',
			dots: 4,
			description:
				'An exclusive AULT Mastercard is issued, providing seamless global access to your gold for spending anytime, anywhere.'
		}
	];

	let currentStepIndex = 0;
	let stepsCarouselContainer;

	// Function to scroll to specific step
	function scrollToStep(index) {
		if (stepsCarouselContainer) {
			const itemWidth = 288 + 16; // card width + gap
			stepsCarouselContainer.scrollLeft = index * itemWidth;
			currentStepIndex = index;
		}
	}

	// Function to go to next step
	function nextStep() {
		const nextIndex = (currentStepIndex + 1) % steps.length;
		scrollToStep(nextIndex);
	}

	// Function to go to previous step
	function prevStep() {
		const prevIndex = currentStepIndex === 0 ? steps.length - 1 : currentStepIndex - 1;
		scrollToStep(prevIndex);
	}

	// Update current index based on scroll position
	function handleStepsScroll() {
		if (stepsCarouselContainer) {
			const itemWidth = 288 + 16; // card width + gap
			const scrollLeft = stepsCarouselContainer.scrollLeft;
			const newIndex = Math.round(scrollLeft / itemWidth);
			currentStepIndex = Math.min(Math.max(newIndex, 0), steps.length - 1);
		}
	}

	// Touch/swipe support
	let touchStartX = 0;
	let touchEndX = 0;

	function handleTouchStart(e) {
		touchStartX = e.changedTouches[0].screenX;
	}

	function handleTouchEnd(e) {
		touchEndX = e.changedTouches[0].screenX;
		handleSwipe();
	}

	function handleSwipe() {
		const swipeThreshold = 50;
		const diff = touchStartX - touchEndX;

		if (Math.abs(diff) > swipeThreshold) {
			if (diff > 0) {
				// Swiped left - go to next
				nextStep();
			} else {
				// Swiped right - go to previous
				prevStep();
			}
		}
	}
</script>

<!-- Mobile Carousel -->
<div class="relative lg:hidden z-10 w-full">
	<div
		bind:this={stepsCarouselContainer}
		on:scroll={handleStepsScroll}
		on:touchstart={handleTouchStart}
		on:touchend={handleTouchEnd}
		class="no-scrollbar mx-2 snap-x snap-mandatory overflow-x-auto scroll-smooth px-0"
	>
		<div class="flex w-full gap-4">
			{#each steps as step, index}
				<div
					class="flex w-[288px] flex-shrink-0 snap-start flex-col gap-9 rounded-[16px] bg-[#000000] p-4"
				>
					<div class="flex gap-1">
						{#each Array(step.dots) as _, dotIndex}
							<div
								class="relative h-3 w-3 rounded-full bg-[#7D7D7D]"
								style="top: {dotIndex % 2 === 0 ? -1 : 2}px"
							></div>
						{/each}
					</div>
					<div class="grid gap-2">
						<h3 class="text-[16px] font-semibold capitalize">{step.title}</h3>
						<p class="text-[14px] font-light">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Navigation Arrows -->
	<!-- <button
		on:click={prevStep}
		class="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
		disabled={currentStepIndex === 0}
	>
		<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>

	<button
		on:click={nextStep}
		class="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
		disabled={currentStepIndex === steps.length - 1}
	>
		<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button> -->

	<!-- Step Indicators -->
	<!-- <div class="mt-4 flex justify-center gap-2">
		{#each steps as _, index}
			<button
				on:click={() => scrollToStep(index)}
				class="h-2 w-2 rounded-full transition-colors {currentStepIndex === index
					? 'bg-white'
					: 'bg-white/30 hover:bg-white/50'}"
			></button>
		{/each}
	</div> -->

	<!-- Step Counter -->
	<!-- <div class="mt-2 text-center text-sm text-white/60">
		{currentStepIndex + 1} of {steps.length}
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

	button:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}
</style>
