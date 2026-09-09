<script lang="ts">
    import type { Snippet } from "svelte";
    interface ButtonProps{
        children: Snippet;
        onClick: (e: MouseEvent) => void;
        className?: string;
    }

    let { children, onClick, className , ...props} : ButtonProps = $props();
</script>

<button class="btn-primary-sm md:btn-primary-md lg:btn-primary bg-black text-white dark:bg-white dark:text-black   {className} {{...props}}" onclick={onClick}>
  {@render children()}
</button>
