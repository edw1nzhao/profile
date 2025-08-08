<script>
	import { onMount } from 'svelte';
	import { animate, stagger } from 'animejs';

	onMount(() => {
		// Animate content
		animate('.animate-item', {
			opacity: [0, 1],
			translateY: [20, 0],
			delay: stagger(150),
			duration: 600,
			easing: 'easeOutExpo'
		});
	});

	// To restore the original coding blog content, uncomment the section below and comment out the "Under Construction" section

	// Sample blog posts data (commented out)
	/*
	const posts = [
		{
			id: 1,
			title: 'Building Developer Portals for Engineering Excellence',
			excerpt: 'How we implemented a developer portal that serves over 100 developers with 50-100 daily automation triggers, improving productivity and standardization.',
			date: 'April 10, 2025',
			category: 'DevEx',
			image: 'https://placehold.co/600x400/252525/FFFFFF/png?text=DevPortals'
		},
		{
			id: 2,
			title: 'Reducing Pipeline Execution Time from Days to Hours',
			excerpt: 'A technical deep dive into how we transformed our deployment infrastructure to cut execution time by 80% and improved developer feedback loops.',
			date: 'March 25, 2025',
			category: 'CI/CD',
			image: 'https://placehold.co/600x400/252525/FFFFFF/png?text=Pipelines'
		},
		{
			id: 3,
			title: 'Implementing Istio for Secure Kubernetes Service Mesh',
			excerpt: 'Practical guide to setting up Istio with NodePort/LoadBalancer configurations for secure and reliable service-to-service communication.',
			date: 'March 12, 2025',
			category: 'Kubernetes',
			image: 'https://placehold.co/600x400/252525/FFFFFF/png?text=Istio'
		},
		{
			id: 4,
			title: 'Metrics-Based Deployment with OpenTelemetry and Datadog',
			excerpt: 'How to establish a data-driven deployment approach using modern observability tools to ensure reliability and performance.',
			date: 'February 28, 2025',
			category: 'Observability',
			image: 'https://placehold.co/600x400/252525/FFFFFF/png?text=Telemetry'
		},
		{
			id: 5,
			title: 'AWS Serverless Architecture with SNS, SQS, and Kinesis',
			excerpt: 'Designing cost-effective, scalable systems using AWS serverless technologies and optimized DynamoDB indexing strategies.',
			date: 'February 15, 2025',
			category: 'AWS',
			image: 'https://placehold.co/600x400/252525/FFFFFF/png?text=Serverless'
		},
		{
			id: 6,
			title: 'Technical Mentorship Frameworks That Actually Work',
			excerpt: 'How we created a mentorship program that achieved 80% adoption and reduced onboarding time from months to weeks.',
			date: 'January 30, 2025',
			category: 'Leadership',
			image: 'https://placehold.co/600x400/252525/FFFFFF/png?text=Mentorship'
		}
	];
	*/
</script>

<div class="container mx-auto px-4 py-12">
	<!-- Under Construction Section -->
	<div class="flex flex-col items-center justify-center py-16 text-center">
		<div class="animate-item mb-8">
			<h1 class="mb-6 text-4xl font-bold">Cloud Engineering & Developer Experience</h1>
			<div class="mx-auto mb-8 h-32 w-32">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-primary h-full w-full"
				>
					<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
				</svg>
			</div>
			<div class="animate-item bg-base-200 rounded-xl p-8">
				<h2 class="mb-4 text-2xl font-semibold">Blog Coming Soon</h2>
				<p class="mb-6 text-xl opacity-80">
					I'm currently working on some exciting technical content to share with you.
				</p>
				<p class="opacity-70">
					Check back soon for articles on cloud architecture, developer experience, and platform
					engineering.
				</p>
				<div class="mt-8">
					<a href="/about" class="btn btn-primary">Learn More About Me</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Original Coding Blog Content (Commented Out) -->
	<!--
	<div class="mb-12">
		<h1 class="mb-6 text-4xl font-bold">Cloud Engineering & Developer Experience</h1>
		<p class="text-xl opacity-80">
			Technical insights, case studies, and practical guides on platform engineering, cloud architecture, and
			creating exceptional developer experiences.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		<div
			class="bento-item col-span-1 overflow-hidden rounded-xl bg-base-200 shadow-lg transition-all hover:shadow-xl md:col-span-2"
		>
			<div class="relative">
				<img
					src={posts[0].image}
					alt={posts[0].title}
					class="h-64 w-full object-cover object-center"
				/>
				<div class="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-content">
					{posts[0].category}
				</div>
			</div>
			<div class="p-6">
				<p class="mb-2 text-sm opacity-70">{posts[0].date}</p>
				<h2 class="mb-3 text-2xl font-bold">{posts[0].title}</h2>
				<p class="mb-4 opacity-80">{posts[0].excerpt}</p>
				<a
					href={`/coding/${posts[0].id}`}
					class="btn btn-primary btn-sm"
					>Read More</a
				>
			</div>
		</div>

		{#each posts.slice(1) as post}
			<div
				class="bento-item overflow-hidden rounded-xl bg-base-200 shadow-lg transition-all hover:shadow-xl"
			>
				<div class="relative">
					<img src={post.image} alt={post.title} class="h-48 w-full object-cover object-center" />
					<div class="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-content">
						{post.category}
					</div>
				</div>
				<div class="p-6">
					<p class="mb-2 text-sm opacity-70">{post.date}</p>
					<h2 class="mb-3 text-xl font-bold">{post.title}</h2>
					<p class="mb-4 opacity-80 line-clamp-2">{post.excerpt}</p>
					<a
						href={`/coding/${post.id}`}
						class="btn btn-primary btn-sm"
						>Read More</a
					>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-16 rounded-xl bg-base-200 p-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="mb-4 text-2xl font-bold">Subscribe to My Technical Newsletter</h2>
			<p class="mb-6 opacity-80">
				Get practical insights on cloud infrastructure, developer experience, and platform engineering
				delivered straight to your inbox. No fluff, just actionable technical content.
			</p>
			<form class="flex flex-col gap-4 sm:flex-row">
				<input
					type="email"
					placeholder="Your email address"
					class="flex-grow rounded-lg border border-base-300 bg-base-300 px-4 py-2 text-base-content"
				/>
				<button
					type="submit"
					class="btn btn-primary"
					>Subscribe</button
				>
			</form>
		</div>
	</div>
	-->
</div>

<style>
	.animate-item {
		opacity: 0;
	}

	/* Add line-clamp utility if not available in your Tailwind config */
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
