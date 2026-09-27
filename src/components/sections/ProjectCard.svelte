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
    <article class="group flex h-full flex-col">
        <div
            class="aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800"
        >
            {#if cover}
                <img
                    src={cover}
                    alt={project.coverImage?.alt ?? project.title}
                    loading="lazy"
                    class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
            {/if}
        </div>

        <div class="mt-4 flex flex-1 flex-col">
            <h3
                class="text-lg font-semibold tracking-tight underline-offset-4 group-hover:underline"
            >
                {project.title}
            </h3>

            {#if project.summary}
                <p
                    class="mt-1.5 line-clamp-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
                >
                    {project.summary}
                </p>
            {/if}

            {#if project.techStack?.length}
                <p class="mt-3 text-xs tracking-wide text-zinc-500 dark:text-zinc-400">
                    {project.techStack.join(" · ")}
                </p>
            {/if}
        </div>
    </article>
{/snippet}

{#if project.slug}
    <a
        href={`/projects/${project.slug}`}
        class="block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4"
        aria-label={`View project: ${project.title}`}
    >
        {@render cardContent()}
    </a>
{:else}
    {@render cardContent()}
{/if}
