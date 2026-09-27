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
    <article class="group grid items-center gap-6 md:grid-cols-2 md:gap-12">
        <div
            class="aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800"
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

        <div class="flex flex-col">
            <h3 class="heading-4 tracking-tight">{project.title}</h3>

            {#if project.summary}
                <p class="mt-3 leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {project.summary}
                </p>
            {/if}

            {#if project.techStack?.length}
                <p class="mt-4 text-xs tracking-wide text-zinc-500 dark:text-zinc-400">
                    {project.techStack.join(" · ")}
                </p>
            {/if}

            {#if project.slug}
                <span
                    class="mt-6 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 group-hover:underline"
                >
                    View project <span aria-hidden="true">&rarr;</span>
                </span>
            {/if}
        </div>
    </article>
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
