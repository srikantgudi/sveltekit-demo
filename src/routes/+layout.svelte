<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let  apptitle = "Sample SvelteKit App";
</script>

<svelte:head>
	<title>{apptitle}</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="flex items-center gap-1">
	<div class="text-4xl mr-24">{apptitle}</div>
	<div>
		[ <a href="/">Home</a> ]
		[ <a href="/zonetimes">Zone-Times</a> ]
		[ <a href="/dynamicdata">Dynamic-data</a> ]
		[ <a href="/calendars">Calendars</a> ]
		[ <a href="/sveltefeatures">Svelte-features</a> ]
		[ <a href="/about">About</a> ]
	</div>
</nav>
<main>
	{@render children?.()}
</main>
