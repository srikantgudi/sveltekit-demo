<script>
    import { Pagetitle, Panel, Clock, util} from '$lib';
    
    import { DateTime } from 'luxon';

    const dtfmt = 'EEE D ttt';

	const allTimezones = $state(Intl.supportedValuesOf('timeZone'));
	let regions = Array.from(new Set(
    allTimezones
        .filter(x => x.includes('/'))
        .map(x => x.slice(0, x.indexOf('/')))
	));
	let zstart = $state(0);
	let zto = $derived(zstart+10);
	let minidx = $state(10);
	let maxidx = $derived(allTimezones.length - 10);
	let zang = $derived(360/10);
	let region = $state('Africa');
	let zoneSet = $derived(allTimezones.filter(x => x.includes(region)));
	let zone = $derived(zoneSet[0]);
    let selectSize = $derived(zoneSet.length > 20 ? 20 : zoneSet.length);
	let zonemarks = $derived(util.marksValueArray(zoneSet,38,zone,3,5,'#999','#099'));
	
	let ztime = $derived(new Date(new Date().toLocaleString('en-US',{timeZone:zone})));
	let ang = $derived.by(() => ({
		h: (ztime.getHours() * 30 + ztime.getMinutes() / 2) - 90,
		m: (ztime.getMinutes() * 6 + ztime.getSeconds() / 10) - 90,
		s: (ztime.getSeconds() * 60) - 90
	}));
</script>

<Panel>
    <Pagetitle size="3xl">Zone Times</Pagetitle>
    <div class="grid grid-cols-3 p-2 gap-8">
        <div class="col-span-1">
            <div>
                <div class="flex flex-wrap justify-center">Select a Region:</div>
                <div class="my-4 flex flex-wrap justify-center gap-1">
                    {#each regions as r}
                        <button class="p-1 w-18 text-sm bg-{region === r ? 'teal-400' : 'gray-300'} text-black" onclick={() => {region = r}}>{r}</button>
                    {/each}
                </div>
            </div>
            <div class="my-2 flex flex-wrap justify-center gap-1">
                <div>
                    <span class="text-blue-800 rounded-t-lg  bg-gray-300 p-2">Zones in {region}</span>
                    <button class="rounded-t-lg p-1 px-2 bg-gray-300 text-black" onclick={() => {
                        if (zstart+10 > minidx) {
                            zstart -= 10;
                        }
                    }}>&laquo Previous 10</button>
                    <button class="rounded-t-lg p-1 px-2 bg-gray-300 text-black" onclick={() => {
                        if (zstart + 10 < maxidx) {
                            zstart += 10;
                        }
                    }}> Next 10 &raquo;</button>
                </div>
            </div>
            <div class="flex justify-center">
                <select class="p-1 shadow-lg shadow-teal-600" size={selectSize} bind:value={zone}>
                    {#each zoneSet as z}
                    <option class="px-2">{z}</option>
                    {/each}
                </select>
            </div>

        </div>
        <div class="col-span-2">
            <Clock {zone} wid={500} />
        </div>
    </div>
</Panel>