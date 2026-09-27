<script lang="ts">
    import { urlFor } from "$utils/sanity";
    import type { Project } from "$lib/types/sanity";

    type Block = NonNullable<Project["description"]>[number];
    type TextBlock = Extract<Block, { _type: "block" }>;
    type MarkDef = NonNullable<TextBlock["markDefs"]>[number];

    let { value }: { value: Block[] } = $props();

    // Consecutive list items share one <ul>/<ol>; everything else is its own group.
    type Group = { list: "bullet" | "number" | null; items: Block[] };

    const groups = $derived.by(() => {
        const out: Group[] = [];
        for (const block of value) {
            if (block._type !== "block") {
                out.push({ list: null, items: [block] });
                continue;
            }
            const list = block.listItem ?? null;
            const last = out.at(-1);
            if (last && list && last.list === list) {
                last.items.push(block);
            } else {
                out.push({ list, items: [block] });
            }
        }
        return out;
    });
</script>

{#snippet annotate(text: string, marks: string[], markDefs?: MarkDef[])}
    {#if marks.length === 0}
        {text}
    {:else}
        {@const mark = marks[0]}
        {@const rest = marks.slice(1)}
        {@const def = markDefs?.find((d) => d._key === mark)}
        {#if mark === "strong"}
            <strong>{@render annotate(text, rest, markDefs)}</strong>
        {:else if mark === "em"}
            <em>{@render annotate(text, rest, markDefs)}</em>
        {:else if mark === "code"}
            <code class="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                {@render annotate(text, rest, markDefs)}
            </code>
        {:else if mark === "underline"}
            <u>{@render annotate(text, rest, markDefs)}</u>
        {:else if def?._type === "link"}
            <a
                href={def.href}
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-1 underline-offset-2 hover:opacity-70"
            >
                {@render annotate(text, rest, markDefs)}
            </a>
        {:else}
            {@render annotate(text, rest, markDefs)}
        {/if}
    {/if}
{/snippet}

{#snippet inline(block: TextBlock)}
    {#each block.children ?? [] as child}
        {#if child._type === "span"}
            {@render annotate(child.text ?? "", child.marks ?? [], block.markDefs)}
        {/if}
    {/each}
{/snippet}

{#snippet blockBody(block: TextBlock)}
    {#if block.style === "h1"}
        <h1 class="heading-3 mt-8">{@render inline(block)}</h1>
    {:else if block.style === "h2"}
        <h2 class="heading-4 mt-8">{@render inline(block)}</h2>
    {:else if block.style === "h3"}
        <h3 class="heading-5 mt-6">{@render inline(block)}</h3>
    {:else if block.style === "h4" || block.style === "h5" || block.style === "h6"}
        <h4 class="mt-6 text-lg font-semibold">{@render inline(block)}</h4>
    {:else if block.style === "blockquote"}
        <blockquote class="my-6 border-l-4 border-zinc-300 pl-4 italic dark:border-zinc-700">
            {@render inline(block)}
        </blockquote>
    {:else}
        <p class="my-4 leading-relaxed">{@render inline(block)}</p>
    {/if}
{/snippet}

<div class="portable-text">
    {#each groups as group}
        {#if group.list === "number"}
            <ol class="my-4 list-decimal space-y-2 pl-6">
                {#each group.items as item}
                    <li>{@render inline(item as TextBlock)}</li>
                {/each}
            </ol>
        {:else if group.list === "bullet"}
            <ul class="my-4 list-disc space-y-2 pl-6">
                {#each group.items as item}
                    <li>{@render inline(item as TextBlock)}</li>
                {/each}
            </ul>
        {:else if group.items[0]._type === "image"}
            {@const image = group.items[0]}
            {#if image.asset}
                <img
                    src={urlFor(image).width(1200).auto("format").url()}
                    alt=""
                    loading="lazy"
                    class="my-6 w-full rounded-2xl"
                />
            {/if}
        {:else}
            {@render blockBody(group.items[0] as TextBlock)}
        {/if}
    {/each}
</div>
