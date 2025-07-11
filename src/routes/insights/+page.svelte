<script lang="ts">
	import { insights } from '$lib/data/insights';
	import ChevronSvg from '$lib/assets/chevron.svg';
	import InsightsBg from '$lib/assets/insights.png';
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let openGroups = new Set<string>(
		insights.map(group => group.title)
	); // Initialize with all groups open

	function toggleGroup(title: string) {
		if (openGroups.has(title)) {
			openGroups.delete(title);
		} else {
			openGroups.add(title);
		}
		// To trigger reactivity
		openGroups = new Set(openGroups);
	}


  onMount(() => {
    // Temporarily disable smooth scroll
    document.documentElement.style.scrollBehavior = 'auto';

    // Instantly scroll to the top
    window.scrollTo(0, 0);

    // Restore smooth scroll after a short delay
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 50);
  });
</script>

<!-- navbar -->
<Navbar />

<section class="relative mx-auto max-w-[1728px]">
	<div id="hero"
		class="flex h-[130px] md:h-[200px] w-full flex-col items-center justify-end gap-5 xl:h-[376px] px-5 lg:px-20 xl:px-[150px] lg:mb-20"
	>
		<img src={InsightsBg} alt="AULT Insights" class="absolute top-0 left-0 w-full" />
		<div class="relative w-full">
			<h1 class="pb-10 text-[24px] font-[400] uppercase lg:text-[64px]">insights</h1>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-10 lg:gap-20 px-5 py-10 lg:grid-cols-2 md:px-5 lg:mt-10 lg:px-20 xl:px-[150px] lg:pt-20">
		{#each insights as group}
			<div class="w-full overflow-hidden border border-[#FFFFFF4D] {openGroups.has(group.title) ? 'h-auto' : 'h-[71px]'}">
				<!-- Group Header -->
				<button
				style="cursor: pointer;"
					class="flex w-full items-center justify-between px-4 py-3 transition-all duration-300 hover:bg-[#1a1a1a] border-b border-[#FFFFFF4D]"
					on:click={() => toggleGroup(group.title)}
				>
					<h2 class="text-left text-[18px] font-[400]">{group.title}</h2>
					<img
						src={ChevronSvg}
						alt="Toggle"
						class="transition-transform duration-300 {!openGroups.has(group.title)
							? 'rotate-180'
							: ''}"
					/>
				</button>

				<!-- Group Content -->
				{#if openGroups.has(group.title)}
					<div class="divide-y divide-[#FFFFFF20] bg-black/20">
						{#each group.items as item}
							<div class="px-4 py-5 text-[15px]">
								<p class="mb-2 font-[400] text-white">Q: {item.question}</p>
								<p class="leading-relaxed font-[300] text-[#cfcfcf]">{item.answer}</p>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<Footer />
