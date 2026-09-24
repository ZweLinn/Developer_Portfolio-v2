<script lang="ts">
    import type { Experience } from '$lib/types/sanity';

    let { experiences }: { experiences: Experience[] } = $props();
</script>

<section class="margin-default work-experience flex flex-col-reverse lg:flex-row gap-8 justify-around w-full mt-8">
    <ul class="w-1/2">
        {#each experiences as experience}
            <li class="border-b border-gray-300 pb-3">
                <article>
                    <h2 class="font-semibold mb-2">{experience.jobTitle}</h2>
                    <div class="flex justify-between">
                        <p class="text-sm mb-4">{experience.company}</p>
                        <p class="text-sm dark-gray mb-4">
                            {experience.startDate?.slice(0,7)} / {#if experience.endDate}
                                {experience.endDate?.slice(0,7)}
                            {:else}
                                Present
                            {/if}
                        </p>
                    </div>
                </article>
            </li>
        {/each}
    </ul>
    <h1 class="heading-4 md:heading-3 lg:heading-2">
        Work <br /> Experience
    </h1>
</section>
