<script>
    import { DateTime } from 'luxon';

    let { zone = 'Asia/Kolkata', wid = 300 } = $props();

    let customtime = $state('');

    let localtime = $derived.by(() => customtime ? DateTime.fromISO(customtime) : DateTime.now());
    let thrlocal = $derived(localtime.hour);
    let tmilocal = $derived(localtime.minute);
    let tselocal = $derived(localtime.second);
    let anglocal = $derived({
        h: (thrlocal * 30) + (tmilocal / 2) - 90,
        m: (tmilocal * 6) + (tselocal / 10) - 90,
        s: (tselocal * 6) - 90
    });

    let ztime = $derived(localtime.setZone(zone));
    let ang = $derived({
        h: (ztime.hour * 30 + ztime.minute / 2) - 90,
        m: (ztime.minute * 6 + ztime.second / 10) - 90, 
        s: (ztime.second * 6) - 90, 
    });
    let hr = $derived(ztime.hour);
    let clr = $derived.by(() => {
        if (hr < 3) return '#333';
        if (hr < 6) return '#666';
        if (hr < 12) return 'blue';
        if (hr < 18) return 'teal';
        return 'navy'; 
    })

    const setCustom = () => {
        localtime = DateTime.fromISO(customtime);
        ztime = localtime.setZone(zone);
    }
    const setLocal = () => {
        localtime = DateTime.now();
    }
</script>

<main class="w-auto py-4">
    <div class="text-center mb-8">
        <div class="text-2xl">{zone}</div>
        <div class="text-3xl">
            {ztime.toFormat("EEE dd MMM HH:mm a Z")}
        </div>
    </div>
    <div class="grid grid-cols-2 gap-24 justify-center">
        <div>
            <svg viewBox="-50 -50 100 100" width={wid}>
                <circle r={46} fill="lightcyan" stroke="navy" stroke-width="0.5" />
                <!-- zone time -->
                <polyline points="-4,0 4,-1 30,0 4,1 -4,0" fill={clr} stroke={clr} stroke-linecap="round" transform="rotate({ang.h})" />
                <polyline points="-4,0 4,-1 42,0 4,1 -4,0" fill={clr} stroke={clr} stroke-linecap="round" transform="rotate({ang.m})" /> 
                <!-- local time -->
                <line x1={-4} x2={30} stroke="maroon" stroke-width="1" stroke-linecap="round" transform="rotate({anglocal.h})" />
                <line x1={-4} x2={42} stroke="maroon" stroke-width="1" stroke-linecap="round" transform="rotate({anglocal.m})" /> 
            </svg>
        </div>
        <div class="col-span-1 px-4">
            <div class="my-4 text-xl">Custom time input</div>
            <div class="my-4">
                <input type="datetime-local" bind:value={customtime} class="p-1 bg-gray-500">
            </div>
            <div class="my-4">
                <button class="cursor-pointer bg-gray-300 text-blue-800 p-2 rounded-sm hover:bg-gray-800 hover:text-white" onclick={setLocal}>View Local</button>
                <button disabed={!customtime} class="cursor-pointer bg-gray-300 text-blue-800 p-2 rounded-sm hover:bg-gray-800 hover:text-white" onclick={setCustom}>View Custom</button>
            </div>
        </div>
    </div>
</main>