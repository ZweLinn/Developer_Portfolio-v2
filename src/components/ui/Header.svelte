<script lang="ts">
	import { toggleMode, mode } from "mode-watcher";

	const navLinks = [
		{ label: "About Me", href: "/#About Me" },
		{ label: "Projects", href: "/#Projects" },
		{ label: "Skills", href: "/#Skills" },
		{ label: "Certification", href: "/#Certification" },
		{ label: "Contact", href: "/#Contact" },
	];

	let menuOpen = $state(false);

	const isDark = $derived(mode.current === "dark");

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header
	class="sticky top-0 z-50 border-b border-zinc-200 bg-white text-black transition-colors dark:border-zinc-800 dark:bg-black dark:text-white"
>
	<div class="margin-default flex items-center justify-between py-4">
		<a href="/" class="heading-5 font-bold">ZLM</a>

		<nav class="hidden items-center gap-8 md:flex" aria-label="Main navigation">
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					class="dark-gray text-sm font-medium transition-colors hover:text-black dark:hover:text-white"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<button
				type="button"
				onclick={toggleMode}
				class="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
				aria-label="Toggle theme"
			>
				{#if isDark}
					<!-- sun -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="4"></circle>
						<path d="M12 2v2"></path>
						<path d="M12 20v2"></path>
						<path d="m4.93 4.93 1.41 1.41"></path>
						<path d="m17.66 17.66 1.41 1.41"></path>
						<path d="M2 12h2"></path>
						<path d="M20 12h2"></path>
						<path d="m6.34 17.66-1.41 1.41"></path>
						<path d="m19.07 4.93-1.41 1.41"></path>
					</svg>
				{:else}
					<!-- moon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
					</svg>
				{/if}
			</button>

			<button
				type="button"
				onclick={() => (menuOpen = !menuOpen)}
				class="flex h-9 w-9 items-center justify-center rounded-md md:hidden"
				aria-label="Toggle menu"
				aria-expanded={menuOpen}
			>
				{#if menuOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M18 6 6 18"></path>
						<path d="m6 6 12 12"></path>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M4 6h16"></path>
						<path d="M4 12h16"></path>
						<path d="M4 18h16"></path>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	{#if menuOpen}
		<nav
			class="border-t border-zinc-200 md:hidden dark:border-zinc-800"
			aria-label="Mobile navigation"
		>
			<div class="flex flex-col px-6 py-3">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						onclick={closeMenu}
						class="dark-gray py-2 text-sm font-medium transition-colors hover:text-black dark:hover:text-white"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</nav>
	{/if}
</header>
