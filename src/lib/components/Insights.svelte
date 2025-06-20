<script lang="ts">
	let activeItem: number | null = 1;

	const faqItems = [
		{
			id: 1,
			question: "What is AULT?",
			answer: "AULT is an exclusive concierge service designed to provide seamless access to gold-backed financial services, allowing the purchase, management, and spend of gold assets securely, with flexibility and ease."
		},
		{
			id: 2,
			question: "Why Gold?",
			answer: "Gold is a stable, long-term asset with a proven track record of preserving value across economic fluctuations. Unlike traditional currencies or investments, gold offers a tangible hedge against uncertainty and market volatility, providing security and liquidity."
		},
		{
			id: 3,
			question: "How Do I Fund My AULT Account?",
			answer: "You can fund your AULT account by transferring fiat currency (USD, EUR, NGN) through our secure platform. Once the funds are received, we will purchase the gold on your behalf. All gold purchased is securely stored in LBMA-certified vaults in London, Zurich, or the UAE."
		},
		{
			id: 4,
			question: "How Do I Access My Gold?",
			answer: "Once your account is active, access your gold via the AULT web app, liquidate it, and spend it using your AULT Mastercard. The entire process of liquidating your allocated gold is supported by robust technology infrastructure and is audited by KPMG LLP for added assurance."
		},
		{
			id: 5,
			question: "How Is My Gold Stored?",
			answer: "Your gold is securely stored in insured vaults in London, Zurich, and the UAE. These vaults meet international standards of security and compliance, ensuring your assets are safe and protected."
		},
		{
			id: 6,
			question: "Do I Need To Sell My Gold To Spend It?",
			answer: "No, you don't need to sell your gold. AULT has partnered with regulated financial entities, allowing you to spend your gold directly anywhere in the world using the AULT Mastercard."
		}
	];

	function toggleItem(id: number) {
		activeItem = activeItem === id ? null : id;
	}
</script>

<div class="flex flex-col gap-3 text-[16px] lg:text-[20px]">
	{#each faqItems as item}
		<div
			class="overflow-hidden rounded-[10px] border-[3px] border-[#FFFFFF24] transition-all duration-300 hover:border-[#FFFFFF40] hover:shadow-lg"
		>
			<button
				class="w-full cursor-pointer p-3 text-left focus:outline-none"
				on:click={() => toggleItem(item.id)}
			>
				<div class="flex items-center justify-between">
					<span class="font-[442] pr-4">{item.question}</span>
				</div>
			</button>
			
			{#if activeItem === item.id}
				<div
					class="animate-slideDown"
				>
					<p class="p-3 pt-0 font-[200] text-[#FFFFFFCC]">
						{item.answer}
					</p>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	/* Smooth accordion animation */
	.animate-slideDown {
		animation: slideDown 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
		overflow: hidden;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			max-height: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			max-height: 200px;
			transform: translateY(0);
		}
	}

	button:focus {
		outline: none;
	}
</style>