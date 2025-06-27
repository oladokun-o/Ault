<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';
	import CardGuide from '$lib/assets/Card Guide.png';
	import { openJoinForm } from '$lib/stores/formStore';
	import PdfCover from '$lib/assets/ProvidusBank World Elite Mastercard-1_page-0001.jpg';
	import ProvidusBank_World_Elite_Mastercard from '$lib/assets/ProvidusBank World Elite Mastercard.pdf';

	let pdfImageUrl = PdfCover; // URL for the PDF cover image
	const pdfUrl = ProvidusBank_World_Elite_Mastercard;

	const downloadPDF = () => {
		window.open(pdfUrl, '_blank');
	};

	let showPage = false;

	onMount(() => {
		// simulate loader delay (e.g., 2.5s)
		setTimeout(() => {
			showPage = true;
		}, 2500);
	});
</script>

<svelte:head>
	<title>World Elite MasterCard | Discover Your Benefits</title>
	<meta
		name="description"
		content="Access your comprehensive World Elite MasterCard guide. Learn about exclusive benefits, features, and how to maximize your card experience."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- Open Graph Meta Tags -->
	<meta property="og:title" content="World Elite MasterCard | Discover Your Benefits" />
	<meta
		property="og:description"
		content="Access your comprehensive World Elite MasterCard guide. Learn about exclusive benefits, features, and how to maximize your card experience."
	/>
	<meta
		property="og:image"
		content="https://res.cloudinary.com/dksfuytfd/image/upload/v1751027743/ProvidusBank_World_Elite_Mastercard-1_page-0001_yfvdi8.jpg"
	/>
	<meta property="og:url" content="https://goault.com/guide" />
	<meta property="og:type" content="website" />
	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="World Elite MasterCard | Discover Your Benefits" />
	<meta
		name="twitter:description"
		content="Access your comprehensive World Elite MasterCard guide. Learn about exclusive benefits, features, and how to maximize your card experience."
	/>
	<meta
		name="twitter:image"
		content="https://res.cloudinary.com/dksfuytfd/image/upload/v1751027743/ProvidusBank_World_Elite_Mastercard-1_page-0001_yfvdi8.jpg"
	/>
	<meta name="twitter:url" content="https://goault.com/guide" />
</svelte:head>

{#if !showPage}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black">
		<img
			src={CardGuide}
			alt="Card Intro"
			in:fly={{ y: 100, duration: 700 }}
			out:fade={{ duration: 400 }}
			class="w-full animate-slide-up md:w-[320px] xl:w-[400px]"
		/>
	</div>
{/if}

{#if showPage}
	<main class="flex min-h-screen justify-center bg-black px-6 pb-16">
		<div class="grid w-full max-w-6xl grid-cols-1 gap-0 lg:grid-cols-2">
			<!-- PDF Preview -->
			<div class="relative flex items-center justify-center">
				<img
					src={pdfImageUrl}
					alt="PDF Cover"
					in:fade={{ duration: 600 }}
					class="w-full max-w-md shadow-xl xl:max-w-lg"
				/>
			</div>

			<!-- Text & Actions -->
			<div
				class="flex flex-col items-center text-center text-white lg:items-start lg:justify-center lg:text-left"
			>
				<h1 class="mb-4 text-3xl leading-tight font-medium xl:text-nowrap">Welcome!</h1>
				<p class="mb-8 text-lg text-gray-300 md:w-1/2 lg:w-[80%]">
					Discover exclusive benefits and global convenience with your new Mastercard.
				</p>

				<div class="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
					<Button
						on:click={downloadPDF}
						variant="primary"
						extendedClass="group transition-all duration-300 justify-center block md:w-[211px] h-[45px] cursor-pointer rounded-[10px] bg-[#D9D9D9] text-[15px] font-[400] uppercase md:text-[20px] lg:h-[55px]"
						><span class="transition-all duration-300 group-hover:tracking-wider"
							>View Brochure</span
						></Button
					>

					<Button
						on:click={openJoinForm}
						variant="outline"
						extendedClass="group transition-all duration-300 justify-center block md:w-[211px] h-[45px] cursor-pointer rounded-[10px] bg-[#D9D9D9] text-[15px] font-[400] uppercase md:text-[20px] lg:h-[55px]"
						><span class="transition-all duration-300 group-hover:tracking-wider"
							>Get your card</span
						></Button
					>
				</div>
			</div>
		</div>
	</main>
{/if}

<style>
	.animate-slide-up {
		animation: slide-up 0.7s ease-in-out forwards;
	}

	@keyframes slide-up {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
