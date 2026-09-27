<script lang="ts">
    import ProjectCard from "$components/sections/ProjectCard.svelte";
    import FeaturedProject from "$components/sections/FeaturedProject.svelte";
    import type { ProjectLists } from "$lib/types/sanity";

    let { projects }: { projects: ProjectLists[] } = $props();

    $inspect(projects);
    const featured = $derived(projects.filter((project) => project.featured));
    const others = $derived(projects.filter((project) => !project.featured));
</script>

{#if projects.length === 0}
    <p class="margin-default mt-8 text-sm dark-gray">No projects to show yet.</p>
{:else}
    {#if featured.length}
        <h3
            class="margin-default mt-10 text-xs font-medium tracking-widest uppercase dark-gray"
        >
            Featured
        </h3>
        <div class="margin-default mt-4 flex flex-col gap-8">
            {#each featured as project (project.slug ?? project.title)}
                <FeaturedProject {project} />
            {/each}
        </div>
    {/if}

    {#if others.length}
        {#if featured.length}
            <h3
                class="margin-default mt-14 text-xs font-medium tracking-widest uppercase dark-gray"
            >
                More projects
            </h3>
        {/if}
        <div
            class="margin-default grid gap-8 sm:grid-cols-2 {featured.length
                ? 'mt-4'
                : 'mt-8'}"
        >
            {#each others as project (project.slug ?? project.title)}
                <ProjectCard {project} />
            {/each}
        </div>
    {/if}
{/if}
