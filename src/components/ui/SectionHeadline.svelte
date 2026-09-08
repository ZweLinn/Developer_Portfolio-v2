<script lang="ts">
    import type { Snippet } from "svelte";

    interface SectionHeadlineProps {
        children: Snippet;
        sectionName: string;
    }

    let {children, sectionName} : SectionHeadlineProps= $props();

</script>

<div class="margin-default" id={sectionName}>
    <h2 class="heading-4 md:heading-4 lg:heading-3">{@render children()}</h2>
    <div class="underscore"></div>
</div>
