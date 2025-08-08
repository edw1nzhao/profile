<script>
	import { onMount } from 'svelte';
	import FadeIn from '$lib/components/ui/fade-in.svelte';
	import SkillCard from '$lib/components/ui/skill-card.svelte';
	import TimelineItem from '$lib/components/ui/timeline-item.svelte';
	import SectionHeader from '$lib/components/ui/section-header.svelte';
	import BackgroundBeams from '$lib/components/ui/background-beams.svelte';
	import MagneticButton from '$lib/components/ui/magnetic-button.svelte';
	import Particles from '$lib/components/ui/particles.svelte';
	import CursorGlow from '$lib/components/ui/cursor-glow.svelte';
	
	const skills = {
		cloud: {
			title: 'Cloud & Infrastructure',
			items: ['Kubernetes', 'Docker', 'Terraform', 'AWS (ECS, ECR)', 'GCP', 'Azure', 'Helm', 'Kustomize', 'ArgoCD', 'Flux', 'Terratest', 'Cloud Custodian', 'Spotify Backstage', 'Cloud Formation']
		},
		devops: {
			title: 'DevOps & Automation',
			items: ['Bash', 'TypeScript', 'Go', 'Git', 'GitHub Actions', 'GitLab CI', 'Harness', 'Octopus', 'DynaTrace']
		},
		programming: {
			title: 'Programming & Tools',
			items: ['Go', 'Java', 'TypeScript', 'React / React Native', 'Svelte', 'Tailwind', 'MongoDB', 'PostgreSQL', 'Linux', 'LaunchDarkly', 'Okta', 'Jira', 'Prometheus', 'OpenTelemetry', 'DynamoDB', 'Supabase']
		}
	};
</script>

<BackgroundBeams className="opacity-20" />
<Particles className="opacity-40" quantity={50} />
<CursorGlow />

<div class="container mx-auto px-4 py-12 relative z-10">
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

	<FadeIn>
		<div class="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
			<div>
				<h1 class="mb-2 text-5xl font-bold bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text">Edwin Zhao</h1>
				<p class="text-xl text-base-content/80">Cloud & Developer Experience Engineer</p>
			</div>
			<div class="flex gap-4">
				<MagneticButton href="/contact" className="btn btn-primary shadow-lg hover:shadow-xl">Contact Me</MagneticButton>
			</div>
		</div>
	</FadeIn>

	<FadeIn delay={100}>
		<div class="mb-16 rounded-2xl bg-gradient-to-br from-base-200 to-base-300 p-8 shadow-xl backdrop-blur-sm">
			<SectionHeader title="Professional Summary" />
			<p class="text-lg leading-relaxed text-base-content/80">
				Senior technical leader with extensive experience building large-scale cloud and distributed
				systems, focusing on advanced CI/CD, developer experience, and cost optimization. Skilled in
				aligning technology strategy with business needs through modern platform engineering and
				cross-functional collaboration.
			</p>
		</div>
	</FadeIn>
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

	<div class="mb-16">
		<FadeIn delay={200}>
			<SectionHeader title="Technical Skills" />
		</FadeIn>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<FadeIn delay={300}>
				<SkillCard title={skills.cloud.title} skills={skills.cloud.items} />
			</FadeIn>
			<FadeIn delay={400}>
				<SkillCard title={skills.devops.title} skills={skills.devops.items} />
			</FadeIn>
			<FadeIn delay={500}>
				<SkillCard title={skills.programming.title} skills={skills.programming.items} />
			</FadeIn>
		</div>
	</div>

	<div class="mb-16">
		<FadeIn delay={600}>
			<SectionHeader title="Education" />
		</FadeIn>
		<div class="ml-4">
			<TimelineItem
				title="Ph.D. in Learning Sciences"
				subtitle="Georgia State University"
				description="Research focus on educational technology and data science applications in learning environments."
				delay={700}
			/>
			<TimelineItem
				title="Bachelor of Science in Computer Science"
				subtitle="Georgia Institute of Technology"
				description="2-time Olympic Trials Competitor | Georgia Tech NCAA Division 1 Swimmer"
				isLast={true}
				delay={800}
			/>
		</div>
	</div>

	<div class="mb-16">
		<FadeIn delay={900}>
			<SectionHeader title="Certifications" />
		</FadeIn>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<FadeIn delay={1000}>
				<div class="group rounded-xl bg-gradient-to-br from-base-200 to-base-300 p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
					<div class="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl" />
					<h3 class="relative text-lg font-semibold">AWS Certified Cloud Practitioner</h3>
					<p class="relative text-base-content/70">Amazon Web Services</p>
				</div>
			</FadeIn>
			<FadeIn delay={1100}>
				<div class="group rounded-xl bg-gradient-to-br from-base-200 to-base-300 p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
					<div class="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl" />
					<h3 class="relative text-lg font-semibold">HashiCorp Certified: Terraform Associate (003)</h3>
					<p class="relative text-base-content/70">HashiCorp</p>
				</div>
			</FadeIn>
		</div>
	</div>

	<div class="mb-16">
		<FadeIn delay={1200}>
			<SectionHeader title="Publications" />
		</FadeIn>
		<div class="ml-4">
			<TimelineItem
				title="Exploratory Visual Analysis of Transcripts for Qualitative Research in HCI"
				subtitle="ACM CHI Conference on Human Factors in Computing Systems"
				delay={1300}
			/>
			<TimelineItem
				title="Exploratory Classroom Data Analysis and Reflection with the Interaction Geography Slicer"
				subtitle="ACM CHI Conference on Human Factors in Computing Systems"
				delay={1400}
			/>
			<TimelineItem
				title="Re-Shape: A Method to Teach Data Ethics for Data Science Education"
				subtitle="ACM CHI Conference on Human Factors in Computing Systems"
				isLast={true}
				delay={1500}
			/>
		</div>
	</div>
</div>

<style>
	:global(.resume-section) {
		@apply transition-all duration-300;
	}
</style>
