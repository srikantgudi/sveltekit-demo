<script>
    import {Pagetitle} from '$lib';

    export let data = [];
</script>
<div>
    <Pagetitle>Comments: <small>{data.length} records fetched</small></Pagetitle>
    <div style="height:70vh;overflow-y: auto;">
        <table>
            <thead>
                <tr>
                    <td align="right" width="5%">Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Body</td>
                </tr>
            </thead>
            <tbody>
                {#each data as rec (rec.id)}
                <tr>
                    <td align="right">{rec.id}</td>
                    <td>{rec.name}</td>
                    <td>{rec.email}</td>
                    <td>{rec.body}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>