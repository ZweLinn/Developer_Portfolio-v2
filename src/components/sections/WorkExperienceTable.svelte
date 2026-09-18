<script lang="ts">
    interface WorkExperience {
        id: number;
        jobTitle: string;
        company: string;
        startDate: string;
        endDate: string;
    }

    const workExperience: WorkExperience[] = [
        {
            id: 1,
            jobTitle: "System Support Specialist",
            company: "Logic Prime",
            startDate: "2023-01",
            endDate: "2024-12",
        },
        {
            id: 2,
            jobTitle: "Full Stack Engineer",
            company: "YGNCode Lab",
            startDate: "2025-09",
            endDate: "2026-02",
        },
    ];
</script>

<section class="margin-default work-experience flex flex-col-reverse lg:flex-row gap-8 justify-around w-full mt-8">
    <ul class="w-1/2">
        {#each workExperience as experience}
            <li class="border-b border-gray-300 pb-3">
                <article>
                    <h2 class="font-semibold mb-2">{experience.jobTitle}</h2>
                    <div class="flex justify-between">
                        <p class="text-sm mb-4">{experience.company}</p>
                        <p class="text-sm dark-gray mb-4">
                            {experience.startDate} / {#if experience.endDate}
                                {experience.endDate}
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
