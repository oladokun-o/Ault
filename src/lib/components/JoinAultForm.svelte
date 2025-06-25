<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { closeJoinForm, showJoinForm } from '$lib/stores/formStore';

	let formData = {
		fullName: '',
		email: '',
		phone: '',
		interests: [],
		ownsGold: '',
		providusAccount: '',
		location: ''
	};

	const interests = [
		'Buying and Holding Gold',
		'Leasing Gold',
		'Credit Solutions',
		'AULT Mastercard'
	];

	// Sample locations - replace with API data later
	const locations = [
		'Lagos, Nigeria',
		'Abuja, Nigeria',
		'Port Harcourt, Nigeria',
		'Kano, Nigeria',
		'Ibadan, Nigeria',
		'Benin City, Nigeria',
		'Kaduna, Nigeria',
		'Jos, Nigeria',
		'Ilorin, Nigeria',
		'Enugu, Nigeria',
		'Aba, Nigeria',
		'Onitsha, Nigeria',
		'Warri, Nigeria',
		'Calabar, Nigeria',
		'Uyo, Nigeria',
		'Akure, Nigeria',
		'Abeokuta, Nigeria',
		'Sokoto, Nigeria',
		'Katsina, Nigeria',
		'Bauchi, Nigeria',
		'London, United Kingdom',
		'Manchester, United Kingdom',
		'Birmingham, United Kingdom',
		'Liverpool, United Kingdom',
		'Leeds, United Kingdom',
		'Glasgow, Scotland',
		'Edinburgh, Scotland',
		'Cardiff, Wales',
		'Belfast, Northern Ireland',
		'New York, United States',
		'Los Angeles, United States',
		'Chicago, United States',
		'Houston, United States',
		'Phoenix, United States',
		'Philadelphia, United States',
		'San Antonio, United States',
		'San Diego, United States',
		'Dallas, United States',
		'San Jose, United States',
		'Toronto, Canada',
		'Vancouver, Canada',
		'Montreal, Canada',
		'Calgary, Canada',
		'Ottawa, Canada',
		'Edmonton, Canada',
		'Mississauga, Canada',
		'Winnipeg, Canada',
		'Quebec City, Canada',
		'Hamilton, Canada'
	];

	// Location dropdown state
	let locationDropdownOpen = false;
	let locationSearchTerm = '';
	let filteredLocations = locations;

	// Filter locations based on search term
	$: {
		if (locationSearchTerm) {
			filteredLocations = locations.filter((location) =>
				location.toLowerCase().includes(locationSearchTerm.toLowerCase())
			);
		} else {
			filteredLocations = locations;
		}
	}

	const handleLocationSelect = (location: string) => {
		formData.location = location;
		locationSearchTerm = location;
		locationDropdownOpen = false;
	};

	const handleLocationInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		locationSearchTerm = target.value;
		formData.location = target.value;
		locationDropdownOpen = true;
	};

	const handleLocationFocus = () => {
		locationDropdownOpen = true;
	};

	const handleLocationBlur = () => {
		// Delay closing to allow for click on dropdown items
		setTimeout(() => {
			locationDropdownOpen = false;
		}, 200);
	};

	const handleInterestChange = (interest: string, checked: boolean) => {
		if (checked) {
			formData.interests = [...formData.interests, interest];
		} else {
			formData.interests = formData.interests.filter((i) => i !== interest);
		}
	};

	let toastMessage = '';
	let toastType: 'success' | 'error' | '' = '';
	let showToast = false;
	let submitting = false;

	const handleSubmit = async () => {
		// Simulate request delay
		toastMessage = '';
		toastType = '';
		showToast = false;
		submitting = true;

		try {
			// Simulate request (use await real API later)
			await new Promise((resolve) => setTimeout(resolve, 1000));

			toastMessage = 'Your request was submitted successfully!';
			toastType = 'success';
			showToast = true;
			submitting = false;
			formData = {
				fullName: '',
				email: '',
				phone: '',
				interests: [],
				ownsGold: '',
				providusAccount: '',
				location: ''
			};
			locationSearchTerm = '';

			// Close modal after short delay
			setTimeout(() => {
				closeJoinForm();
			}, 1500);

			setTimeout(() => (showToast = false), 3000);
		} catch (error) {
			toastMessage = 'Something went wrong. Please try again.';
			toastType = 'error';
			showToast = true;
			submitting = false;

			setTimeout(() => (showToast = false), 3000);
		}
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			closeJoinForm();
		}
	};
</script>

