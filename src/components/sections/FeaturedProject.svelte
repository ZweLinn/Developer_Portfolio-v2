<script lang="ts">
    import { urlFor } from "$utils/sanity";
    import type { ProjectLists } from "$lib/types/sanity";

    let { project }: { project: ProjectLists } = $props();

    const cover = $derived(
        project.coverImage
            ? urlFor(project.coverImage)
                  .width(1600)
                  .height(900)
                  .fit("crop")
                  .auto("format")
                  .url()
            : null,
    );
</script>

{#snippet body()}
    <article class="group relative w-full overflow-hidden rounded-2xl bg-zinc-900">
        <div class="relative aspect-video w-full overflow-hidden md:aspect-[2.4/1]">
            {#if cover}
                <img
                    src={cover}
                    alt={project.coverImage?.alt ?? project.title}
                    loading="lazy"
                    class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
            {/if}

            <div
                class="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-transparent"
            ></div>

            <div class="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 md:p-10">
                <h3 class="text-xl font-bold sm:heading-4 tracking-tight text-white md:heading-3">
                    {project.title}
                </h3>

                {#if project.summary}
                    <p class="max-w-2xl text-sm leading-relaxed text-white/80 md:text-base hidden md:inline">
                        {project.summary}
                    </p>
                {/if}

                {#if project.techStack?.length}
                    <p class="text-xs tracking-wide text-white/70">
                        {project.techStack.join(" · ")}
                    </p>
                {/if}

                {#if project.slug}
                    <span
                        class="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 group-hover:underline"
                    >
                        View project <span aria-hidden="true">&rarr;</span>
                    </span>
                {/if}
            </div>
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
