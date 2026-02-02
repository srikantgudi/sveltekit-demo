<script>
    import {Panel, Pagetitle, util} from '$lib';
    
    let months = $state(util.months);
    let selected = $state(months.slice(2,5));
</script>

<Panel>
    <div class="flex gap-2">
        <Pagetitle>Checkbox selection</Pagetitle>
        <button onclick={() => {selected = months.slice(2,5)}} class="bg-gray-400 p-1">Reset</button>
    </div>
    <div class="grid grid-cols-2 gap-2 p-2">
        <div>
            <div>Select values</div>
            <div>
                {#each util.months as mo}
                <div class="ml-4 hover:bg-gray-400 cursor-pointer">
                    <label>
                        <input type="checkbox" value={mo} bind:group={selected} />
                        {mo}</label>
                    </div>
                {/each}
            </div>
        </div>
        <div>
            <div>Selected values</div>
            <div>
                {#each selected as sel}
                <div class="flex">
                    <div class="w-10">{sel}</div> 
                </div>
                {/each}
            </div>
        </div>
    </div>
</Panel>