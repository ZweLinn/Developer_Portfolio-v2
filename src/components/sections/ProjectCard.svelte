<script lang="ts">
    import { urlFor } from "$utils/sanity";
    import type { ProjectLists } from "$lib/types/sanity";

    let { project }: { project: ProjectLists } = $props();

    const cover = $derived(
        project.coverImage
            ? urlFor(project.coverImage)
                  .width(900)
                  .height(560)
                  .fit("crop")
                  .auto("format")
                  .url()
            : null,
    );
</script>

{#snippet cardContent()}
    <div
        class="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
    >
        <div class="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            {#if cover}
                <img
                    src={cover}
                    alt={project.coverImage?.alt ?? project.title}
                    loading="lazy"
                    class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            {:else}
                <div class="flex h-full w-full items-center justify-center text-sm dark-gray">
                    No image
                </div>
            {/if}
        </div>

        <div class="flex flex-1 flex-col gap-3 p-5">
            <div class="flex items-start justify-between gap-3">
                <h3 class="heading-5">{project.title}</h3>
                {#if project.featured}
                    <span
                        class="shrink-0 rounded-full bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white dark:bg-white dark:text-zinc-900"
                    >
                        Featured
                    </span>
                {/if}
            </div>

            {#if project.summary}
                <p class="text-sm leading-relaxed dark-gray">{project.summary}</p>
            {/if}

            {#if project.techStack?.length}
                <ul class="mt-auto flex flex-wrap gap-2 pt-2">
                    {#each project.techStack as tech}
                        <li
                            class="rounded-md bg-zinc-100 px-2 py-1 text-xs dark:bg-zinc-800"
                        >
                            {tech}
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
    </div>
{/snippet}

{#if project.slug}
    <a
        href={`/projects/${project.slug}`}
        class="block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4"
        aria-label={`View project: ${project.title}`}
    >
        {@render cardContent()}
    </a>
{:else}
    {@render cardContent()}
{/if}
