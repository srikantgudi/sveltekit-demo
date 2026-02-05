<script>
    import { DateTime } from 'luxon';
    import {util} from '$lib';
    let { zone = 'Asia/Kolkata', wid = 300 } = $props();
    let customtime = $state('');
    let localtime = $derived.by(() => customtime ? DateTime.fromISO(customtime) : DateTime.now());
    let ztime = $derived(localtime.setZone(zone));

    let hoursPerDay = $state(12);
    let hoursArray = $derived(Array.from({length: hoursPerDay}, (_, i) => i));
    let hourAngle = $derived(360/hoursPerDay);
    let minutesArray = Array.from({length:60},(_,i) =>i);
    let hoursValueArray =   $derived(util.marksValueArray(hoursArray,36,ztime.hour,3,5,'#333','#009'));
    let minutesValueArray = $derived(util.marksValueArray(minutesArray,42,ztime.minute,3,5,'#333','#009'));
    let thrlocal = $derived(localtime.hour);
    let tmilocal = $derived(localtime.minute);
    let tselocal = $derived(localtime.second);

    let anglocal = $derived({
        h: (thrlocal * 30) + (tmilocal / 2) - 90,
        m: (tmilocal * 6) + (tselocal / 10) - 90,
        s: (tselocal * 6) - 90
    });

    let ang = $derived({
        h: (ztime.hour * hourAngle + ztime.minute / 2) - 90,
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
        localtime = DateTime.fromISO(customtime || DateTime.now().toISO());
        ztime = localtime.setZone(zone);
    }
    const setLocal = () => {
        localtime = DateTime.now();
    }
</script>

<main class="w-auto py-4">
    <div>
        <div class="flex gap-1 items-center">
            <div class="text-3xl">{zone} ::</div>
            <div class="text-2xl">
                {ztime.toFormat("EEE DD TTT")}
            </div>
        </div>
        <div class="">
            <div class="text-xl">Custom time input
                <input type="datetime-local" bind:value={customtime} class="p-2 bg-gray-500">
                <button class="cursor-pointer bg-gray-300 text-blue-800 p-2 rounded-sm hover:bg-gray-800 hover:text-white" onclick={setLocal}>View Local</button>
                <button class="cursor-pointer bg-gray-300 text-blue-800 p-2 rounded-sm hover:bg-gray-800 hover:text-white" onclick={setCustom}>View Custom</button>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-2 gap-24 justify-center">
        <div>
            <svg viewBox="-50 -50 100 100" width={wid}>
                <circle r={49} fill="lightcyan" stroke="navy" stroke-width="0.5" />
                {#each minutesValueArray as dm}
                <text x={dm.x} y={dm.y} font-size={dm.fontsize} fill={dm.color} text-anchor="middle" font-weight={dm.fontwt}>{dm.val}</text>
                {/each}
                {#each hoursValueArray as mm}
                <text x={mm.x} y={mm.y} font-size={mm.fontsize} fill={mm.color} text-anchor="middle" font-weight={400}>{mm.val || 12}</text>
                {/each}
                <!-- zone time -->
                <polyline points="-4,0 4,-1 30,0 4,1 -4,0" fill={clr} stroke={clr} stroke-linecap="round" transform="rotate({ang.h})" />
                <polyline points="-4,0 4,-1 42,0 4,1 -4,0" fill={clr} stroke={clr} stroke-linecap="round" transform="rotate({ang.m})" /> 
                <!-- local time -->
                <line x1={-4} x2={30} stroke="maroon" stroke-width="1" stroke-linecap="round" transform="rotate({anglocal.h})" />
                <line x1={-4} x2={42} stroke="maroon" stroke-width="1" stroke-linecap="round" transform="rotate({anglocal.m})" /> 
            </svg>
        </div>
    </div>
</main>