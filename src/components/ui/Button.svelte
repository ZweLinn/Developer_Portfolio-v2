<script lang="ts">
    import type { Snippet } from "svelte";
    interface ButtonProps{
        children: Snippet;
        onClick: (e: MouseEvent) => void;
        className?: string;
    }

    let { children, onClick, className , ...props} : ButtonProps = $props();
</script>

<button class="btn-primary dark:btn-primary-dark {className} {{...props}}" onclick={onClick}>
  {@render children()}
</button>
