<script>
	// @ts-ignore
	import IconPerson from 'virtual:icons/mdi/account';
	// @ts-ignore
	import IconCode from 'virtual:icons/mdi/code-tags';
	// @ts-ignore
	import IconResume from 'virtual:icons/mdi/file-document-outline';
	// @ts-ignore
	import IconContact from 'virtual:icons/mdi/email-outline';
</script>

<div class="navbar bg-base-200 z-10 shadow-md">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content bg-base-200 rounded-box z-20 mt-3 w-52 p-2 shadow"
			>
				<li><a href="/about">About</a></li>
				<li><a href="/coding">Coding</a></li>
				<li><a href="/resume">Resume</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-xl">Edwin Zhao</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li>
				<a href="/about" class="flex items-center gap-2">
					<IconPerson class="h-5 w-5" />
					About
				</a>
			</li>
			<li>
				<a href="/coding" class="flex items-center gap-2">
					<IconCode class="h-5 w-5" />
					Coding
				</a>
			</li>
			<li>
				<a href="/resume" class="flex items-center gap-2">
					<IconResume class="h-5 w-5" />
					Resume
				</a>
			</li>
			<li>
				<a href="/contact" class="flex items-center gap-2">
					<IconContact class="h-5 w-5" />
					Contact
				</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<a href="/contact" class="btn btn-primary">Let's Talk!</a>
	</div>
</div>
