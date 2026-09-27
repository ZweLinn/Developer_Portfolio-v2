<script lang="ts">
    import { urlFor } from "$utils/sanity";
    import PortableText from "$components/ui/PortableText.svelte";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();
    const { project } = $derived(data);

    const cover = $derived(
        project.coverImage
            ? urlFor(project.coverImage)
                  .width(1400)
                  .height(800)
                  .fit("crop")
                  .auto("format")
                  .url()
            : null,
    );

    const period = $derived(
        [
            project.startDate?.slice(0, 7),
            project.endDate ? project.endDate.slice(0, 7) : "Present",
        ]
            .filter(Boolean)
            .join(" - "),
    );

    const linkClass =
        "btn-primary-sm md:btn-primary-md lg:btn-primary bg-black text-white dark:bg-white dark:text-black";
</script>

<svelte:head>
    <title>{project.title} - Projects</title>
</svelte:head>

<article class="margin-default mt-16 pb-16">
    <a href="/#Projects" class="text-sm dark-gray hover:opacity-70">&larr; Back to projects</a>

    <header class="mt-6 flex flex-col gap-4">
        <div class="flex items-center gap-3">
            <h1 class="heading-3">{project.title}</h1>
            {#if project.featured}
                <span
                    class="shrink-0 rounded-full bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white dark:bg-white dark:text-zinc-900"
                >
                    Featured
                </span>
            {/if}
        </div>

        <div class="flex flex-wrap gap-x-8 gap-y-2 text-sm dark-gray">
            {#if project.role}
                <p><span class="font-medium">Role:</span> {project.role}</p>
            {/if}
            {#if project.startDate}
                <p><span class="font-medium">Timeline:</span> {period}</p>
            {/if}
        </div>

        {#if project.summary}
            <p class="max-w-2xl text-lg leading-relaxed">{project.summary}</p>
        {/if}

        {#if project.techStack?.length}
            <ul class="flex flex-wrap gap-2">
                {#each project.techStack as tech}
                    <li class="rounded-md bg-zinc-100 px-2.5 py-1 text-sm dark:bg-zinc-800">
                        {tech}
                    </li>
                {/each}
            </ul>
        {/if}

        {#if project.liveUrl || project.repoUrl}
            <div class="flex flex-wrap gap-3">
                {#if project.liveUrl}
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class={linkClass}
                    >
                        Live site
                    </a>
                {/if}
                {#if project.repoUrl}
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class={linkClass}
                    >
                        Source code
                    </a>
                {/if}
            </div>
        {/if}
    </header>

    {#if cover}
        <img
            src={cover}
            alt={project.coverImage?.alt ?? project.title ?? "Project cover"}
            class="mt-8 w-full rounded-2xl"
        />
    {/if}

    {#if project.description?.length}
        <div class="mt-8 max-w-3xl">
            <PortableText value={project.description} />
        </div>
    {/if}

    {#if project.gallery?.length}
        <div class="mt-12 grid gap-6 sm:grid-cols-2">
            {#each project.gallery as shot (shot._key)}
                {#if shot.asset}
                    <img
                        src={urlFor(shot).width(1000).auto("format").url()}
                        alt=""
                        loading="lazy"
                        class="w-full rounded-xl"
                    />
                {/if}
            {/each}
        </div>
    {/if}
</article>
