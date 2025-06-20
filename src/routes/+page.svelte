<script>
	import Logo from '$lib/assets/logo.svg';
	import HeroBackground from '$lib/assets/herobg.png';
	import Security from '$lib/assets/security.png';
	import Exclusivity from '$lib/assets/exclusivity.png';
	import Liquidity from '$lib/assets/liquidity.png';
	import AboutImg from '$lib/assets/aboutimg.jpg';
	import Invitation from '$lib/assets/invitation.png';
	import Platform from '$lib/assets/platform.png';
	import Card from '$lib/assets/card.png';
	import Setup from '$lib/assets/setup.png';
	import AultOnGold from '$lib/assets/ault-on-gold.png';
	import Service1 from '$lib/assets/service1.png';
	import Service2 from '$lib/assets/service2.png';
	import Service3 from '$lib/assets/service3.png';
	import Partner1 from '$lib/assets/partner1.png';
	import Partner2 from '$lib/assets/partner2.png';
	import Partner3 from '$lib/assets/partner3.png';
	import Partner4 from '$lib/assets/partner4.png';
	import Partner5 from '$lib/assets/partner5.png';
	import FooterLogo from '$lib/assets/footer-logo.png';
	import Gold from '$lib/assets/golden.png';
	import HowItWorksImg from '$lib/assets/how-it-works.png';
	import CardBackground from '$lib/assets/card-bg.png';
	import BenefitImg from '$lib/assets/benefit.png';
	import AultGold from '$lib/assets/ault-gold.png';
	import Vision from '$lib/components/Vision.svelte';
	import Beyond from '$lib/components/Beyond.svelte';
	import Howitworks from '$lib/components/Howitworks.svelte';
	import Services from '$lib/components/Services.svelte';

	let isOpen = false;

	const vision = [
		{
			title: 'BUY',
			to: 'Own With Confidence',
			how: 'Securely purchase and hold physical allocated gold, safely stored in LBMA-certified vaults.'
		},
		{
			title: 'SPEND',
			to: 'Spend Without Limits',
			how: 'Instantly access your gold or its benefits via the AULT Mastercard, enabling seamless global spending.'
		},
		{
			title: 'MORE',
			to: 'Unlock Financial Freedom',
			how: 'Lease, borrow against, or transfer your gold assets with unparalleled flexibility and security.'
		}
	];

	const features = [
		{
			title: 'Security',
			image: Security,
			description:
				'All Deposits Are Automatically Converted To Physical Allocated Gold Which Are Stored In LBMA-Certified Vaults In Zurich, London And Dubai.'
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

	const benefits = [
		{
			title: 'Concierge Services:',
			description:
				'Enjoy bespoke assistance with travel planning, dining reservations, and more — your dedicated team is here to curate seamless experiences.'
		},
		{
			title: 'Fast-Track Security & Airport Concierge:',
			description:
				'Experience hassle-free travel with priority security screening and dedicated concierge support.'
		},
		{
			title: 'Luxury Travel Discounts:',
			description:
				'Access exclusive offers at premier hotels and resorts, including renowned brands like Soneva and IHG'
		},
		{
			title: 'Visa & Booking Discounts:',
			description:
				'Take advantage of exclusive deals on flights and hotels via partners like Booking.com and Cleartrip, with expert visa support from Fulfill Visa Services.'
		},
		{
			title: 'Airport Lounge Access:',
			description:
				'Relax in luxury with complimentary entry to premium airport lounges worldwide — bring a guest along to share the experience.'
		},
		{
			title: 'Car Rental Upgrades:',
			description:
				'Travel in style with complimentary vehicle upgrades at Hertz and Avis, enhancing your journey from start to finish.'
		},
		{
			title: 'Global Blue VIP Services:',
			description:
				'Benefit from expedited VAT refunds at select international airports, making your travels smoother.'
		}
	];

	let scrollRef;

	function scrollLeft() {
		scrollRef.scrollBy({ left: -300, behavior: 'smooth' });
	}

	function scrollRight() {
		scrollRef.scrollBy({ left: 300, behavior: 'smooth' });
	}
</script>

<!-- ============================Hero section======================== -->
<section
	class="relative mx-auto flex h-[900px] max-w-[1728px] flex-col gap-20 overflow-x-hidden py-5"
>
	<!-- Gradient overlay -->
	<!-- <div class="absolute inset-0 z-0 bg-black opacity-20"></div> -->

	<!-- Hero Image -->
	<div class="absolute inset-0 z-0">
		<img src={HeroBackground} alt="hero-bg" class="h-full w-full object-cover" />
	</div>

	<!-- navbar -->
	<nav class="relative z-10 flex items-center justify-between px-8 py-4 md:py-0">
		<!-- Logo -->
		<div class="cursor-pointer">
			<a href="/"><img src={Logo} alt="logo" class="w-[86px] md:w-[149px]" /></a>
		</div>

		<!-- Desktop Links -->
		<div class="hidden items-center gap-20 font-[442] lg:flex">
			<ul class="flex gap-10 text-[15px]">
				<li>
					<a
						href="#how-it-works"
						class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
						>Discover</a
					>
				</li>
				<li>
					<a
						href="#your-card"
						class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
						>Your Card</a
					>
				</li>
				<li>
					<a
						href="#benefits"
						class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
						>Benefits</a
					>
				</li>
				<li>
					<a
						href="#insight"
						class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0"
						>Insight</a
					>
				</li>
			</ul>
			<div class="flex gap-7">
				<a
					href="#log-in"
					class="group grid h-[55px] w-[150px] place-items-center rounded-[10px] border-3 border-[#D9D9D9] bg-transparent text-center text-[14px] font-[700] text-white uppercase transition-all duration-300 hover:bg-[#D9D9D9] hover:text-black hover:shadow-lg"
					><span class="transition-all duration-300 group-hover:tracking-wider">LOG IN</span></a
				>
				<a
					href="#about"
					class="group grid h-[55px] w-[150px] place-items-center rounded-[10px] bg-[#D9D9D9] text-center text-[14px] font-[700] text-black uppercase transition-all duration-300"
					><span class="transition-all duration-300 group-hover:tracking-wider">Get Started</span
					></a
				>
			</div>
		</div>

		<!-- Mobile Hamburger -->
		<button class="block focus:outline-none lg:hidden" on:click={() => (isOpen = !isOpen)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="h-8 w-8 cursor-pointer text-white"
			>
				{#if isOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				{/if}
			</svg>
		</button>

		<!-- Mobile Menu -->
		{#if isOpen}
			<div
				class="fixed inset-0 z-[90] h-full w-[80%] max-w-[300px] overflow-y-auto bg-black p-5 pt-20 shadow-lg lg:hidden"
			>
				<div class="mb-10 cursor-pointer">
					<a href="/"><img src={Logo} alt="logo" class="w-28 md:w-32" /></a>
				</div>
				<ul class="space-y-6 text-left text-[16px] font-medium text-white">
					<li>
						<a
							href="#how-it-works"
							class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#D9D9D9] after:transition-all after:duration-300 hover:text-white/80 hover:after:w-full"
							on:click={() => (isOpen = false)}>Discover</a
						>
					</li>
					<li>
						<a
							href="#your-card"
							class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#D9D9D9] after:transition-all after:duration-300 hover:text-white/80 hover:after:w-full"
							on:click={() => (isOpen = false)}>Your Card</a
						>
					</li>
					<li>
						<a
							href="#benefits"
							class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#D9D9D9] after:transition-all after:duration-300 hover:text-white/80 hover:after:w-full"
							on:click={() => (isOpen = false)}>Benefits</a
						>
					</li>
					<li>
						<a
							href="#insight"
							class="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#D9D9D9] after:transition-all after:duration-300 hover:text-white/80 hover:after:w-full"
							on:click={() => (isOpen = false)}>Insight</a
						>
					</li>
					<li>
						<a
							href="#log-in"
							class="group mx-auto block w-full max-w-[300px] rounded-[10px] bg-[#D9D9D9] px-4 py-2 text-center font-bold text-black uppercase transition-all duration-300 hover:scale-105 hover:opacity-95 hover:shadow-lg"
							on:click={() => (isOpen = false)}
							><span class="transition-all duration-300 group-hover:tracking-wider">LOG-IN</span></a
						>
					</li>
					<li>
						<a
							href="#about"
							class="group mx-auto block w-full max-w-[300px] rounded-[10px] bg-[#D9D9D9] px-4 py-2 text-center font-bold text-black uppercase transition-all duration-300 hover:scale-105 hover:opacity-95 hover:shadow-lg"
							on:click={() => (isOpen = false)}
							><span class="transition-all duration-300 group-hover:tracking-wider"
								>Get Started</span
							></a
						>
					</li>
				</ul>
			</div>
		{/if}
	</nav>

	<!-- hero content -->
	<div class="relative z-[1] mx-5 flex flex-col gap-5 text-center">
		<div
			class="3xl:text-[96px] text-[40px] leading-none font-[200] tracking-tighter uppercase sm:text-[45px] lg:text-[60px] xl:text-[70px]"
		>
			timeless security,<br />modern liquidity
		</div>
		<p class="text-[14px] font-[316] lg:text-[20px] xl:text-[27px]">
			Gold made Flexible and Tailored For You
		</p>
	</div>
</section>

<!-- ============================About section======================== -->
<section
	id="about"
	class="relative mx-auto flex min-h-screen max-w-[1728px] flex-col items-center justify-center gap-40 px-5 py-10 text-center md:py-20"
>
	<div class="mx-auto flex flex-col justify-center gap-5">
		<Vision />

		<div>
			<div class="mx-auto mt-3 flex w-full max-w-[80px] justify-center pb-10 lg:max-w-[131px]">
				<img src={Gold} alt="gold" class="w-full" />
			</div>
		</div>

		<div class="text-[20px] font-[316] text-[#E4E4E4] capitalize lg:text-[36px]">
			AULT Is A Concierge Service That Transforms Physical Allocated Gold Into A Liquid Financial
			Asset. Through Advance Tokenization And Trusted Institutional Partnerships, We Empower You To
			Buy, Hold, Spend, Lease, And Borrow-Against Gold With Unmatched Freedom And Confidence.
		</div>
		<button
			class="mx-auto block h-[45px] w-[144px] cursor-pointer rounded-[10px] bg-[#D9D9D9] text-[15px] font-[442] text-black uppercase md:text-[20px] lg:hidden lg:h-[55px] lg:w-[211px]"
			>JOIN AULT</button
		>
	</div>

	<div class="mx-auto flex flex-col gap-20">
		<h1 class="mx-auto text-[32px] font-[316] uppercase lg:text-[44px] 2xl:text-[64px]">
			BEYOND WEALTH. BEYOND GOLD.
		</h1>

		<!-- Carousel for small screens only -->
		<Beyond />

		<!-- Grid layout for desktop -->
		<div class="hidden grid-cols-2 gap-5 md:grid lg:grid-cols-3">
			{#each features as feature (feature.title)}
				<div class="w-[365px] space-y-4 rounded-[4px] bg-[#181818] p-4">
					<div class="mx-auto max-w-[152px]">
						<img src={feature.image} alt={feature.title} class="w-full" />
					</div>
					<div>
						<h3 class="text-[25px] font-bold text-white">{feature.title}</h3>
						<p class="text-[15px] text-white/80">{feature.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================How It Works section======================== -->
<section
	id="how-it-works"
	class="relative mx-auto flex min-h-screen max-w-[1728px] flex-col justify-center gap-20 overflow-x-hidden bg-[#181818] px-5 py-10 md:px-5 md:py-20"
>
	<div class="flex flex-col gap-8 font-[316] lg:flex-row lg:justify-between">
		<h1
			class="lg:text[42px] text-[32px] tracking-tighter uppercase sm:text-[37px] md:w-[282px] md:leading-none xl:text-[60px]"
		>
			How It Works
		</h1>
		<p
			class="text-[24px] font-[300] text-[#FFFFFFCC] capitalize lg:text-[36px] xl:w-[1200px] 2xl:w-[1006px]"
		>
			Exceptional service begins with a personal connection. As a member, you are paired with a
			dedicated Relationship Manager who acts as your trusted advisor — available around the clock
			to handle your requests with precision and confidentiality.
		</p>
	</div>
	<div class="flex flex-row lg:flex-row">
		<div class="hidden lg:block">
			<img src={HowItWorksImg} alt="how-it-works-img" class="w-[518px]" />
		</div>
		<div class="flex w-full flex-col gap-10">
			<!-- Desktop Grid -->
			<div class="hidden grid-cols-2 gap-[41px] pl-10 lg:grid">
				{#each steps as step, i}
					<div
						class="flex max-w-[361px] flex-col gap-9 rounded-[4px] bg-[#000000] lg:bg-transparent"
					>
						<div class="flex gap-1">
							{#each Array(step.dots) as _, index}
								<div
									class="relative h-3 w-3 rounded-full bg-[#7D7D7D]"
									style="top: {index % 2 === 0 ? -1 : 2}px"
								></div>
							{/each}
						</div>
						<div class="grid gap-2">
							<h3 class="text-[16px] font-semibold capitalize lg:text-[20px]">{step.title}</h3>
							<p class="text-[14px] font-extralight lg:text-[20px]">{step.description}</p>
						</div>
					</div>
				{/each}
			</div>

			<!-- Mobile Carousel -->
			<div class="flex w-full items-center justify-center overflow-hidden lg:hidden">
				<Howitworks />
			</div>

			<button
				class="group hidden h-[45px] w-[144px] cursor-pointer rounded-[10px] bg-[#D9D9D9] text-[15px] font-[442] text-black uppercase transition-all duration-300 md:text-[20px] lg:block lg:h-[55px] lg:w-[211px]"
				><span class="transition-all duration-300 group-hover:tracking-wider">JOIN AULT</span
				></button
			>
		</div>
	</div>
</section>

<!-- ============================Your Card section======================== -->
<section
	id="your-card"
	class="relative mx-auto flex w-full max-w-[1728px] flex-col items-center gap-5 px-5 py-10 md:gap-50 md:py-0 lg:min-h-screen lg:flex-row"
	style="background-image: url({CardBackground}); background-size: cover; background-position: center; background-repeat: no-repeat;"
>
	<div
		class="uppecase absolute top-0 w-full text-center z-0 hidden text-[18vw] font-[200] tracking-[0.03em] text-[#181818] lg:block"
	>
		LIMITLESS
	</div>
	<div class="relative w-full lg:mx-0 lg:w-auto">
		<div
			class="relative z-20 mb-auto flex flex-col items-center gap-8 pt-10 text-center capitalize lg:mt-auto lg:items-start lg:text-left"
		>
			<h1
				class="3xl:text-[48px] text-center text-[32px] leading-tight font-[200] tracking-tight capitalize sm:text-[37px] lg:text-left lg:text-[37px] lg:leading-none"
			>
				Gold In Your Hands, <br /> Anytime, Anywhere.
			</h1>
			<p class="w-[272px] text-sm font-[200] capitalize md:w-[572px] lg:text-[20px] lg:font-[300]">
				Experience True Freedom. With Your AULT Mastercard, You Can Spend Your Gold as Currency
				Anywhere in the World.
			</p>
			<button
				class="group mx-auto hidden h-[45px] w-[160px] cursor-pointer rounded-[10px] bg-[#D9D9D9] text-[15px] font-[442] text-black uppercase transition-all duration-300 md:text-[20px] lg:mx-0 lg:block lg:h-[55px] lg:w-[211px]"
				><span class="transition-all duration-300 group-hover:tracking-wider">Get your card</span
				></button
			>
		</div>
	</div>
	<div
		class="relative lg:right-[4rem] lg:bottom-[-4rem]"
	>
		<img src={AultOnGold} alt="ault-on-gold" class="w-full lg:w-[685px]" />
		<button
			class="group relative top-[-70px] mx-auto block h-[45px] w-[160px] cursor-pointer rounded-[10px] bg-[#D9D9D9] text-[15px] font-[442] text-black uppercase transition-all duration-300 md:text-[20px] lg:mx-0 lg:hidden lg:h-[55px] lg:w-[211px]"
			><span class="transition-all duration-300 group-hover:tracking-wider">Get your card</span
			></button
		>
	</div>
</section>

<!-- ============================Services section======================== -->
<section
	class="relative mx-auto flex min-h-screen max-w-[1728px] flex-col items-center justify-center gap-20 overflow-x-hidden bg-[#181818] px-5 py-0 md:py-20"
>
	<div class="w-full text-start">
		<h1
			class="3xl:text-[48px] 3xl:w-[1138px] w-full text-[32px] font-[200] capitalize sm:text-[37px] lg:w-[809px] lg:text-[37px]"
		>
			Unparalleled service that combines security, flexibility, and exclusivity tailored for you.
		</h1>
	</div>

	<div class="flex gap-20 w-full">
		<!-- Carousel (small screens only) -->
		<div class="flex w-full items-center justify-center overflow-hidden md:hidden">
			<Services />
		</div>
		
		<!-- for desktop -->
		<div class="hidden grid-cols-3 gap-16 md:grid">
			{#each services as item}
				<div class="flex h-full w-full flex-col gap-5 overflow-hidden">
					<div class="h-[286px] w-full overflow-hidden">
						<img src={item.image} alt="service" class="h-full w-full object-cover object-center" />
					</div>
					<div class="text-[14px] lg:text-[20px]">
						<h3 class="font-semibold tracking-normal capitalize">{item.title}</h3>
						<p class="text-[20px] leading-relaxed font-extralight tracking-normal capitalize">
							{item.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================Benefit section======================== -->
<section
	id="benefits"
	class="relative mx-auto flex min-h-full max-w-[1728px] flex-col items-center justify-center gap-20 overflow-x-hidden py-10 md:py-20"
>
	<div class="flex items-start gap-10 px-5">
		<!-- IMAGE SECTION -->
		<div class="order-2 hidden w-[496px] pt-20 lg:order-1 lg:block">
			<img src={BenefitImg} alt="benefit-img" class="w-full" />
		</div>

		<!-- TEXT + BENEFITS SECTION -->
		<div class="order-1 flex w-full flex-col gap-10 md:order-2">
			<h1 class="text-[24px] font-[316] capitalize lg:text-[36px] 2xl:text-[45px]">
				As a valued member, you unlock a world of personalized travel, lifestyle, and financial
				privileges, powered by our trusted partnership with Mastercard World Elite.
			</h1>
			<div class="ml-auto block gap-2 text-right lg:hidden">
				<!-- Left Arrow -->
				<button
					on:click={scrollLeft}
					class="cursor-pointer rounded-full bg-white p-2 text-black backdrop-blur-md lg:hidden"
					aria-label="Scroll Left"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="h-5 w-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				<!-- Right Arrow -->
				<button
					on:click={scrollRight}
					class="cursor-pointer rounded-full bg-white p-2 text-black backdrop-blur-md lg:hidden"
					aria-label="Scroll Right"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="h-5 w-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>

			<!-- Carousel for small screens -->
			<div class="relative h-[130px] lg:hidden">
				<div class="absolute right-0 left-0">
					<div
						bind:this={scrollRef}
						class="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 lg:hidden"
					>
						{#each benefits as benefit}
							<div
								class="flex w-[288px] shrink-0 snap-start flex-col space-y-[4px] rounded-[6px] bg-[#000000] p-4 text-[14px] font-[571] capitalize"
							>
								<p>{benefit.title}</p>
								<span class="font-[200] normal-case">{benefit.description}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Grid for large screens -->
			<div class="hidden grid-cols-2 gap-10 lg:grid">
				{#each benefits as benefit}
					<div
						class="flex w-[330px] flex-col space-y-[4px] text-[14px] font-[571] capitalize lg:text-[20px]"
					>
						{benefit.title}
						<span class="font-extralight normal-case">{benefit.description}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============================Our Patner section======================== -->
<section
	id="partner"
	class="relative mx-auto flex min-h-screen max-w-[1728px] flex-col items-center justify-center gap-20 overflow-x-hidden bg-[#181818] px-5 py-10 md:px-20 md:py-20"
>
	<div
		class="flex min-h-[284px] flex-col justify-center gap-5 rounded-[46px] px-0 py-10 lg:gap-10 lg:px-20"
	>
		<p class="3xl:text-[36px] text-[24px] font-[316] lg:w-[907px] lg:text-[25px]">
			Our commitment to you is founded on trusted partnerships and a shared dedication to managing
			your assets with the highest standards of security, transparency, and personalized
			flexibility.
		</p>
		<div class="mt-10 ml-5 flex flex-col gap-10 lg:mt-0 lg:ml-55 lg:flex-row lg:gap-20">
			<div class="flex flex-col gap-2 text-[20px] font-[571]">
				<h3>Emerging Africa</h3>
				<p class="text-[16px] font-[316] text-[#FFFFFFCC] lg:w-[312px]">
					Oversees fiduciary responsibilities, safeguarding your gold assets with exceptional care
					and strict regulatory compliance.
				</p>
			</div>
			<div class="flex flex-col gap-2 text-[20px] font-[571]">
				<h3>Providus Bank</h3>
				<p class="font-[316] text-[#FFFFFFCC] lg:w-[312px]">
					Provides reliable and efficient card solutions, ensuring your funds remain secure,
					accessible, and available whenever you need them.
				</p>
			</div>
		</div>
		<div class="ml-auto max-w-[677px]">
			<img src={AultGold} alt="ault-gold" class="w-full" />
		</div>
	</div>
</section>

<!-- ============================Insight section======================== -->
<section
	id="insight"
	class="relative mx-auto flex min-h-screen max-w-[1728px] flex-col items-center justify-center gap-20 overflow-hidden px-5 py-10 md:px-50 md:py-20"
>
	<!-- Left Glow -->
	<div
		class="absolute top-1/2 left-1/2 z-0 h-40 w-40 -translate-y-1/2 rounded-full bg-[#C686014D] blur-[130px] md:left-0 md:h-96 md:w-96"
	></div>

	<!-- Right Glow -->
	<div
		class="absolute top-1/3 right-0 z-0 hidden h-96 w-96 -translate-y-1/2 rounded-full bg-[#C686014D] blur-[130px] md:block"
	></div>

	<div class="relative z-10 flex flex-col gap-10">
		<h1 class="lg:text[37px] 3xl:text-[64px] text-[37px] font-[316] uppercase sm:text-[37px]">
			Insight
		</h1>

		<div class="flex flex-col gap-3 text-[16px] lg:text-[20px]">
			<div class="cursor-pointer rounded-[8px] border border-white">
				<p class="p-3 font-[442]">What is AULT?</p>
			</div>
			<div class="cursor-pointer rounded-[8px] border border-white">
				<p class="p-3 font-[442]">What do I need to get started?</p>
			</div>
			<div class="cursor-pointer rounded-[8px] border border-white">
				<p class="p-3 font-[442]">Do I need to sell my gold to spend it?</p>
			</div>
			<div class="cursor-pointer rounded-[8px] border border-white">
				<p class="p-3 font-[442]">What are the benefits of the AULT Mastercard?</p>
			</div>
			<div class="cursor-pointer rounded-[8px] border border-white">
				<p class="p-3 font-[442]">What are the benefits of the AULT Mastercard?</p>
			</div>
			<div class="cursor-pointer rounded-[8px] border border-white">
				<p class="p-3 font-[442]">What are the benefits of the AULT Mastercard?</p>
			</div>
		</div>
	</div>
</section>

<!-- ============================Footer section======================== -->
<footer
	class="relative mx-auto flex min-h-auto max-w-[1728px] flex-col items-center gap-3 overflow-x-hidden px-5 py-10 md:gap-10 md:py-20"
>
	<div class="flex w-full justify-between gap-10 text-[10px] font-[200] uppercase lg:text-[18px]">
		<div>
			27 OLD GLOUCESTER <br /> STREET LONDON, UNITED <br /> KINGDOM, WC1N 3AX
		</div>
		<div class="flex flex-col gap-10 lg:flex-row">
			<div>
				<p class="font-[200]">
					your Journey to more <br />
					begins here.
				</p>
			</div>
			<p class="font-[200] uppercase">BUSINESs@goAULT.COM</p>
		</div>
	</div>
	<div class="w-full">
		<img src={FooterLogo} alt="footer-logo" class="w-full" />
	</div>
</footer>
