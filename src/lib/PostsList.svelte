<script>
    import {Pagetitle} from '$lib';
    export let data = [];
</script>
<div>
    <Pagetitle>Posts: <small>{data.length} records fetched</small></Pagetitle>
    <div style="height:70vh;overflow-y: auto;">
        <table>
            <thead>
                <tr>
                    <td class="text-right">Id</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
            </thead>
            <tbody>
                {#each data as rec (rec.id)}
                <tr>
                    <td class="text-right">{rec.id}</td>
                    <td>{rec.title}</td>
                    <td>{rec.body}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>