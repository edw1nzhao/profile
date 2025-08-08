<script>
	import { onMount } from 'svelte';
	import { animate, stagger, Timeline } from 'animejs';
	// @ts-ignore
	import IconPerson from 'virtual:icons/mdi/account';
	// @ts-ignore
	import IconCode from 'virtual:icons/mdi/code-tags';
	// @ts-ignore
	import IconResume from 'virtual:icons/mdi/file-document-outline';
	// @ts-ignore
	import IconContact from 'virtual:icons/mdi/email-outline';
	import BackgroundBeams from '$lib/components/ui/background-beams.svelte';
	import Spotlight from '$lib/components/ui/spotlight.svelte';
	import Card3D from '$lib/components/ui/card-3d.svelte';
	import TextGenerateEffect from '$lib/components/ui/text-generate-effect.svelte';
	import MovingBorder from '$lib/components/ui/moving-border.svelte';
	import CursorGlow from '$lib/components/ui/cursor-glow.svelte';
	import MagneticButton from '$lib/components/ui/magnetic-button.svelte';

	onMount(() => {
		animate('.heading', {
			opacity: [0, 1],
			translateY: [20, 0],
			duration: 400,
			easing: 'easeOutExpo'
		});

		animate('.content-paragraph', {
			opacity: [0, 1],
			translateY: [20, 0],
			delay: stagger(150, { start: 400 }),
			duration: 500,
			easing: 'easeOutExpo'
		});

		animate('.divider', {
			scaleX: [0, 1],
			opacity: [0, 1],
			delay: 900,
			duration: 400,
			easing: 'easeInOutQuad'
		});

		animate('.nav-tile', {
			scale: [0.8, 1],
			opacity: [0, 1],
			delay: stagger(100, { start: 1000 }),
			duration: 500,
			easing: 'easeOutElastic(1, .5)'
		});

		// Add floating animation to cards
		document.querySelectorAll('.nav-tile').forEach((tile, index) => {
			animate(tile, {
				translateY: [0, -10, 0],
				duration: 3000 + (index * 500),
				easing: 'easeInOutSine',
				loop: true
			});
		});

		document.querySelectorAll('.animated-link').forEach((link) => {
			link.addEventListener('mouseenter', () => {
				animate(link, {
					translateX: [0, -1, 1, 0],
					duration: 300,
					easing: 'easeInOutSine'
				});
			});
		});
	});
</script>

<BackgroundBeams className="opacity-30" />
<Spotlight />
<CursorGlow />

<div class="text-base-content flex min-h-screen flex-col items-center justify-center relative z-10">
	<div class="mx-auto flex w-[40%] flex-col md:w-[30%]">
		<TextGenerateEffect words="Hi!" className="heading pb-4 md:pb-8" />
		<p class="content-paragraph py-2">
			I'm <MagneticButton href="/contact" className="animated-link bg-white p-1 text-black inline">Edwin Zhao</MagneticButton>, and I'm
			passionate about building infrastructure that empowers developers to do their best work.
		</p>
		<p class="content-paragraph py-2">
			I've dedicated my career to creating better ways of working—reducing months-long deployment
			cycles to days and helping organizations embrace <MagneticButton
				href="/coding"
				className="animated-link bg-white p-1 text-black inline">modern cloud practices</MagneticButton>.
		</p>
		<p class="content-paragraph py-2">
			Want to chat about developer experience, automation workflows, or modern cloud architecture? <MagneticButton
				href="/contact"
				className="animated-link bg-white p-1 text-black inline">Let's talk</MagneticButton>
		</p>

		<div class="divider bg-neutral my-8 h-px w-full md:my-12"></div>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
			<Card3D containerClassName="nav-tile">
				<a
					href="/about"
					class="text-base-content hover:bg-base-200 flex flex-col items-center p-4 text-center md:p-6 transition-colors"
				>
					<IconPerson class="mb-2 h-8 w-8 md:h-10 md:w-10" />
					<span>about</span>
				</a>
			</Card3D>
			<Card3D containerClassName="nav-tile">
				<a
					href="/coding"
					class="text-base-content hover:bg-base-200 flex flex-col items-center p-4 text-center md:p-6 transition-colors"
				>
					<IconCode class="mb-2 h-8 w-8 md:h-10 md:w-10" />
					<span>coding</span>
				</a>
			</Card3D>
			<Card3D containerClassName="nav-tile">
				<a
					href="/resume"
					class="text-base-content hover:bg-base-200 flex flex-col items-center p-4 text-center md:p-6 transition-colors"
				>
					<IconResume class="mb-2 h-8 w-8 md:h-10 md:w-10" />
					<span>resume</span>
				</a>
			</Card3D>
			<Card3D containerClassName="nav-tile">
				<a
					href="/contact"
					class="text-base-content hover:bg-base-200 flex flex-col items-center p-4 text-center md:p-6 transition-colors"
				>
					<IconContact class="mb-2 h-8 w-8 md:h-10 md:w-10" />
					<span>contact</span>
				</a>
			</Card3D>
		</div>
	</div>
</div>

<style>
	.animated-link {
		display: inline-block;
	}
</style>
