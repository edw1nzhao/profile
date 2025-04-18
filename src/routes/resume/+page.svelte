<script>
	import { onMount } from 'svelte';
	import { animate, stagger } from 'animejs';

	onMount(() => {
		// Animate resume sections
		animate('.resume-section', {
			opacity: [0, 1],
			translateY: [20, 0],
			delay: stagger(150),
			duration: 600,
			easing: 'easeOutExpo'
		});
	});
</script>

<div class="container mx-auto px-4 py-12">
	<div class="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
		<div>
			<h1 class="mb-2 text-4xl font-bold">Edwin Zhao</h1>
			<p class="text-xl opacity-80">Infrastructure & Developer Experience Engineer</p>
		</div>
		<div class="flex gap-4">
			<a
				href="#"
				class="btn btn-neutral"
				>Download PDF</a
			>
			<a
				href="/contact"
				class="btn btn-primary"
				>Contact Me</a
			>
		</div>
	</div>

	<div class="resume-section mb-12 rounded-xl bg-base-200 p-8">
		<h2 class="mb-6 text-2xl font-semibold">Professional Summary</h2>
		<p class="opacity-80">
			Experienced infrastructure engineer with a passion for creating developer-friendly systems and
			optimizing cloud architecture. Specializing in reducing deployment complexity, automating
			workflows, and implementing modern cloud practices that enable teams to deliver high-quality
			software faster and more reliably.
		</p>
	</div>

	<div class="resume-section mb-12 rounded-xl bg-base-200 p-8">
		<h2 class="mb-6 text-2xl font-semibold">Work Experience</h2>

		<div class="mb-8 border-l-4 border-primary pl-6">
			<div class="mb-2 flex flex-wrap items-center justify-between gap-2">
				<h3 class="text-xl font-medium">Lead Infrastructure Engineer</h3>
				<span class="rounded-full bg-primary px-3 py-1 text-sm text-primary-content">2022 - Present</span>
			</div>
			<p class="mb-2 text-lg opacity-70">CloudTech Solutions</p>
			<ul class="mt-4 list-disc space-y-2 pl-5 opacity-80">
				<li>
					Led the migration of legacy infrastructure to a modern, containerized architecture using
					Kubernetes, reducing deployment times by 80%.
				</li>
				<li>
					Designed and implemented a comprehensive CI/CD pipeline that automated testing, security
					scanning, and deployment processes.
				</li>
				<li>
					Mentored junior engineers and established best practices for infrastructure as code using
					Terraform.
				</li>
				<li>
					Reduced cloud costs by 35% through optimization of resource utilization and implementation of
					auto-scaling policies.
				</li>
			</ul>
		</div>

		<div class="mb-8 border-l-4 border-primary pl-6">
			<div class="mb-2 flex flex-wrap items-center justify-between gap-2">
				<h3 class="text-xl font-medium">Senior DevOps Engineer</h3>
				<span class="rounded-full bg-primary px-3 py-1 text-sm text-primary-content">2019 - 2022</span>
			</div>
			<p class="mb-2 text-lg opacity-70">InnovateTech Inc.</p>
			<ul class="mt-4 list-disc space-y-2 pl-5 opacity-80">
				<li>
					Architected and implemented a multi-region, highly available infrastructure on AWS using
					infrastructure as code principles.
				</li>
				<li>
					Developed automated disaster recovery procedures that reduced recovery time objectives from
					hours to minutes.
				</li>
				<li>
					Created a comprehensive monitoring and alerting system using Prometheus and Grafana, improving
					incident response times by 60%.
				</li>
				<li>
					Collaborated with development teams to streamline deployment processes and implement feature
					flagging for safer releases.
				</li>
			</ul>
		</div>

		<div class="border-l-4 border-primary pl-6">
			<div class="mb-2 flex flex-wrap items-center justify-between gap-2">
				<h3 class="text-xl font-medium">Cloud Infrastructure Engineer</h3>
				<span class="rounded-full bg-primary px-3 py-1 text-sm text-primary-content">2017 - 2019</span>
			</div>
			<p class="mb-2 text-lg opacity-70">TechStart Solutions</p>
			<ul class="mt-4 list-disc space-y-2 pl-5 opacity-80">
				<li>
					Migrated on-premises applications to AWS, resulting in improved scalability and a 25%
					reduction in operational costs.
				</li>
				<li>
					Implemented infrastructure as code using CloudFormation, enabling consistent and repeatable
					deployments.
				</li>
				<li>
					Designed and deployed containerized microservices architecture using Docker and ECS,
					improving application isolation and deployment flexibility.
				</li>
				<li>
					Established backup and recovery procedures that ensured data integrity and compliance with
					business continuity requirements.
				</li>
			</ul>
		</div>
	</div>

	<div class="resume-section mb-12 rounded-xl bg-base-200 p-8">
		<h2 class="mb-6 text-2xl font-semibold">Skills</h2>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<div>
				<h3 class="mb-3 text-xl font-medium">Cloud Platforms</h3>
				<div class="flex flex-wrap gap-2">
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">AWS</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Google Cloud</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Azure</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">DigitalOcean</span>
				</div>
			</div>

			<div>
				<h3 class="mb-3 text-xl font-medium">Infrastructure as Code</h3>
				<div class="flex flex-wrap gap-2">
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Terraform</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">CloudFormation</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Pulumi</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Ansible</span>
				</div>
			</div>

			<div>
				<h3 class="mb-3 text-xl font-medium">Containerization</h3>
				<div class="flex flex-wrap gap-2">
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Docker</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Kubernetes</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">ECS</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Helm</span>
				</div>
			</div>

			<div>
				<h3 class="mb-3 text-xl font-medium">CI/CD</h3>
				<div class="flex flex-wrap gap-2">
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">GitHub Actions</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Jenkins</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">CircleCI</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">ArgoCD</span>
				</div>
			</div>

			<div>
				<h3 class="mb-3 text-xl font-medium">Monitoring & Observability</h3>
				<div class="flex flex-wrap gap-2">
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Prometheus</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Grafana</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Datadog</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">ELK Stack</span>
				</div>
			</div>

			<div>
				<h3 class="mb-3 text-xl font-medium">Programming</h3>
				<div class="flex flex-wrap gap-2">
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Python</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Go</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">JavaScript</span>
					<span class="rounded-full bg-base-300 px-3 py-1 text-sm">Bash</span>
				</div>
			</div>
		</div>
	</div>

	<div class="resume-section mb-12 rounded-xl bg-base-200 p-8">
		<h2 class="mb-6 text-2xl font-semibold">Education</h2>

		<div class="mb-6 border-l-4 border-primary pl-6">
			<div class="mb-2 flex flex-wrap items-center justify-between gap-2">
				<h3 class="text-xl font-medium">Master of Science in Computer Science</h3>
				<span class="rounded-full bg-primary px-3 py-1 text-sm text-primary-content">2015 - 2017</span>
			</div>
			<p class="text-lg opacity-70">Stanford University</p>
			<p class="mt-2 opacity-80">
				Specialized in Distributed Systems and Cloud Computing. Thesis on "Optimizing Resource
				Allocation in Multi-Cloud Environments."
			</p>
		</div>

		<div class="border-l-4 border-primary pl-6">
			<div class="mb-2 flex flex-wrap items-center justify-between gap-2">
				<h3 class="text-xl font-medium">Bachelor of Science in Computer Engineering</h3>
				<span class="rounded-full bg-primary px-3 py-1 text-sm text-primary-content">2011 - 2015</span>
			</div>
			<p class="text-lg opacity-70">University of California, Berkeley</p>
			<p class="mt-2 opacity-80">
				Graduated with honors. Relevant coursework included Operating Systems, Computer Networks, and
				Software Engineering.
			</p>
		</div>
	</div>

	<div class="resume-section rounded-xl bg-base-200 p-8">
		<h2 class="mb-6 text-2xl font-semibold">Certifications</h2>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			<div class="rounded-lg bg-base-300 p-4">
				<h3 class="text-lg font-medium">AWS Certified Solutions Architect - Professional</h3>
				<p class="opacity-70">Amazon Web Services</p>
			</div>
			<div class="rounded-lg bg-base-300 p-4">
				<h3 class="text-lg font-medium">Certified Kubernetes Administrator (CKA)</h3>
				<p class="opacity-70">Cloud Native Computing Foundation</p>
			</div>
			<div class="rounded-lg bg-base-300 p-4">
				<h3 class="text-lg font-medium">Google Professional Cloud Architect</h3>
				<p class="opacity-70">Google Cloud</p>
			</div>
			<div class="rounded-lg bg-base-300 p-4">
				<h3 class="text-lg font-medium">HashiCorp Certified: Terraform Associate</h3>
				<p class="opacity-70">HashiCorp</p>
			</div>
			<div class="rounded-lg bg-base-300 p-4">
				<h3 class="text-lg font-medium">Microsoft Certified: Azure Solutions Architect Expert</h3>
				<p class="opacity-70">Microsoft</p>
			</div>
			<div class="rounded-lg bg-base-300 p-4">
				<h3 class="text-lg font-medium">Certified Jenkins Engineer</h3>
				<p class="opacity-70">CloudBees</p>
			</div>
		</div>
	</div>
</div>

<style>
	.resume-section {
		opacity: 0;
	}
</style>
