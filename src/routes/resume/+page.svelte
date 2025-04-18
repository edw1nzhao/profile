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

	// To restore the original resume content, uncomment the section below and comment out the "Under Construction" section
</script>

<div class="container mx-auto px-4 py-12">
	<!-- Under Construction Section -->
	<!-- <div class="flex flex-col items-center justify-center py-16 text-center">
		<div class="animate-item mb-8">
			<h1 class="mb-6 text-4xl font-bold">Resume</h1>
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
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
				</svg>
			</div>
			<div class="animate-item bg-base-200 rounded-xl p-8">
				<h2 class="mb-4 text-2xl font-semibold">Under Construction</h2>
				<p class="mb-6 text-xl opacity-80">
					My resume is currently being updated with my latest experience and achievements.
				</p>
				<p class="opacity-70">
					Please check back soon or contact me directly for my most up-to-date information.
				</p>
				<div class="mt-8">
					<a href="/contact" class="btn btn-primary">Contact Me</a>
				</div>
			</div>
		</div>
	</div> -->

	<!-- Original Resume Content (Commented Out) -->

	<div class="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
		<div>
			<h1 class="mb-2 text-4xl font-bold">Edwin Zhao</h1>
			<p class="text-xl opacity-80">Cloud & Developer Experience Engineer</p>
		</div>
		<div class="flex gap-4">
			<!-- <a href="#" class="btn btn-neutral">Download PDF</a> -->
			<a href="/contact" class="btn btn-primary">Contact Me</a>
		</div>
	</div>

	<div class="resume-section bg-base-200 mb-12 rounded-xl p-8">
		<h2 class="mb-6 text-2xl font-semibold">Professional Summary</h2>
		<p class="opacity-80">
			Senior technical leader with extensive experience building large-scale cloud and distributed
			systems, focusing on advanced CI/CD, developer experience, and cost optimization. Skilled in
			aligning technology strategy with business needs through modern platform engineering and
			cross-functional collaboration.
		</p>
	</div>
	<!--
	<div class="resume-section bg-base-200 mb-12 rounded-xl p-8">
		<h2 class="mb-6 text-2xl font-semibold">Work Experience</h2>

		<div class="border-primary mb-8 border-l-4 pl-6">
			<ul class="mt-4 list-disc space-y-2 pl-5 opacity-80">
				<li>
					Provided senior-level cloud leadership, driving modern DevEx, advanced automation, and
					cloud-native best practices to accelerate software delivery.
				</li>
				<li>
					Directed a multi-year platform roadmap supporting developer-owned squads, automation
					priorities, and user-centered design.
				</li>
				<li>
					Led the implementation of a developer portal for over 100 developers with 50-100 daily
					automation triggers.
				</li>
				<li>
					Built an automation suite for operations, covering service creation, account setup, and
					container registry as code, with a security and compliance scorecard.
				</li>
				<li>
					Increased infrastructure-as-code adoption by 100%, enforcing standards on all new
					templates and automation.
				</li>
				<li>
					Established a metrics-based deployment approach, leveraging OpenTelemetry and Datadog RUM.
				</li>
				<li>
					Introduced a technical mentorship framework that achieved 80% adoption and shortened
					onboarding from 2 months to 3 weeks.
				</li>
			</ul>
		</div>

		<div class="border-primary mb-8 border-l-4 pl-6">
			<ul class="mt-4 list-disc space-y-2 pl-5 opacity-80">
				<li>
					Led engineering efforts for a 200+ engineer organization, introducing AWS automation,
					advanced CI/CD, and training programs.
				</li>
				<li>
					Modernized legacy systems for hundreds of APIs with AWS-based serverless architecture,
					incorporating SNS, SQS, Kinesis, and DynamoDB with optimized indexing, reducing costs by
					30%.
				</li>
				<li>
					Contributed to Kafka-based data processing workflows by provisioning and debugging
					infrastructure.
				</li>
				<li>
					Implemented Istio for secure Kubernetes service mesh routing, using NodePort/LoadBalancer
					configurations.
				</li>
				<li>
					Integrated Spotify Backstage with Terraform in GitLab CI/CD, improving pipeline
					consistency across teams.
				</li>
				<li>
					Created a centralized pipeline system that reduced time to production from 2 months to 1
					week, reducing developer effort by 88%.
				</li>
			</ul>
		</div>

		<div class="border-primary mb-8 border-l-4 pl-6">
			<ul class="mt-4 list-disc space-y-2 pl-5 opacity-80">
				<li>
					Led transformation of cloud deployment infrastructure, reducing pipeline execution time
					from 5 days to under 10 hours.
				</li>
				<li>
					Architected and implemented a centralized Terraform module system, enabling code reuse and
					establishing uniform practices across teams.
				</li>
			</ul>
		</div>

		<div class="border-primary border-l-4 pl-6">
			<ul class="mt-4 list-disc space-y-2 pl-5 opacity-80">
				<li>
					Developed a standardized module structure with GitHub Actions and Terraform, allowing for
					consistent, automated infrastructure and deployments across the organization.
				</li>
				<li>
					Built a back office application with React Native, TypeScript, and REST APIs, generating
					over $300K in new revenue.
				</li>
			</ul>
		</div>
	</div> -->

	<div class="resume-section bg-base-200 mb-12 rounded-xl p-8">
		<h2 class="mb-6 text-2xl font-semibold">Skills</h2>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<div>
				<h3 class="mb-3 text-xl font-medium">Cloud & Infrastructure</h3>
				<div class="flex flex-wrap gap-2">
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Kubernetes</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Docker</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Terraform</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">AWS (ECS, ECR)</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">GCP</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Azure</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Helm</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Kustomize</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">ArgoCD</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Flux</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Terratest</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Cloud Custodian</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Spotify Backstage</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Cloud Formation</span>
				</div>
			</div>

			<div>
				<h3 class="mb-3 text-xl font-medium">DevOps & Automation</h3>
				<div class="flex flex-wrap gap-2">
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Bash</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">TypeScript</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Go</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Git</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">GitHub Actions</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">GitLab CI</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Harness</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Octopus</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">DynaTrace</span>
				</div>
			</div>

			<div>
				<h3 class="mb-3 text-xl font-medium">Programming & Tools</h3>
				<div class="flex flex-wrap gap-2">
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Go</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Java</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">TypeScript</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">React / React Native</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Svelte</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Tailwind</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">MongoDB</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">PostgreSQL</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Linux</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">LaunchDarkly</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Okta</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Jira</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Prometheus</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">OpenTelemetry</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">DynamoDB</span>
					<span class="bg-base-300 rounded-full px-3 py-1 text-sm">Supabase</span>
				</div>
			</div>
		</div>
	</div>

	<div class="resume-section bg-base-200 mb-12 rounded-xl p-8">
		<h2 class="mb-6 text-2xl font-semibold">Education</h2>

		<div class="border-primary mb-6 border-l-4 pl-6">
			<div class="mb-2 flex flex-wrap items-center">
				<h3 class="text-xl font-medium">Ph.D. in Learning Sciences</h3>
			</div>
			<p class="text-lg opacity-70">Georgia State University</p>
			<p class="mt-2 opacity-80">
				Research focus on educational technology and data science applications in learning
				environments.
			</p>
		</div>

		<div class="border-primary border-l-4 pl-6">
			<div class="mb-2 flex flex-wrap items-center">
				<h3 class="text-xl font-medium">Bachelor of Science in Computer Science</h3>
			</div>
			<p class="text-lg opacity-70">Georgia Institute of Technology</p>
			<p class="mt-2 opacity-80">
				2-time Olympic Trials Competitor | Georgia Tech NCAA Division 1 Swimmer
			</p>
		</div>
	</div>

	<div class="resume-section bg-base-200 mb-12 rounded-xl p-8">
		<h2 class="mb-6 text-2xl font-semibold">Certifications</h2>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div class="bg-base-300 rounded-lg p-4">
				<h3 class="text-lg font-medium">AWS Certified Cloud Practitioner</h3>
				<p class="opacity-70">Amazon Web Services</p>
			</div>
			<div class="bg-base-300 rounded-lg p-4">
				<h3 class="text-lg font-medium">HashiCorp Certified: Terraform Associate (003)</h3>
				<p class="opacity-70">HashiCorp</p>
			</div>
		</div>
	</div>

	<div class="resume-section bg-base-200 rounded-xl p-8">
		<h2 class="mb-6 text-2xl font-semibold">Publications</h2>

		<div class="space-y-6">
			<div class="border-primary border-l-4 pl-6">
				<h3 class="text-lg font-medium">
					Exploratory Visual Analysis of Transcripts for Qualitative Research in HCI
				</h3>
				<p class="opacity-70">ACM CHI Conference on Human Factors in Computing Systems</p>
			</div>

			<div class="border-primary border-l-4 pl-6">
				<h3 class="text-lg font-medium">
					Exploratory Classroom Data Analysis and Reflection with the Interaction Geography Slicer
				</h3>
				<p class="opacity-70">ACM CHI Conference on Human Factors in Computing Systems</p>
			</div>

			<div class="border-primary border-l-4 pl-6">
				<h3 class="text-lg font-medium">
					Re-Shape: A Method to Teach Data Ethics for Data Science Education
				</h3>
				<p class="opacity-70">ACM CHI Conference on Human Factors in Computing Systems</p>
			</div>
		</div>
	</div>
</div>

<style>
	.animate-item {
		opacity: 0;
	}
</style>
