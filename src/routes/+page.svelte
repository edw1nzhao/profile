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

		document.querySelectorAll('.nav-tile').forEach((tile) => {
			tile.addEventListener('mouseenter', () => {
				animate(tile, {
					scale: 1.05,
					duration: 300,
					easing: 'easeOutElastic(1, .5)'
				});
			});

			tile.addEventListener('mouseleave', () => {
				animate(tile, {
					scale: 1,
					duration: 300,
					easing: 'easeOutElastic(1, .5)'
				});
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

<div class="text-base-content flex min-h-screen flex-col items-center justify-center">
	<div class="mx-auto flex w-[40%] flex-col md:w-[30%]">
		<h1 class="heading pb-4 text-5xl font-light md:pb-8 md:text-7xl">Hi!</h1>
		<p class="content-paragraph py-2">
			I'm <a href="/contact" class="animated-link bg-white p-1 text-black">Edwin Zhao</a>, and I'm
			passionate about building infrastructure that empowers developers to do their best work.
		</p>
		<p class="content-paragraph py-2">
			I've dedicated my career to creating better ways of working—reducing months-long deployment
			cycles to days and helping organizations embrace <a
				href="/coding"
				class="animated-link bg-white p-1 text-black">modern cloud practices</a
			>.
		</p>
		<p class="content-paragraph py-2">
			Want to chat about developer experience, automation workflows, or modern cloud architecture? <a
				href="/contact"
				class="animated-link bg-white p-1 text-black">Let's talk</a
			>
		</p>

		<div class="divider bg-neutral my-8 h-px w-full md:my-12"></div>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
			<a
				href="/about"
				class="nav-tile border-base-300 text-base-content hover:bg-base-200 flex flex-col items-center rounded-lg border p-4 text-center shadow-lg md:p-6"
			>
				<IconPerson class="mb-2 h-8 w-8 md:h-10 md:w-10" />
				<span>about</span>
			</a>
			<a
				href="/coding"
				class="nav-tile border-base-300 text-base-content hover:bg-base-200 flex flex-col items-center rounded-lg border p-4 text-center shadow-lg md:p-6"
			>
				<IconCode class="mb-2 h-8 w-8 md:h-10 md:w-10" />
				<span>coding</span>
			</a>
			<a
				href="/resume"
				class="nav-tile border-base-300 text-base-content hover:bg-base-200 flex flex-col items-center rounded-lg border p-4 text-center shadow-lg md:p-6"
			>
				<IconResume class="mb-2 h-8 w-8 md:h-10 md:w-10" />
				<span>resume</span>
			</a>
			<a
				href="/contact"
				class="nav-tile border-base-300 text-base-content hover:bg-base-200 flex flex-col items-center rounded-lg border p-4 text-center shadow-lg md:p-6"
			>
				<IconContact class="mb-2 h-8 w-8 md:h-10 md:w-10" />
				<span>contact</span>
			</a>
		</div>
	</div>
</div>

<style>
	.animated-link {
		display: inline-block;
	}
</style>
