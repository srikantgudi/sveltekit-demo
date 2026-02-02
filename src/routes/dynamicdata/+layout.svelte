<script>
	import favicon from '$lib/assets/favicon.svg';
	import { Pagetitle, Panel } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Panel>
	<nav class="flex items-center gap-1 bg-blue-900 p-1">
		<div class="text-3xl mr-12">Dynamic Data:</div>
		<a class="font-bold text-[1.2rem] text-blue-800" href="/dynamicdata/posts">[Posts]</a>
		<a class="font-bold text-[1.2rem] text-blue-800" href="/dynamicdata/comments">[Comments]</a>
		<a class="font-bold text-[1.2rem] text-blue-800" href="/dynamicdata/about">[About]</a>
	</nav>
	{@render children?.()}
</Panel>
