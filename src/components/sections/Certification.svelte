<script lang="ts">
    import type { Certification } from "$lib/types/sanity";
    import SectionHeadline from "$components/ui/SectionHeadline.svelte";

    let { certification }: { certification: Certification[] } = $props();
</script>

<section class="mt-16">
    <SectionHeadline sectionName="Certification">
        Certifications
    </SectionHeadline>

    <ul class="margin-default mt-8 flex flex-col gap-6">
        {#each certification as cert (cert._key)}
            <li class="border-b border-gray-300 pb-4">
                {#if cert.certificationUrl}
                    <a
                        href={cert.certificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
                    >
                        {cert.certificationName}
                        <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </a>
                {:else}
                    <span class="font-semibold">{cert.certificationName}</span>
                {/if}
            </li>
        {/each}
    </ul>
</section>
