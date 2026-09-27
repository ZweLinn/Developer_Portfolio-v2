<script lang="ts">
    import ProjectCard from "$components/sections/ProjectCard.svelte";
    import type { ProjectLists } from "$lib/types/sanity";

    let { projects }: { projects: ProjectLists[] } = $props();
</script>

{#if projects.length === 0}
    <p class="margin-default mt-8 text-sm dark-gray">No projects to show yet.</p>
{:else}
    <div class="margin-default mt-8 grid gap-8 sm:grid-cols-2">
        {#each projects as project (project.slug ?? project.title)}
            <ProjectCard {project} />
        {/each}
    </div>
{/if}
