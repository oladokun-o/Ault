<script lang="ts">
	import CoinsPng from '$lib/assets/new coins.png';
	import CardPng from '$lib/assets/ault-on-gold.png';
	import arrow from '$lib/assets/solar_arrow-up-linear.svg';
</script>

<section
	id="solutions"
	class="relative flex w-full flex-col items-center justify-center overflow-hidden px-5 py-20 md:py-20 lg:my-auto lg:min-h-screen"
>
	<div
		class="mx-auto flex w-full max-w-[1728px] flex-col justify-center gap-20 lg:px-20 xl:px-[150px]"
	>
		<div class="flex w-full flex-wrap justify-between">
			<div class="lg:flex w-full items-center justify-center lg:w-[30%] hidden">
				<img src={CoinsPng} alt="Coins" class="w-full object-cover" />
			</div>
			<div class="flex w-full flex-wrap gap-10 lg:w-[70%] lg:pl-20">
				<div class="w-full">
					<h1 class="mb-3 text-start text-[32px] font-normal text-white md:text-[35px]">
						Unlock More From Gold With AULT
					</h1>
					<p
						class="w-full text-start text-[16px] font-light text-white md:w-[564px] md:text-[26px]"
					>
						Go beyond wealth preservation with leasing and credit solutions that leverage your
						allocated gold to meet your evolving financial goals.
					</p>
				</div>
				<div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
					<div class="w-full">
						<h2 class="mb-2 text-start text-[16px] font-normal text-white md:text-[20px]">
							Leasing
						</h2>
						<p class="text-start text-[16px] font-extralight text-white capitalize md:text-[20px]">
							Choose to lease your allocated gold to generate income while retaining full ownership.
							Opt in to unlock earnings from your holdings without selling.
						</p>
					</div>
					<div class="w-full">
						<h2 class="mb-2 text-start text-[16px] font-normal text-white md:text-[20px]">
							Credit
						</h2>
						<p class="text-start text-[16px] font-extralight text-white capitalize md:text-[20px]">
							Access up to fifty percent of your gold’s value in credit and secure funds quickly.
							Your gold remains yours, serving as collateral for on-demand liquidity.
						</p>
					</div>
				</div>
				<div class="w-full">
					<a
						href="/insights"
						class="ml-auto flex w-full cursor-pointer items-center gap-3 text-[14px] font-normal tracking-tight lg:text-[32px]"
					>
						Learn More
						<img
							src={arrow}
							alt="arrow"
							class="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section
	id="your-card"
	class="relative flex w-full flex-col items-center justify-center overflow-hidden px-5 py-10 md:py-20 lg:my-auto lg:min-h-screen"
>
	<div
		class="mx-auto flex w-full max-w-[1728px] flex-col justify-center gap-20 lg:px-20 xl:px-[150px]"
	>
		<div class="flex w-full flex-wrap justify-between">
			<div class="flex w-full flex-wrap gap-10 lg:pr-20 lg:w-[65%]">
				<div class="w-full">
					<h1 class="text-start text-[32px] font-normal text-white md:text-[32px] lg:leading-10 capitalize">
						Experience true freedom with your Mastercard. Spend your gold as currency worldwide and
						enjoy a suite of exclusive privileges Powered By World Elite.
					</h1>
				</div>
				<div class="grid w-full grid-cols-1 gap-5 xl:grid-cols-2 md:gap-8">
					<div class="w-full">
						<h2 class="mb-2 text-start text-[16px] font-normal text-white md:text-[20px]">
							Luxury Travel Discounts:
						</h2>
						<p class="text-start text-[16px] font-extralight text-white capitalize md:text-[20px]">
							Access exclusive offers at premier hotels and resorts, including renowned brands like
							Soneva and IHG.
						</p>
					</div>
					<div class="w-full">
						<h2 class="mb-2 text-start text-[16px] font-normal text-white md:text-[20px]">
							Visa & Booking Discounts:
						</h2>
						<p class="text-start text-[16px] font-extralight text-white capitalize md:text-[20px]">
							Take advantage of exclusive deals on flights and hotels via partners like Booking.com
							and Cleartrip, with expert visa support from Fulfill Visa Services.
						</p>
					</div>
					<div class="w-full">
						<h2 class="mb-2 text-start text-[16px] font-normal text-white md:text-[20px]">
							Concierge Services:
						</h2>
						<p class="text-start text-[16px] font-extralight text-white capitalize md:text-[20px]">
							Enjoy bespoke assistance with travel planning, dining reservations, and more — your
							dedicated team is here to curate seamless experiences.
						</p>
					</div>
					<div class="w-full">
						<h2 class="mb-2 text-start text-[16px] font-normal text-white md:text-[20px]">
							Global Blue VIP Services:
						</h2>
						<p class="text-start text-[16px] font-extralight text-white capitalize md:text-[20px]">
							Benefit from expedited VAT refunds at select international airports, making your
							travels smoother.
						</p>
					</div>
					<div class="w-full">
						<a
							href="/card"
							class="ml-auto flex w-full cursor-pointer items-center gap-3 text-[14px] font-normal tracking-tight lg:text-[32px]"
						>
							Explore World Elite
							<img
								src={arrow}
								alt="arrow"
								class="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="flex w-full flex-wrap gap-10 lg:w-[35%]">
				<div class="lg:flex hidden w-full items-center justify-center">
					<img src={CardPng} alt="Card" class="w-full lg:w-[400px] object-cover" />
				</div>
			</div>
		</div>
	</div>
</section>
