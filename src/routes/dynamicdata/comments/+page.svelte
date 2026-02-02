<script>
    import Comments from '$lib/CommentsList.svelte';
    export let data;
</script>

<main>
    <!-- {JSON.stringify(data.data)} -->
    <Comments data={data.data} />
</main>
