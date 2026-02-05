<script>
    import { Pagetitle, Panel, Grid} from '$lib';
    import Posts from '$lib/PostsList.svelte';
    import { DateTime } from 'luxon';
    import util from '$lib/util';
    export let data;
    let dt = DateTime.now();
    let curmo = dt.month;
    let curyr = dt.curyr;
    $: startyear = dt.year - (dt.year % 10);
    $: today = DateTime.now().set({year: curyr, month: curmo});
    $: yearMarks = util.marksValueArray(util.yearsArray(startyear,10),44,dt.toFormat('yyyy'),3,4,'#ccc','orange');
    $: monthMarks = util.marksValueArray(data.months, 34, dt.toFormat('MMM'),3,4,'#9e9','cyan') ;
    $: dayMarks = util.marksValueArray(util.baseDaysArray(dt.month), 24, dt.day,3,4,'#a98','#ad0');
    $: weekdayMarks = util.marksValueArray(data.weekdays, 14, dt.toFormat('EEE'),2.5,4,'#abc','yellow');

    const setYear = (y) => {dt = dt.set({year:y});}
</script>

<main>
    <Panel cls="md:w-1/2 w-full border">
        <Pagetitle>Radial calendar</Pagetitle>
        <div class="px-10 gap-4 w-140 text-center">
            <div class="ml-30 text-lg text-amber-400">
                {dt.startOf('month').toFormat("EEE dd MMM yyyy")} -> {dt.endOf('month').toFormat("EEE dd MMM yyyy")}
                <div class="gap-8 text-xl cursor-pointer">
                    <button class="w-18 cursor-pointer bg-gray-600 hover:bg-gray-500 px-2 rounded-lg" onclick={() => {dt = dt.set({year:dt.year-10})}}>&laquo;-10</button>
                    <button class="w-18 cursor-pointer bg-teal-300 hover:bg-teal-300 text-zinc-800 hover:text-teal-300 hover:bg-zinc-800 px-2 rounded-lg" onclick={() => {dt = DateTime.now()}}>Today</button>
                    <button class="w-18 cursor-pointer bg-gray-600 hover:bg-gray-500 px-2 rounded-lg" onclick={() => {dt = dt.set({year:dt.year+10})}}>+10&raquo;</button>
                </div>
            </div>
            <svg viewBox="-50 -50 100 100" width="600">
                <circle r={49} />
                <circle r={39} stroke="blue" stroke-width="0.5"/>
                <circle r={28} stroke="blue" stroke-width="0.5"/>
                <circle r={20} stroke="blue" stroke-width="0.5"/>
                {#each yearMarks as m,y}
                    <rect rx="1" stroke="white" fill="none" stroke-width={y+startyear==dt.year ? '0.3' : '0'} cy={4} cx={4} x={m.x-5} y={m.y-4} width={10} height={6} class="rounded-sm" />
                    <text class="cursor-pointer"  x={m.x} y={m.y} 
                        font-size={m.fontsize} font-weight={m.fontwt} text-anchor="middle" fill={m.color}
                        onclick={setYear(m.val)}
                    >
                        {m.val}
                    </text>
                {/each}
                {#each monthMarks as m,i}
                    <rect rx="1" stroke="white" fill="none" stroke-width={i==dt.month-1 ? '0.3' : '0'} cy={4} cx={4} x={m.x-5} y={m.y-4} width={10} height={6} class="rounded-sm" />
                    <text class="cursor-pointer"  x={m.x} y={m.y} 
                        font-size={m.fontsize} font-weight={m.fontwt} text-anchor="middle" fill={m.color}
                        onclick={dt = dt.set({month: i+1})}
                    >
                        {m.val}
                    </text>
                {/each}
                {#each dayMarks as m,i}
                <rect rx="1" stroke="white" fill="none" stroke-width={i==dt.day ? '0.3' : '0'} cy={4} cx={4} x={m.x-2} y={m.y-4} width={4} height={6} class="rounded-sm" />
                <text class="cursor-pointer" x={m.x} y={m.y} 
                    font-size={m.fontsize} font-weight={m.fontwt} text-anchor="middle" fill={m.color}
                    onclick={() => {dt = dt.set({day: i+1})}}
                    >
                    {m.val}
                </text>
                {/each}
                {#each weekdayMarks as m,i}
                <rect rx="1" stroke="white" fill="none" stroke-width={i==dt.weekday ? '0.3' : '0'} cy={4} cx={4} x={m.x-5} y={m.y-4} width={10} height={6} class="rounded-sm" />
                <text class="cursor-pointer" x={m.x} y={m.y} 
                    font-size={m.fontsize} font-weight={m.fontwt} text-anchor="middle" fill={m.color}>
                    {m.val}
                </text>
                {/each}
            </svg>
        </div>
    </Panel>
</main>
