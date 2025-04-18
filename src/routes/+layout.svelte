<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	// Check if we're on the home page
	let isHomePage = $derived($page.url.pathname === '/');
</script>

<div class="bg-base-100 text-base-content min-h-screen">
	{#if !isHomePage}
		<Navbar />
	{/if}
	<main>
		{@render children()}
	</main>
</div>
