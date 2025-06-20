<script>
	import Footer from '$lib/components/Footer.svelte';
	import JoinAultForm from '$lib/components/JoinAultForm.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<!-- navbar -->
<Navbar />

<!-- Join Ault Form Component -->
<JoinAultForm />

{@render children()}

<Footer />