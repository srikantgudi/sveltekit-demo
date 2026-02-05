<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let  apptitle = "Sample SvelteKit App";
</script>

<svelte:head>
	<title>{apptitle}</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<style>
	nav a {color:blue;padding:0.5rem;}
	a:hover {color:cyan;background-color: blue;}
</style>

<nav class="flex items-center gap-1">
	<div class="text-4xl mr-24">{apptitle}</div>
	<div class="bg-gray-300 p-2">
	<a href="/">[Home]</a>
	<a href="/zonetimes">[Zone-Times]</a>
	<a href="/calendars">[Calendars]</a>
	<a href="/dynamicdata">[Dynamic-data]</a>
	</div>
</nav>

<main>
	{@render children?.()}
</main>
