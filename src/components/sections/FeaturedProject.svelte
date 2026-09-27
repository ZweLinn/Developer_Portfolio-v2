<script lang="ts">
    import { urlFor } from "$utils/sanity";
    import type { ProjectLists } from "$lib/types/sanity";

    let { project }: { project: ProjectLists } = $props();

    const cover = $derived(
        project.coverImage
            ? urlFor(project.coverImage)
                  .width(1200)
                  .height(800)
                  .fit("crop")
                  .auto("format")
                  .url()
            : null,
    );
</script>

{#snippet body()}
    <div
        class="group grid overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:shadow-lg md:grid-cols-2 dark:border-zinc-800 dark:bg-zinc-900"
    >
        <div
            class="aspect-video w-full overflow-hidden bg-zinc-100 md:aspect-auto md:h-full dark:bg-zinc-800"
        >
            {#if cover}
                <img
                    src={cover}
                    alt={project.coverImage?.alt ?? project.title}
                    loading="lazy"
                    class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            {:else}
                <div
                    class="flex h-full min-h-48 w-full items-center justify-center text-sm dark-gray"
                >
                    No image
                </div>
            {/if}
        </div>

        <div class="flex flex-col gap-4 p-6 md:p-8">
            <h3 class="heading-4">{project.title}</h3>

            {#if project.summary}
                <p class="leading-relaxed dark-gray">{project.summary}</p>
            {/if}

            {#if project.techStack?.length}
                <ul class="flex flex-wrap gap-2">
                    {#each project.techStack as tech}
                        <li
                            class="rounded-md bg-zinc-100 px-2 py-1 text-xs dark:bg-zinc-800"
                        >
                            {tech}
                        </li>
                    {/each}
                </ul>
            {/if}

            {#if project.slug}
                <span class="mt-auto pt-2 text-sm font-medium">
                    View project &rarr;
                </span>
            {/if}
        </div>
    </div>
{/snippet}

{#if project.slug}
    <a
        href={`/projects/${project.slug}`}
        class="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4"
        aria-label={`View project: ${project.title}`}
    >
        {@render body()}
    </a>
{:else}
    {@render body()}
{/if}
