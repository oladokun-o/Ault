<script>
	import Footer from '$lib/components/Footer.svelte';
	import JoinAultForm from '$lib/components/JoinAultForm.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();


  import { afterNavigate } from '$app/navigation';

  afterNavigate(({ to }) => {
    if (to?.url.pathname === '/insights') {
      // Temporarily turn off smooth scroll
      document.documentElement.style.scrollBehavior = 'auto';
      
      // Scroll instantly
      window.scrollTo(0, 0);
      
      // Wait a bit longer before restoring smooth scroll to ensure it's stable
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 50); // 50ms works more reliably than requestAnimationFrame
    }
  });
	
</script>

<!-- navbar -->
<Navbar />

<!-- Join Ault Form Component -->
<JoinAultForm />

{@render children()}

<Footer />