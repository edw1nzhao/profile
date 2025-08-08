<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	// Check if we're on the home page
	let isHomePage = $derived($page.url.pathname === '/');
</script>

<div class="bg-base-100 text-base-content min-h-screen relative">
	<div class="absolute inset-0 bg-gradient-to-br from-base-100 via-base-100 to-primary/5 pointer-events-none -z-10" />
	{#if !isHomePage}
		<Navbar />
	{/if}
	<main>
		{@render children()}
	</main>
</div>
