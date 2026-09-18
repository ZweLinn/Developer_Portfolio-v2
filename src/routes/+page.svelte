<script lang="ts">
  import { toggleMode } from "mode-watcher";
  import HeroSection from "$components/sections/HeroSection.svelte";
  import AboutMeSection from "$components/sections/AboutMeSection.svelte";
  import WorkExperienceSection from "$components/sections/WorkExperienceTable.svelte";
</script>

<HeroSection />
<AboutMeSection />
<WorkExperienceSection />


<button onclick={toggleMode} class="border-spacing-3 border-zinc-600s">Toggle theme</button>
