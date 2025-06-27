<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Logo from '$lib/assets/logo.svg';
	import HeroBackground from '$lib/assets/herobg.png';
	import Security from '$lib/assets/security.png';
	import Exclusivity from '$lib/assets/exclusivity.png';
	import Liquidity from '$lib/assets/liquidity.png';
	import AboutImg from '$lib/assets/aboutimg.jpg';
	import CardLg from '$lib/assets/card-lg.png';
	import AultOnGold from '$lib/assets/ault-on-gold.png';
	import Service1 from '$lib/assets/service1.png';
	import Service2 from '$lib/assets/service2.png';
	import Service3 from '$lib/assets/service3.png';
	import Partner1 from '$lib/assets/partner1.png';
	import Partner2 from '$lib/assets/partner2.png';
	import Partner3 from '$lib/assets/partner3.png';
	import Partner4 from '$lib/assets/emerging-africa.svg';
	import Partner5 from '$lib/assets/partner5.png';
	import Gold from '$lib/assets/golden.png';
	import HowItWorksImg from '$lib/assets/how-it-works.png';
	import CardBackground from '$lib/assets/card-bg.png';
	import BenefitImg from '$lib/assets/benefit.png';
	import AultGold from '$lib/assets/ault-gold.png';
	import Vision from '$lib/components/Vision.svelte';
	import Beyond from '$lib/components/Beyond.svelte';
	import Howitworks from '$lib/components/Howitworks.svelte';
	import Services from '$lib/components/Services.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import PartnerImg from '$lib/assets/partner-image.png';
	import Insights from '$lib/components/Insights.svelte';
	import arrow from '$lib/assets/solar_arrow-up-linear.svg';
	import JoinAultForm from '$lib/components/JoinAultForm.svelte';
	import { openJoinForm } from '$lib/stores/formStore';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/sections/Card.svelte';

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
				'All Deposits Are Stored As Allocated Gold Vaulted In LBMA-Certified London Vault.'
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
				'Our team guides you through verification and sets up your AULT account. Once funded, your gold is purchased and securely stored, all within three business days.'
		},
		{
			title: 'Step 3: Platform Access',
			dots: 3,
			description:
				'You receive secure access to the AULT app. Your Relationship Manager helps you navigate the platform to manage assets and access exclusive services.'
		},
		{
			title: 'Step 4: AULT Card Issuance',
			dots: 4,
			description:
				'An exclusive Mastercard is issued by a partner bank. You can also link existing Mastercard to gain seamless global access to your gold anytime, anywhere.'
		}
	];

	const services = [
		{
			title: 'Personalized Fit:',
			description: `Access Gold-Backed Services Tailored To Your Objectives, Empowering You To Meet Your Financial Goals.`,
			image: Service1
		},
		{
			title: 'Global Support:',
			description: `Our Trusted Worldwide Network Guarantees Seamless Access To Gold And Dedicated Assistance.`,
			image: Service2
		},
		{
			title: 'Effortless Fund Access:',
			description: `Manage Allocated Gold, Submit Secure Instructions, Instantly Access Liquidity Through Our Intuitive App.`,
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
			title: 'Global Blue VIP Services:',
			description:
				'Benefit from expedited VAT refunds at select international airports, making your travels smoother.'
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
			title: 'Visa & Booking Discounts:',
			description:
				'Take advantage of exclusive deals on flights and hotels via partners like Booking.com and Cleartrip, with expert visa support from Fulfill Visa Services.'
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
	id="hero"
	class="relative top-[-88px] min-h-screen w-full overflow-x-hidden py-5 pt-[100px] lg:px-20 lg:pt-[160px]"
>
	<div class="mx-auto flex w-full max-w-[1728px] flex-col gap-20 lg:px-20 xl:px-[150px]">
		<!-- Gradient overlay -->
		<!-- <div class="absolute inset-0 z-0 bg-black opacity-20"></div> -->

		<!-- Hero Image -->
		<div class="absolute inset-0 z-0">
			<img src={HeroBackground} alt="hero-bg" class="relative h-full w-full object-cover" />
		</div>

		<!-- hero content -->
		<div
			class="relative top-[-50px] z-[1] mx-5 flex flex-col items-center justify-center gap-5 text-center lg:top-[-40px] lg:text-left xl:top-0"
		>
			<div
				class="3xl:text-[96px] text-[40px] leading-none font-[200] tracking-tighter uppercase sm:text-[45px] lg:top-0 lg:text-[60px] xl:text-[70px]"
			>
				<span class="hidden tracking-normal lg:block"
					>timeless security,<br />modern liquidity.</span
				>
				<span class="block pt-20 tracking-normal lg:hidden"
					>timeless<br /> security,<br />modern <br /> liquidity.</span
				>
			</div>
			<p class="w-full text-center text-[20px] font-[200] capitalize">
				Gold made Flexible <br class="block lg:hidden" /> and Tailored For You
			</p>
		</div>
	</div>
</section>

<!-- ============================About section======================== -->
<section
	id="about"
	class="relative mx-auto flex min-h-screen max-w-[1728px] flex-col items-center justify-center gap-40 px-5 py-10 text-center md:py-20 lg:px-20 xl:px-[150px]"
>
	<div class="mx-auto flex flex-col justify-center gap-5">
		<Vision />

		<div>
			<div class="mx-auto mt-3 flex w-full max-w-[80px] justify-center pb-10 lg:max-w-[131px]">
				<img src={Gold} alt="gold" class="w-full" />
			</div>
		</div>

		<div class="text-[24px] font-[200] text-[#E4E4E4] capitalize lg:text-[36px]">
			AULT Is A Concierge Service That Transforms Allocated Gold Into A Liquid Financial Asset.
			Through Cutting Edge Technology And Trusted Institutional Partnerships, We Empower You To Buy,
			Hold, Spend, Lease, And Borrow-Against Gold With Unmatched Freedom And Confidence.
		</div>
		<Button
			on:click={openJoinForm}
			extendedClass="group transition-all duration-300 mx-auto justify-center block h-[45px] w-[144px] cursor-pointer rounded-[10px] bg-[#D9D9D9] text-[15px] font-[400] text-black uppercase md:text-[20px] lg:hidden lg:h-[55px] lg:w-[211px]"
			><span class="transition-all duration-300 group-hover:tracking-wider">JOIN AULT</span></Button
		>
	</div>

	<div class="mx-auto flex flex-col gap-20">
		<h1 class="mx-auto text-[32px] font-[200] uppercase lg:text-[44px] 2xl:text-[64px]">
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
						<h3 class="font-nromal text-[25px] text-white">{feature.title}</h3>
						<p class="text-[15px] text-white/80">{feature.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================Our Partner section======================== -->
<section
	id="partner"
	class="item-center relative flex min-h-screen w-full flex-col justify-center gap-20 overflow-x-hidden bg-[#181818] px-5 py-10 md:py-20"
>
	<div
		class="mx-auto flex min-h-[284px] w-full max-w-[1728px] flex-col justify-between gap-5 px-0 py-10 lg:flex-row lg:gap-20 lg:px-20 xl:px-[150px]"
	>
		<div class="flex flex-col justify-between gap-7">
			<p class="3xl:text-[36px] text-[24px] font-[200] lg:max-w-[907px] lg:text-[25px]">
				Our commitment to you is founded on trusted partnerships and a shared dedication to managing
				your assets with the highest standards of security, transparency, and personalized
				flexibility.
			</p>
			<div class="hidden max-h-[294px] max-w-[908px] lg:block">
				<img src={PartnerImg} alt="Partner-img" class="h-full w-full" />
			</div>
		</div>
		<div
			class="mt-10 ml-5 flex flex-col justify-between gap-10 md:flex-row lg:mt-0 lg:ml-0 lg:flex-col lg:gap-2"
		>
			<div class="flex max-w-[378px] flex-col gap-5 text-[20px] font-[571]">
				<div class="max-w-[159px]">
					<img src={Partner4} alt="partner" class="w-full" />
				</div>
				<span class="ml-1 text-[16px] font-[200] text-[#FFFFFFCC] lg:w-[312px]">
					<span class="font-normal">Emerging Africa</span> Our Trustee partner playing its role as a
					regulated fiduciary, safeguarding your gold assets with exceptional care and strict regulatory
					compliance.
				</span>
			</div>
			<div class="flex max-w-[378px] flex-col gap-5 text-[20px] font-[571]">
				<div class="max-w-[132px] opacity-[60%]">
					<img src={Partner1} alt="partner" class="w-full" />
				</div>
				<span class="ml-1 text-[16px] font-[200] text-[#FFFFFFCC] lg:w-[312px]">
					<span class="font-normal">ProvidusBank</span> The spotlight bank in our network of banks providing
					efficient card solutions, ensuring you maximise all of AULT’s offerings, anywhere, anytime.
				</span>
			</div>
		</div>
	</div>
</section>

<!-- ============================Your Card section======================== -->
<Card />

<!-- ============================How It Works section======================== -->
<section
	id="how-it-works"
	class="relative min-h-screen w-full overflow-x-hidden bg-[#181818] px-5 py-10 md:px-5 md:py-20"
>
	<div
		class="mx-auto flex w-full max-w-[1728px] flex-col justify-center gap-20 lg:px-20 xl:px-[150px]"
	>
		<div class="flex flex-col gap-8 font-[200] lg:flex-row lg:justify-between lg:gap-30">
			<h1
				class="lg:text[42px] text-[32px] tracking-tighter text-nowrap uppercase sm:text-[37px] md:w-[282px] md:leading-none xl:text-[60px]"
			>
				How It <br class="hidden lg:block" /> Works
			</h1>
			<p
				class="text-[24px] font-[200] text-[#FFFFFFCC] lg:text-[36px] xl:w-[1200px] 2xl:w-[1006px]"
			>
				The AULT experience is structured for ease and precision. From first contact to activation,
				each step is guided by your able assistant and powered by systems built to anticipate your
				needs.
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
								<h3 class="text-[16px] font-normal capitalize lg:text-[20px]">{step.title}</h3>
								<p class="text-[14px] font-extralight lg:text-[20px]">{step.description}</p>
							</div>
						</div>
					{/each}
				</div>

				<!-- Mobile Carousel -->
				<div class="flex w-full items-center justify-center overflow-hidden lg:hidden">
					<Howitworks />
				</div>

				<!-- <button
					on:click={openJoinForm}
					class="group ml-10 hidden h-[45px] w-[144px] cursor-pointer rounded-[10px] bg-[#D9D9D9] text-[15px] font-[400] text-black uppercase transition-all duration-300 md:text-[20px] lg:block lg:h-[55px] lg:w-[211px]"
					><span class="transition-all duration-300 group-hover:tracking-wider">JOIN AULT</span
					></button
				> -->
			</div>
		</div>
	</div>
</section>

<!-- ============================Services section======================== -->
<section class="relative min-h-screen w-full overflow-x-hidden bg-[#181818] px-5 py-10 md:py-20">
	<div
		class="mx-auto flex w-full max-w-[1728px] flex-col items-center justify-center gap-20 lg:px-20 xl:px-[150px]"
	>
		<div class="w-full text-start">
			<h1
				class="3xl:text-[48px] 3xl:w-[1138px] w-full text-[32px] font-[200] capitalize sm:text-[37px] lg:w-[809px] lg:text-[37px]"
			>
				Unparalleled service, redefined to deliver more than ease and convenience, wherever you are.
			</h1>
		</div>

		<div class="flex w-full gap-20">
			<!-- Carousel (small screens only) -->
			<div class="flex w-full items-center justify-center overflow-hidden md:hidden">
				<Services {services} />
			</div>

			<!-- for desktop -->
			<div class="hidden grid-cols-3 gap-16 md:grid">
				{#each services as item}
					<div class="flex h-full w-full flex-col gap-5 overflow-hidden">
						<div class="h-[286px] w-full overflow-hidden">
							<img
								src={item.image}
								alt="service"
								class="h-full w-full object-cover object-center"
							/>
						</div>
						<div class="text-[14px] lg:text-[20px]">
							<h3 class="font-normal tracking-normal capitalize">{item.title}</h3>
							<p class="text-[20px] leading-relaxed font-extralight tracking-normal capitalize">
								{item.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============================Insight section======================== -->
<section
	id="insight"
	class="item-center relative flex min-h-screen w-full flex-col justify-center gap-20 overflow-hidden px-5 py-10 md:py-20"
>
	<div class="mx-auto w-full max-w-[1728px] lg:px-20 xl:px-[150px]">
		<!-- Left Glow -->
		<div
			class="absolute top-1/2 left-1/2 z-0 h-40 w-40 -translate-y-1/2 rounded-full bg-[#C686014D] blur-[130px] md:left-0 md:h-96 md:w-96"
		></div>

		<!-- Right Glow -->
		<div
			class="absolute top-1/3 right-0 z-0 hidden h-96 w-96 -translate-y-1/2 rounded-full bg-[#C686014D] blur-[130px] md:block"
		></div>

		<div class="relative z-10 flex w-full flex-col gap-10">
			<h1
				class="lg:text[37px] 3xl:text-[64px] w-full text-[37px] font-[200] uppercase sm:text-[37px]"
			>
				Insights
			</h1>

			<Insights />

			<a
				href="/insights"
				class="ml-auto flex w-full cursor-pointer items-center gap-3 text-[14px] font-[200] tracking-tight lg:text-[32px] lg:font-[200]"
			>
				Learn more
				<img
					src={arrow}
					alt="arrow"
					class="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
				/>
			</a>
		</div>
	</div>
</section>

<style>
	@media (max-width: 465px) {
		.card-bg {
			background-position: 81% -60px;
		}
	}

	@media (max-width: 768px) {
		.card-bg {
			background-position: 90% 0px;
		}
	}

	/* Large screens (do not show card background image) */
	@media (min-width: 1024px) {
		.card-bg {
			background-image: none !important;
		}
	}
</style>
