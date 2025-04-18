<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { m } from '$lib/paraglide/messages.js';
</script>

<h1>{m.hello_world({ name: 'SvelteKit User' })}</h1>
<div>
	<button class="btn btn-sm btn-primary" onclick={() => setLocale('en')}>en</button>
	<button class="btn btn-sm btn-primary" onclick={() => setLocale('ch')}>ch</button>
	<button class="btn btn-sm btn-primary" onclick={() => setLocale('jp')}>jp</button>
	<button class="btn btn-sm btn-primary" onclick={() => setLocale('kr')}>kr</button>
</div>
<p>
	If you use VSCode, install the <a
		href="https://marketplace.visualstudio.com/items?itemName=inlang.vs-code-extension"
		target="_blank">Sherlock i18n extension</a
	> for a better i18n experience.
</p>
