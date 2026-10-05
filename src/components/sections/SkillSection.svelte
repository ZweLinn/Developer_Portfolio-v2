<script lang="ts">
    import type { Skill } from "$lib/types/sanity";
    import SectionHeadline from "$components/ui/SectionHeadline.svelte";
    let { skills }: { skills: Skill[] } = $props();
    $inspect(skills, "tset");
</script>

<section class="skills mt-16">
    <SectionHeadline sectionName="Skills">Skills</SectionHeadline>
    <div class="flex justify-center items-center margin-default">
        <div class="w-[40%] flex flex-wrap justify-center gap-4 lg:gap-8 mt-6">
            {#each skills as skill}
                <div class="skill-item">
                    <i class="{skill.iconClass} text-4xl md:5xl lg:text-7xl"></i>
                </div>
            {/each}
        </div>
    </div>
</section>
