<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let activeItem: number | null = 1;

	const faqItems = [
		{
			id: 1,
			question: 'What is AULT?',
			answer:
				'AULT is a concierge service designed to provide seamless access to gold-backed financial services, allowing the purchase, management, and spend of gold assets securely, with flexibility and ease.'
		},
		{
			id: 2,
			question: 'Why Gold?',
			answer:
				'Gold is a stable, long-term asset with a proven track record of preserving value across economic fluctuations. Unlike traditional currencies or investments, gold offers a tangible hedge against uncertainty and market volatility, providing security and liquidity.'
		},
		{
			id: 3,
			question: 'How Do I Fund My AULT Account?',
			answer:
				'You can fund your AULT account by transferring fiat currency (USD, GBP, EUR etc) to our Trustee partner. Once we acquire your gold, the Trustee will release your funds to us. All gold purchased is securely stored in LBMA-certified vaults in London.'
		},
		{
			id: 4,
			question: 'How Do I Access My Gold?',
			answer:
				'Once your account is active, access your gold via the AULT app. You liquidate your hold by spending with your MasterCard. The entire process of liquidating your allocated gold is supported by robust technology infrastructure that is audited by KPMG LLP for added assurance.'
		},
		{
			id: 5,
			question: 'How Is My Gold Stored?',
			answer:
				'Your gold is securely stored at insured vaults in London. These vaults meet international standards of security and compliance, ensuring your assets are safe and protected.'
		},
		{
			id: 6,
			question: 'Do I Need To Sell My Gold To Spend It?',
			answer:
				"No, you don't need to sell your gold. AULT has partnered with regulated financial entities, allowing you to spend your gold directly anywhere in the world using the Mastercard."
		}
	];

	function toggleItem(id: number) {
		activeItem = activeItem === id ? null : id;
	}
</script>

<div class="flex w-full flex-col gap-3 text-[16px] lg:text-[20px]">
	{#each faqItems as item}
		<div
			class="w-full overflow-hidden rounded-[10px] border-[3px] border-[#FFFFFF24] transition-all duration-300 hover:border-[#FFFFFF40] hover:shadow-lg"
		>
			<button
				class="w-full cursor-pointer p-3 text-left focus:outline-none"
				on:click={() => toggleItem(item.id)}
			>
				<div class="flex items-center justify-between">
					<span class="pr-4 font-[400]">{item.question}</span>
					<span
						class="text-[#FFFFFFCC] transition-transform duration-300 {activeItem === item.id
							? 'rotate-180'
							: 'rotate-0'}"
					>
						<!-- <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg> -->
					</span>
				</div>
			</button>

			{#if activeItem === item.id}
				<div transition:slide={{ duration: 400, easing: quintOut }}>
					<p class="p-3 pt-0 font-[200] text-[#FFFFFFCC]">
						{item.answer}
					</p>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	button:focus {
		outline: none;
	}
</style>
