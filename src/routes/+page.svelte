<script lang="ts">
  import { toggleMode } from "mode-watcher";
  import HeroSection from "$components/sections/HeroSection.svelte";
</script>

<HeroSection />

<button onclick={toggleMode} class="border-spacing-3 border-zinc-600s">Toggle theme</button>
