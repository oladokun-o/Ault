<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<!-- navbar -->
<Navbar />

{@render children()}
