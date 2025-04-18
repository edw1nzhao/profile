<script>
	import { onMount } from 'svelte';
	import { animate, stagger } from 'animejs';

	onMount(() => {
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
				I'm Edwin Zhao, a senior technical leader with extensive experience building large-scale
				cloud and distributed systems. I'm passionate about advanced CI/CD, developer experience,
				and cost optimization. My focus is on aligning technology strategy with business needs
				through modern platform engineering and cross-functional collaboration.
			</p>
			<p>
				With a background in both computer science and learning sciences, I bring a unique
				perspective to technical leadership. My experience spans from implementing developer portals
				and automation suites to modernizing legacy systems and optimizing cloud infrastructure. I'm
				dedicated to creating systems that enable teams to deliver high-quality software faster and
				more reliably.
			</p>
			<p>
				I'm a strong advocate for open source software and believe in the power of community-driven
				development. This philosophy has shaped my approach to building systems that are not only
				efficient but also transparent and accessible.
			</p>
			<p>
				Beyond my technical work, I'm a former NCAA Division 1 swimmer and 2-time Olympic Trials
				competitor, bringing the same discipline and dedication to my engineering career as I did to
				competitive swimming.
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
				<li>Leverage and contribute to open source technologies</li>
			</ul>
		</div>
	</div>

	<div class="animate-item mb-8">
		<h2 class="mb-4 text-2xl font-semibold">Human-Centered Technology</h2>
		<div class="prose prose-lg prose-invert max-w-none">
			<p>
				My background in learning sciences and human-computer interaction creates a unique harmony
				with my technical expertise. In today's corporate environment of tight deadlines and
				performance metrics, I believe we often overlook the human element of
				technology—particularly when it comes to developer experience.
			</p>
			<p>
				I approach platform engineering with the mindset that developers are end users deserving of
				thoughtful, well-designed experiences. By applying research-backed HCI strategies, I create
				systems that acknowledge the diversity of developer workflows, skill levels, and
				preferences. This human-centered approach leads to:
			</p>
			<ul>
				<li>More intuitive developer tooling that reduces cognitive load</li>
				<li>Platforms that adapt to different learning styles and experience levels</li>
				<li>Documentation and interfaces designed with empathy and accessibility in mind</li>
				<li>Systems that empower rather than constrain creative problem-solving</li>
			</ul>
			<p>
				By bridging the gap between human factors research and technical implementation, I help
				organizations build infrastructure that not only meets business objectives but genuinely
				enhances the developer experience—ultimately leading to higher quality software, faster
				delivery, and more satisfied engineering teams.
			</p>
		</div>
	</div>

	<div class="animate-item mb-8">
		<h2 class="mb-4 text-2xl font-semibold">Technical Expertise</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			<div class="bg-base-200 rounded-lg p-4">
				<h3 class="mb-2 text-xl font-medium">Cloud & Infrastructure</h3>
				<p>AWS, GCP, Azure, Kubernetes, Docker, Terraform, Helm, ArgoCD, Flux</p>
			</div>
			<div class="bg-base-200 rounded-lg p-4">
				<h3 class="mb-2 text-xl font-medium">DevOps & Automation</h3>
				<p>GitHub Actions, GitLab CI, Harness, Octopus, Bash, TypeScript, Go</p>
			</div>
			<div class="bg-base-200 rounded-lg p-4">
				<h3 class="mb-2 text-xl font-medium">Programming & Tools</h3>
				<p>Go, Java, TypeScript, React/React Native, Svelte, Tailwind</p>
			</div>
			<div class="bg-base-200 rounded-lg p-4">
				<h3 class="mb-2 text-xl font-medium">Databases & Storage</h3>
				<p>MongoDB, PostgreSQL, DynamoDB, Supabase</p>
			</div>
			<div class="bg-base-200 rounded-lg p-4">
				<h3 class="mb-2 text-xl font-medium">Monitoring & Observability</h3>
				<p>Prometheus, OpenTelemetry, Datadog, DynaTrace</p>
			</div>
			<div class="bg-base-200 rounded-lg p-4">
				<h3 class="mb-2 text-xl font-medium">Developer Experience</h3>
				<p>Developer Portals, Platform Engineering, Spotify Backstage, LaunchDarkly</p>
			</div>
		</div>
	</div>

	<div class="animate-item">
		<h2 class="mb-4 text-2xl font-semibold">Let's Connect</h2>
		<p class="mb-4">
			I'm always interested in discussing new challenges and opportunities in the infrastructure and
			developer experience space.
		</p>
		<a href="/contact" class="btn btn-primary">Get in Touch</a>
	</div>
</div>

<style>
	.animate-item {
		opacity: 0;
	}
</style>
