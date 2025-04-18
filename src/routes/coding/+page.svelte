<script>
	import { onMount } from 'svelte';
	import { animate, stagger } from 'animejs';

	// Sample blog posts data
	const posts = [
		{
			id: 1,
			title: 'Building Scalable Infrastructure with Terraform',
			excerpt: 'How to design and implement infrastructure that grows with your needs using Terraform modules and best practices.',
			date: 'April 10, 2025',
			category: 'Infrastructure',
			image: 'https://placehold.co/600x400/252525/FFFFFF/png?text=Terraform'
		},
		{
			id: 2,
			title: 'Optimizing CI/CD Pipelines for Speed and Reliability',
			excerpt: 'Techniques to make your continuous integration and deployment processes faster and more dependable.',
			date: 'March 25, 2025',
			category: 'DevOps',
			image: 'https://placehold.co/600x400/252525/FFFFFF/png?text=CI/CD'
		},
		{
			id: 3,
			title: 'Kubernetes: Beyond the Basics',
			excerpt: 'Advanced patterns and practices for managing complex Kubernetes deployments in production.',
			date: 'March 12, 2025',
			category: 'Containers',
			image: 'https://placehold.co/600x400/252525/FFFFFF/png?text=Kubernetes'
		},
		{
			id: 4,
			title: 'Monitoring as Code: The Next Evolution',
			excerpt: 'How to define and version your monitoring infrastructure alongside your application code.',
			date: 'February 28, 2025',
			category: 'Observability',
			image: 'https://placehold.co/600x400/252525/FFFFFF/png?text=Monitoring'
		},
		{
			id: 5,
			title: 'Serverless Architecture Patterns',
			excerpt: 'Exploring common patterns and anti-patterns when building serverless applications.',
			date: 'February 15, 2025',
			category: 'Cloud',
			image: 'https://placehold.co/600x400/252525/FFFFFF/png?text=Serverless'
		},
		{
			id: 6,
			title: 'The Future of Developer Experience',
			excerpt: 'Trends and predictions for how developer workflows will evolve in the coming years.',
			date: 'January 30, 2025',
			category: 'DevEx',
			image: 'https://placehold.co/600x400/252525/FFFFFF/png?text=DevEx'
		}
	];

	onMount(() => {
		// Animate the bento grid items
		animate('.bento-item', {
			opacity: [0, 1],
			scale: [0.95, 1],
			delay: stagger(100),
			duration: 600,
			easing: 'easeOutExpo'
		});
	});
</script>

<div class="container mx-auto px-4 py-12">
	<div class="mb-12">
		<h1 class="mb-6 text-4xl font-bold">Coding & Cloud Architecture</h1>
		<p class="text-xl opacity-80">
			Thoughts, tutorials, and insights on modern infrastructure, cloud architecture, and developer
			experience.
		</p>
	</div>

	<!-- Bento Box Grid Layout -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		<!-- Featured Post (Spans 2 columns) -->
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

		<!-- Regular Posts -->
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

	<!-- Newsletter Signup -->
	<div class="mt-16 rounded-xl bg-base-200 p-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="mb-4 text-2xl font-bold">Subscribe to My Newsletter</h2>
			<p class="mb-6 opacity-80">
				Get the latest articles, tutorials, and insights on cloud infrastructure and developer
				experience delivered straight to your inbox.
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
</div>

<style>
	.bento-item {
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
