<script>
	import favicon from '$lib/assets/favicon.svg';
    import { Pagetitle, Panel } from '$lib';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<Panel>
	<nav class="flex items-center gap-1 bg-blue-900">
		<Pagetitle size="3xl">Calendar View: </Pagetitle>
			<a href="/calendars/">[ Monthly ]</a>
			<a href="/calendars/radialcal">[ Radial ]</a>
			<a href="/calendars/yearlycal">[ Yearly ]</a>
	</nav>
	
	{@render children?.()}
</Panel>
