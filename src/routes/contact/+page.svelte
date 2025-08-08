<script>
	import { onMount } from 'svelte';
	import { animate, stagger } from 'animejs';
	import { enhance } from '$app/forms';
	// @ts-ignore
	import IconEmail from 'virtual:icons/mdi/email';
	// @ts-ignore
	import IconPhone from 'virtual:icons/mdi/phone';
	// @ts-ignore
	import IconLocation from 'virtual:icons/mdi/map-marker';
	// @ts-ignore
	import IconLinkedin from 'virtual:icons/mdi/linkedin';
	// @ts-ignore
	import IconGithub from 'virtual:icons/mdi/github';
	// @ts-ignore
	import IconTwitter from 'virtual:icons/mdi/twitter';

	export let form;

	onMount(() => {
		animate('.contact-section', {
			opacity: [0, 1],
			translateY: [20, 0],
			delay: stagger(150),
			duration: 600,
			easing: 'easeOutExpo'
		});
	});

	let name = '';
	let email = '';
	let subject = '';
	let message = '';
	let submitting = false;
</script>

<div class="container mx-auto px-4 py-12">
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold">Get In Touch</h1>
		<p class="mx-auto max-w-2xl text-xl opacity-80">
			Have a question or want to discuss a project? I'd love to hear from you. I'm particularly
			interested in connecting with fellow tech enthusiasts and entrepreneurs for collaboration on
			innovative projects, especially those involving open source. Fill out the form below or use
			one of the contact methods.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
		<div class="contact-section lg:col-span-1">
			<div class="bg-base-200 rounded-xl p-8">
				<h2 class="mb-6 text-2xl font-semibold">Contact Information</h2>

				<div class="mb-6 flex items-start gap-4">
					<div class="bg-primary text-primary-content rounded-full p-3">
						<IconEmail class="h-6 w-6" />
					</div>
					<div>
						<h3 class="text-lg font-medium">Email</h3>
						<p class="opacity-80">contact@edwinzhao.com</p>
					</div>
				</div>

				<div class="mb-8 flex items-start gap-4">
					<div class="bg-primary text-primary-content rounded-full p-3">
						<IconLocation class="h-6 w-6" />
					</div>
					<div>
						<h3 class="text-lg font-medium">Location</h3>
						<p class="opacity-80">USA</p>
					</div>
				</div>

				<h3 class="mb-4 text-lg font-medium">Connect with me</h3>
				<div class="flex gap-4">
					<a
						href="https://github.com/edw1nzhao"
						target="_blank"
						rel="noopener noreferrer"
						class="bg-base-300 hover:bg-primary rounded-full p-3 transition-colors"
					>
						<IconGithub class="h-6 w-6" />
					</a>
				</div>
			</div>
		</div>

		<div class="contact-section lg:col-span-2">
			<div class="bg-base-200 rounded-xl p-8">
				<h2 class="mb-6 text-2xl font-semibold">Send Me a Message</h2>

				{#if form?.success}
					<div class="bg-success text-success-content rounded-lg p-6 text-center">
						<h3 class="mb-2 text-xl font-medium">Thank you for your message!</h3>
						<p>I'll get back to you as soon as possible.</p>
						<button on:click={() => (form = null)} class="btn btn-primary mt-4"
							>Send Another Message</button
						>
					</div>
				{:else}
					<form
						method="POST"
						use:enhance={() => {
							submitting = true;

							return ({ update }) => {
								submitting = false;
								update();
							};
						}}
						class="space-y-6"
					>
						<!-- Honeypot field to catch bots -->
						<div class="hidden" aria-hidden="true">
							<label for="website">Website (Leave this empty)</label>
							<input type="text" id="website" name="website" tabindex="-1" autocomplete="off" />
						</div>

						<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div>
								<label for="name" class="mb-2 block text-sm font-medium">Your Name</label>
								<input
									type="text"
									id="name"
									name="name"
									value={form?.name || name}
									required
									class="border-base-300 bg-base-300 text-base-content w-full rounded-lg border px-4 py-2"
								/>
							</div>
							<div>
								<label for="email" class="mb-2 block text-sm font-medium">Your Email</label>
								<input
									type="email"
									id="email"
									name="email"
									value={form?.email || email}
									required
									class="border-base-300 bg-base-300 text-base-content w-full rounded-lg border px-4 py-2"
								/>
							</div>
						</div>

						<div>
							<label for="subject" class="mb-2 block text-sm font-medium">Subject</label>
							<input
								type="text"
								id="subject"
								name="subject"
								value={form?.subject || subject}
								required
								class="border-base-300 bg-base-300 text-base-content w-full rounded-lg border px-4 py-2"
							/>
						</div>

						<div>
							<label for="message" class="mb-2 block text-sm font-medium">Message</label>
							<textarea
								id="message"
								name="message"
								rows="6"
								required
								class="border-base-300 bg-base-300 text-base-content w-full rounded-lg border px-4 py-2"
								>{form?.message || message}</textarea
							>
						</div>

						{#if form?.error}
							<div class="bg-error text-error-content rounded-lg p-3 text-sm">{form.error}</div>
						{/if}

						<!-- Cloudflare Turnstile widget -->
						<div
							class="cf-turnstile"
							data-sitekey="0x4AAAAAABpfW6BzEPdL1NRn"
							data-theme="auto"
						></div>

						<button
							type="submit"
							disabled={submitting}
							class="btn btn-primary w-full disabled:opacity-70"
						>
							{#if submitting}
								<span>Sending...</span>
							{:else}
								<span>Send Message</span>
							{/if}
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.contact-section {
		opacity: 0;
	}
</style>
