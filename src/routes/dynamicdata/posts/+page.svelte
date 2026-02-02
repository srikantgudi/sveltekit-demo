<script>
    import Posts from '$lib/PostsList.svelte';
    export let data;
</script>

<main>
    <Posts data={data.data} />
</main>