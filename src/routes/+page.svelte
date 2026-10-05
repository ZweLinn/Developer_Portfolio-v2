<script lang="ts">
  import { toggleMode } from "mode-watcher";
  import HeroSection from "$components/sections/HeroSection.svelte";
  import AboutMeSection from "$components/sections/AboutMeSection.svelte";
  import WorkExperienceSection from "$components/sections/WorkExperienceTable.svelte";
  import ProjectSection from "$components/sections/ProjectSection.svelte";
  import SkillSection from "$components/sections/SkillSection.svelte";
  import type { PageProps } from './$types';

  const { data }: PageProps = $props();
  $inspect(data.skills[0].skillList , "test")
</script>

<HeroSection />
<AboutMeSection />
<WorkExperienceSection experiences={data.experiences} />
<ProjectSection projects={data.projectLists} />
<SkillSection skills={data.skills[0].skillList ?? []} />


<button onclick={toggleMode} class="border-spacing-3 border-zinc-600s">Toggle theme</button>
