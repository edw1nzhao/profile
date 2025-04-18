<script>
	import { onMount } from 'svelte';
	import { animate, stagger } from 'animejs';
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

	onMount(() => {
		// Animate contact sections
		animate('.contact-section', {
			opacity: [0, 1],
			translateY: [20, 0],
			delay: stagger(150),
			duration: 600,
			easing: 'easeOutExpo'
		});
	});

	// Form handling
	let name = '';
	let email = '';
	let subject = '';
	let message = '';
	let submitting = false;
	let submitted = false;
	let error = '';

	function handleSubmit() {
		submitting = true;
		error = '';

		// Simulate form submission
		setTimeout(() => {
			submitting = false;
			submitted = true;
		}, 1500);
	}
</script>

<div class="container mx-auto px-4 py-12">
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold">Get In Touch</h1>
		<p class="mx-auto max-w-2xl text-xl opacity-80">
			Have a question or want to discuss a project? I'd love to hear from you. I'm particularly interested in
			connecting with fellow tech enthusiasts and entrepreneurs for collaboration on innovative projects,
			especially those involving open source. Fill out the form below or use one of the contact methods.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
		<!-- Contact Information -->
		<div class="contact-section lg:col-span-1">
			<div class="rounded-xl bg-base-200 p-8">
				<h2 class="mb-6 text-2xl font-semibold">Contact Information</h2>

				<div class="mb-6 flex items-start gap-4">
					<div class="rounded-full bg-primary p-3 text-primary-content">
						<IconEmail class="h-6 w-6" />
					</div>
					<div>
						<h3 class="text-lg font-medium">Email</h3>
						<p class="opacity-80">contact@edwinzhao.com</p>
					</div>
				</div>

				<div class="mb-8 flex items-start gap-4">
					<div class="rounded-full bg-primary p-3 text-primary-content">
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
						class="rounded-full bg-base-300 p-3 transition-colors hover:bg-primary"
					>
						<IconGithub class="h-6 w-6" />
					</a>
				</div>
			</div>
		</div>

		<!-- Contact Form -->
		<div class="contact-section lg:col-span-2">
			<div class="rounded-xl bg-base-200 p-8">
				<h2 class="mb-6 text-2xl font-semibold">Send Me a Message</h2>

				{#if submitted}
					<div class="rounded-lg bg-success p-6 text-center text-success-content">
						<h3 class="mb-2 text-xl font-medium">Thank you for your message!</h3>
						<p>I'll get back to you as soon as possible.</p>
						<button
							on:click={() => (submitted = false)}
							class="mt-4 btn btn-primary"
							>Send Another Message</button
						>
					</div>
				{:else}
					<form on:submit|preventDefault={handleSubmit} class="space-y-6">
						<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div>
								<label for="name" class="mb-2 block text-sm font-medium">Your Name</label>
								<input
									type="text"
									id="name"
									bind:value={name}
									required
									class="w-full rounded-lg border border-base-300 bg-base-300 px-4 py-2 text-base-content"
								/>
							</div>
							<div>
								<label for="email" class="mb-2 block text-sm font-medium">Your Email</label>
								<input
									type="email"
									id="email"
									bind:value={email}
									required
									class="w-full rounded-lg border border-base-300 bg-base-300 px-4 py-2 text-base-content"
								/>
							</div>
						</div>

						<div>
							<label for="subject" class="mb-2 block text-sm font-medium">Subject</label>
							<input
								type="text"
								id="subject"
								bind:value={subject}
								required
								class="w-full rounded-lg border border-base-300 bg-base-300 px-4 py-2 text-base-content"
							/>
						</div>

						<div>
							<label for="message" class="mb-2 block text-sm font-medium">Message</label>
							<textarea
								id="message"
								bind:value={message}
								rows="6"
								required
								class="w-full rounded-lg border border-base-300 bg-base-300 px-4 py-2 text-base-content"
							></textarea>
						</div>

						{#if error}
							<div class="rounded-lg bg-error p-3 text-sm text-error-content">{error}</div>
						{/if}

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

	<!-- FAQ Section -->
	<div class="contact-section mt-16">
		<h2 class="mb-8 text-center text-2xl font-semibold">Frequently Asked Questions</h2>

		<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
			<div class="rounded-xl bg-base-200 p-6">
				<h3 class="mb-3 text-xl font-medium">What services do you offer?</h3>
				<p class="opacity-80">
					I specialize in cloud infrastructure design, DevOps automation, and improving developer
					experience. This includes setting up CI/CD pipelines, implementing infrastructure as code,
					containerization, and cloud architecture consulting.
				</p>
			</div>

			<div class="rounded-xl bg-base-200 p-6">
				<h3 class="mb-3 text-xl font-medium">How quickly do you respond to inquiries?</h3>
				<p class="opacity-80">
					I typically respond to all inquiries within 24-48 hours during business days. For urgent
					matters, please indicate so in your message subject.
				</p>
			</div>

			<div class="rounded-xl bg-base-200 p-6">
				<h3 class="mb-3 text-xl font-medium">Do you work with clients remotely?</h3>
				<p class="opacity-80">
					Yes, I work with clients globally and have experience collaborating with distributed teams
					across different time zones. I'm comfortable with various remote collaboration tools.
				</p>
			</div>

			<div class="rounded-xl bg-base-200 p-6">
				<h3 class="mb-3 text-xl font-medium">What is your availability for new projects?</h3>
				<p class="opacity-80">
					My availability varies throughout the year. Please reach out with details about your project,
					and I'll let you know my current availability and how I might be able to help.
				</p>
			</div>

			<div class="rounded-xl bg-base-200 p-6">
				<h3 class="mb-3 text-xl font-medium">Are you open to collaboration?</h3>
				<p class="opacity-80">
					Absolutely! I'm always excited to collaborate on interesting tech projects or entrepreneurial ventures.
					Whether you're looking to build something new, contribute to open source, or just exchange ideas,
					I welcome connections with like-minded individuals passionate about technology and innovation.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.contact-section {
		opacity: 0;
	}
</style>