{#if showToast}
	<div
		class="fixed top-6 left-1/2 z-[9999] w-[90%] max-w-md -translate-x-1/2 transform rounded-xl px-6 py-4 text-sm font-normal text-black shadow-lg transition-all duration-300
		{toastType === 'success' ? 'bg-green-600' : ''}
		{toastType === 'error' ? 'bg-red-600' : ''}"
		in:fade
		out:fade
	>
		{toastMessage}
	</div>
{/if}

{#if $showJoinForm}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm"
		transition:fade={{ duration: 300 }}
		on:click={handleBackdropClick}
		role="dialog"
		aria-modal="true"
		aria-labelledby="form-title"
	>
		<!-- Form Container -->
		<div
			class="no-scrollbar fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto md:px-10 md:py-20"
			transition:fly={{ x: 300, duration: 400, easing: quintOut }}
		>
			<div
				class="w-full max-w-4xl border border-[#00000024] bg-[#F5F5F5] p-5 shadow-2xl md:rounded-2xl md:px-10 md:py-20 lg:py-10"
			>
				<!-- Close Button -->
				<div class="flex justify-end">
					<button
						on:click={closeJoinForm}
						class="group cursor-pointer rounded-full border border-[#838383] p-3 text-[#838383] transition-all duration-300 hover:scale-110 hover:border-black hover:text-black"
						aria-label="Close form"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<!-- Header -->
				<div class="mb-20 text-start">
					<h1
						id="form-title"
						class="mb-0 text-[42px] font-light tracking-tight text-black md:text-[64px]"
					>
						Join Ault
					</h1>
					<p class="text-lg text-[#5A5A5A] capitalize">The journey to more starts here</p>
				</div>

				<form on:submit|preventDefault={handleSubmit} class="space-y-8 text-black" autocomplete="off">
					<!-- Personal Information -->
					<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
						<div class="form-group">
							<label for="fullName" class="mb-2 block text-[14px] font-normal">Full Name</label>
							<input
								id="fullName"
								type="text"
								bind:value={formData.fullName}
								placeholder="Gabriel David"
								required
								class="w-full border border-[#0000002E] bg-[#F4F3F1] px-4 py-3 text-black placeholder-[#00000075] transition-all duration-300 focus:border-[#000] focus:ring-1 focus:ring-[#000]"
							/>
						</div>
						<div class="form-group">
							<label for="email" class="mb-2 block text-sm font-normal">Email Address</label>
							<input
								id="email"
								type="email"
								bind:value={formData.email}
								placeholder="david@blank.design"
								required
								class="w-full border border-[#0000002E] bg-[#F4F3F1] px-4 py-3 text-black placeholder-[#00000075] transition-all duration-300 focus:border-[#000] focus:ring-1 focus:ring-[#000]"
							/>
						</div>
						<div class="form-group lg:col-span-1">
							<label for="phone" class="mb-2 block text-sm font-normal">Phone Number</label>
							<input
								id="phone"
								type="tel"
								bind:value={formData.phone}
								placeholder="+444 1234 567890"
								required
								class="w-full border border-[#0000002E] bg-[#F4F3F1] px-4 py-3 text-black placeholder-[#00000075] transition-all duration-300 focus:border-[#000] focus:ring-1 focus:ring-[#000]"
							/>
						</div>
						<!-- Location Dropdown -->
						<div class="form-group relative z-[999] lg:col-span-1">
							<label for="location" class="mb-2 block text-sm font-normal">Location</label>
							<div class="relative z-[999]">
								<input
									id="location"
									type="text"
									value={locationSearchTerm}
									on:input={handleLocationInput}
									on:focus={handleLocationFocus}
									on:blur={handleLocationBlur}
									placeholder="Search for your city..."
									required
									autocomplete="new-password"
									class="w-full border border-[#0000002E] bg-[#F4F3F1] px-4 py-3 pr-10 text-black placeholder-[#00000075] transition-all duration-300 focus:border-[#000] focus:ring-1 focus:ring-[#000]"
								/>
								<!-- Dropdown Arrow -->
								<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 z-10">
									<svg
										class="h-4 w-4 text-gray-500 transition-transform duration-200 {locationDropdownOpen
											? 'rotate-180'
											: ''}"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>

								<!-- Dropdown List -->
								{#if locationDropdownOpen && filteredLocations.length > 0}
									<div
										class="absolute z-[999] mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-[#0000002E] bg-white shadow-lg"
										transition:fade={{ duration: 200 }}
									>
										{#each filteredLocations.slice(0, 50) as location}
											<button
												type="button"
												class="cursor-pointer w-full border-b border-gray-100 px-4 py-3 text-left text-black transition-colors duration-200 last:border-b-0 hover:bg-gray-100"
												on:click={() => handleLocationSelect(location)}
											>
												{location}
											</button>
										{/each}
									</div>
								{/if}

								<!-- No results message -->
								{#if locationDropdownOpen && filteredLocations.length === 0 && locationSearchTerm}
									<div
										class="absolute z-[999] mt-1 w-full rounded-lg border border-[#0000002E] bg-white px-4 py-3 text-gray-500 shadow-lg"
										transition:fade={{ duration: 200 }}
									>
										No locations found. You can still type your custom location.
									</div>
								{/if}
							</div>
						</div>
					</div>

					<!-- Interests Section -->
					<div class="space-y-4">
						<div class="flex flex-col gap-2 sm:flex-row sm:items-center">
							<h3 class="text-sm font-normal">
								What are you interested in?
								<span class="pl-2 text-sm text-[#161616CC]">(Select all that apply)</span>
							</h3>
						</div>
						<div class="ml-0 grid grid-cols-1 gap-3 sm:ml-6 sm:grid-cols-2">
							{#each interests as interest}
								<label class="group flex cursor-pointer items-center gap-3">
									<input
										type="checkbox"
										class="custom-checkbox"
										on:change={(e) =>
											handleInterestChange(interest, (e.target as HTMLInputElement).checked)}
									/>
									<span
										class="text-sm text-[#161616CC] transition-colors duration-300 group-hover:text-black"
									>
										{interest}
									</span>
								</label>
							{/each}
						</div>
					</div>

					<!-- Radio Button Sections -->
					<div class="space-y-6">
						<!-- Gold Ownership -->
						<div class="space-y-3">
							<h3 class="text-sm font-normal">Do You Already Own Physical or Tokenized Gold?</h3>
							<div class="ml-0 flex gap-8 sm:ml-6">
								<label class="group flex cursor-pointer items-center gap-2">
									<input
										type="radio"
										name="ownsGold"
										value="yes"
										bind:group={formData.ownsGold}
										class="custom-radio"
									/>
									<span
										class="text-sm text-[#161616CC] transition-colors duration-300 group-hover:text-black"
										>Yes</span
									>
								</label>
								<label class="group flex cursor-pointer items-center gap-2">
									<input
										type="radio"
										name="ownsGold"
										value="no"
										bind:group={formData.ownsGold}
										class="custom-radio"
									/>
									<span
										class="text-sm text-[#161616CC] transition-colors duration-300 group-hover:text-black"
										>No</span
									>
								</label>
							</div>
						</div>

						<!-- Providus Account -->
						<div class="space-y-3">
							<h3 class="text-sm font-normal">Do You Have A ProvidusBank Account?</h3>
							<div class="ml-0 flex gap-8 sm:ml-6">
								<label class="group flex cursor-pointer items-center gap-2">
									<input
										type="radio"
										name="providusAccount"
										value="yes"
										bind:group={formData.providusAccount}
										class="custom-radio"
									/>
									<span
										class="text-sm text-[#161616CC] transition-colors duration-300 group-hover:text-black"
										>Yes</span
									>
								</label>
								<label class="group flex cursor-pointer items-center gap-2">
									<input
										type="radio"
										name="providusAccount"
										value="no"
										bind:group={formData.providusAccount}
										class="custom-radio"
									/>
									<span
										class="text-sm text-[#161616CC] transition-colors duration-300 group-hover:text-black"
										>No</span
									>
								</label>
							</div>
						</div>
					</div>

					<!-- Submit Button -->
					<div class="flex justify-start pt-6">
						<button
							type="submit"
							class="w-full max-w-md transform rounded-[10px] bg-[#000] px-8 py-4 font-normal tracking-wide text-white uppercase transition-all duration-300 hover:scale-105 hover:bg-[#FFD700] hover:text-black hover:shadow-lg focus:ring-2 focus:ring-[#000] focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
						>
							{!submitting ? 'Request Your Invitation' : 'Submitting...'}
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}

<style>
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	.form-group {
		animation: fadeInSide 0.6s ease-out forwards;
	}

	@keyframes fadeInSide {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	/* Stagger animation for form groups */
	.form-group:nth-child(1) {
		animation-delay: 0.1s;
	}
	.form-group:nth-child(2) {
		animation-delay: 0.2s;
	}
	.form-group:nth-child(3) {
		animation-delay: 0.3s;
	}

	.custom-checkbox,
	.custom-radio {
		width: 1rem;
		height: 1rem;
		border: 2px solid #00000075;
		border-radius: 0.25rem;
		background-color: transparent;
		cursor: pointer;
		transition: all 0.3s ease;
		position: relative;
		z-index: 1;
	}

	.custom-checkbox:checked,
	.custom-radio:checked {
		background-color: #000;
		border-color: #000;
	}

	.custom-checkbox:checked::before,
	.custom-radio:checked::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 0.25rem;
		background-color: #000;
		border: 1px solid #000 !important;
		z-index: 0;
	}

	.custom-checkbox:checked::after,
	.custom-radio:checked::after {
		content: '';
		position: absolute;
		top: 1px;
		left: 4px;
		width: 4px;
		height: 8px;
		border: solid white;
		border-width: 0 2px 2px 0;
		transform: rotate(45deg);
		z-index: 2;
	}
</style>
