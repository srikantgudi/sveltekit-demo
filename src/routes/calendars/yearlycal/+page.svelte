<script>
    import { Pagetitle, Panel} from '$lib';
    import Posts from '$lib/PostsList.svelte';
    import { DateTime } from 'luxon';
    import util from '$lib/util';
    export let data;
    $: dt = DateTime.now();
</script>

<main>
    <Panel cls="text-center">
        <div slot="title">
            <Pagetitle>
                <span class="text-2xl">Yearly Calendar:</span> <small>[days begin with 1 and week-days change :)]</small>
                <div>
                    Current Year: {dt.toFormat("yyyy")} | 
                    Years: 
                    <button onclick={() => {dt = dt.set({year: dt.year-10})}} class="bg-gray-300 text-zinc-800 px-2 rounded-sm">&laquo; Prev 10</button>
                    <button onclick={() => {dt = dt.set({year: dt.year-1})}} class="bg-gray-300 text-zinc-800 px-2 rounded-sm">&lsaquo; Prev year</button>
                    <button onclick={() => {dt = DateTime.now()}} class="cursor-pointer shadow-md hover:shadow-lg transition-all shadow-gray-200 bg-teal-300 text-zinc-800 p-1">[ TODAY ]</button>
                    <button onclick={() => {dt = dt.set({year: dt.year+1})}} class="bg-gray-300 text-zinc-800 px-2 rounded-sm"> Next year &rsaquo;</button>
                    <button onclick={() => {dt = dt.set({year: dt.year+10})}} class="bg-gray-300 text-zinc-800 px-2 rounded-sm"> Next 10 &raquo;</button>
                </div>
            </Pagetitle>
        </div>
        <div class="flex fap-1 flex-col items-center my-1">
            {#each data.months as m,i}
            <div class="flex items-center gap-2 my-1">
                <span class="bg-zinc-300 text-gray-800 font-bold p-1 py-2 w-10 h-12">{m}</span>
                <div class="flex gap-1 items-center wrap text-center">
                    {#each util.baseDaysArray(1) as d}
                    <div class="w-8"><div class="bg-blue-700">{dt.set({month: i+1,day:d}).toFormat('EEE')}</div><div class="bg-gray-200 text-zinc-800">{d}</div></div>
                    {/each}
                </div>
            </div>
            {/each}
        </div>
    </Panel>
</main>
