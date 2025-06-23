<script>
	import FooterLogo from '$lib/assets/footer-logo.png';
</script>

<!-- ============================Footer section======================== -->
<footer
	class="relative mx-auto flex min-h-auto max-w-[1728px] flex-col items-center gap-3 overflow-x-hidden px-5 py-10 md:gap-10 md:py-20 lg:px-20 xl:px-[150px]"
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
	<div class="mt-10 w-full opacity-0">
		<img src={FooterLogo} alt="footer-logo" class="w-full" />
	</div>
	<div class="absolute right-0 bottom-0 left-0 w-full p-5 lg:p-15">
		<img src={FooterLogo} alt="footer-logo" class="w-full" />
	</div>
</footer>
