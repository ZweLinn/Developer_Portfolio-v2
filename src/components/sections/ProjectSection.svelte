<script lang="ts">
    import SectionHeadline from "$components/ui/SectionHeadline.svelte";
    import ProjectList from "$components/sections/ProjectList.svelte";
    import type { ProjectLists } from "$lib/types/sanity";

    let { projects }: { projects: ProjectLists[] } = $props();
</script>

<section class="projects mt-16">
    <SectionHeadline sectionName="Projects">Projects</SectionHeadline>
    <ProjectList {projects} />
</section>
