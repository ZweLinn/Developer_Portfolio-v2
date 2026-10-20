<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from "mode-watcher";
	import Header from "$components/ui/Header.svelte";
	import Footer from "$components/ui/Footer.svelte";
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher defaultMode="light" />
<Header />
{@render children()}
<Footer />
