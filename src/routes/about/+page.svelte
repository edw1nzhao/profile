<script>
	import { onMount } from 'svelte';
	import { animate, stagger } from 'animejs';

	onMount(() => {
		// Animate content sections
		animate('.animate-item', {
			opacity: [0, 1],
			translateY: [20, 0],
			delay: stagger(150),
			duration: 600,
			easing: 'easeOutExpo'
		});
	});
</script>

<div class="container mx-auto px-4 py-12">
	<div class="animate-item mb-8">
		<h1 class="mb-6 text-4xl font-bold">About Me</h1>
		<div class="prose prose-lg prose-invert max-w-none">
			<p>
				I'm Edwin Zhao, a passionate infrastructure engineer dedicated to empowering developers and
				optimizing workflows. With a background in cloud architecture and DevOps practices, I focus on
				creating systems that enable teams to deliver their best work.
			</p>
			<p>
				My journey in technology began with a fascination for how complex systems work together. This
				curiosity led me to specialize in building infrastructure that bridges the gap between
				development and operations, reducing friction and enabling faster, more reliable deployments.
			</p>
		</div>
	</div>

	<div class="animate-item mb-8">
		<h2 class="mb-4 text-2xl font-semibold">My Approach</h2>
		<div class="prose prose-lg prose-invert max-w-none">
			<p>
				I believe that great infrastructure should be invisible—it should just work. My approach
				combines technical expertise with a deep understanding of developer workflows to create
				solutions that:
			</p>
			<ul>
				<li>Reduce cognitive load on development teams</li>
				<li>Automate repetitive tasks and eliminate bottlenecks</li>
				<li>Provide robust, self-healing systems that require minimal maintenance</li>
				<li>Scale seamlessly to accommodate growth</li>
			</ul>
		</div>
	</div>

	<div class="animate-item mb-8">
		<h2 class="mb-4 text-2xl font-semibold">Technical Expertise</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			<div class="rounded-lg bg-base-200 p-4">
				<h3 class="mb-2 text-xl font-medium">Cloud Platforms</h3>
				<p>AWS, Google Cloud Platform, Azure</p>
			</div>
			<div class="rounded-lg bg-base-200 p-4">
				<h3 class="mb-2 text-xl font-medium">Infrastructure as Code</h3>
				<p>Terraform, CloudFormation, Pulumi</p>
			</div>
			<div class="rounded-lg bg-base-200 p-4">
				<h3 class="mb-2 text-xl font-medium">Containerization</h3>
				<p>Docker, Kubernetes, ECS</p>
			</div>
			<div class="rounded-lg bg-base-200 p-4">
				<h3 class="mb-2 text-xl font-medium">CI/CD</h3>
				<p>GitHub Actions, Jenkins, CircleCI</p>
			</div>
			<div class="rounded-lg bg-base-200 p-4">
				<h3 class="mb-2 text-xl font-medium">Monitoring & Observability</h3>
				<p>Prometheus, Grafana, Datadog</p>
			</div>
			<div class="rounded-lg bg-base-200 p-4">
				<h3 class="mb-2 text-xl font-medium">Programming</h3>
				<p>Python, Go, JavaScript/TypeScript</p>
			</div>
		</div>
	</div>

	<div class="animate-item">
		<h2 class="mb-4 text-2xl font-semibold">Let's Connect</h2>
		<p class="mb-4">
			I'm always interested in discussing new challenges and opportunities in the infrastructure and
			developer experience space.
		</p>
		<a href="/contact" class="btn btn-primary"
			>Get in Touch</a
		>
	</div>
</div>

<style>
	.animate-item {
		opacity: 0;
	}
</style>
