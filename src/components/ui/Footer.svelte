<script lang="ts">
	const email = "zewlinnmg@gmail.com";
	const year = new Date().getFullYear();

	const socials = [
		{
			name: "GitHub",
			url: "https://github.com/ZweLinn",
			icon: "github",
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/zwe-linn-maung-7638a2301",
			icon: "linkedin",
		},
	];
</script>

<footer
	class="mt-20 border-t border-zinc-200 bg-white text-black transition-colors dark:border-zinc-800 dark:bg-black dark:text-white"
>
	<div
		class="margin-default flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between"
	>
		<div>
			<a href="/" class="heading-5 font-bold">Zwe Linn Maung</a>
			<p class="dark-gray mt-2 max-w-xs text-sm">
				Full-stack developer
			</p>
		</div>

		<div>
			<h3 class="mb-3 text-sm font-semibold">Get in touch</h3>
			<a
				href={`mailto:${email}`}
				class="dark-gray text-sm transition-colors hover:text-black dark:hover:text-white"
			>
				{email}
			</a>
			<div class="mt-4 flex gap-4">
				{#each socials as social (social.name)}
					<a
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={social.name}
						class="text-zinc-600 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
					>
						{#if social.icon === "github"}
							<i class="devicon-github-original text-2xl"></i>
						{:else if social.icon === "linkedin"}
							<i class="devicon-linkedin-plain text-2xl"></i>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</div>

	<div
		class="margin-default border-t border-zinc-200 py-4 dark:border-zinc-800"
	>
		<p class="dark-gray text-xs">
			© {year} Zwe Linn Maung. All rights reserved.
		</p>
	</div>
</footer>
