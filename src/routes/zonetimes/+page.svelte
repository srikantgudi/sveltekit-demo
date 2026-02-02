<script>
    import { Pagetitle, Panel, Clock} from '$lib';
    
    import { DateTime } from 'luxon';

    let zone = $state('Asia/Kolkata');

    const dtfmt = 'EEE D ttt';

    const timeZones = Intl.supportedValuesOf('timeZone');

</script>

<Panel>
    <Pagetitle size="3xl">Zone Times</Pagetitle>
    <div class="grid grid-cols-3 p-2">
        <div class="col-span-1">
            <div class="p-1 px-4">Select zone</div>
            <select class="border text-xl p-1 px-4 w-full" size={20} bind:value={zone}>
                {#each timeZones as tzone}
                <option class="py-1">{tzone}</option>
                {/each}
            </select>
        </div>
        <div class="col-span-2">
            <Clock {zone} wid={500} />
        </div>
    </div>
</Panel>