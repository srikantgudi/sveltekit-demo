<script>
    import { Pagetitle, Panel, Clock} from '$lib';
    import { DateTime } from 'luxon';
    import calmod from '$lib/calendarmod';

    let today = DateTime.now();
    let curdt = DateTime.now();
    let days = [];
    let years = [];

    $: start = curdt.startOf('month');

    $: startyear = curdt.year - (curdt.year % 10);

    $: {
        years = [];
        for (let y=0; y < 10; y++) {
            years.push(startyear+y);
        }
    }

    $: {
        days = [];
        start.set({day:1});
        for (let w=0; w < start.weekday%7; w++) {
            days.push('*');
        }
        for (let d=0; d < start.endOf('month').day; d++) {
            days.push(d+1);
        }
    }

    const setYears = (delta) => {
        curdt = curdt.set({year: curdt.year+delta, day: 1});
    }

    const setYear = (y) => {
        curdt = curdt.set({year:y});
    }

    const setMonth = (i) => {
        curdt = curdt.set({month: i+1, day: 1});
    }

</script>

<main>
    <Panel>
        <div >
            <div class="flex items-center justify-center gap-2 my-2">
                <span>Years :: </span>
                <button on:click={() => setYears(-20)} class="cursor-pointer shadow-md hover:shadow-lg transition-all shadow-gray-200 w-18 bg-gray-700 text-zinc-100 p-1">&laquo; -20</button>
                <button on:click={() => setYears(-10)} class="cursor-pointer shadow-md hover:shadow-lg transition-all shadow-gray-200 w-18 bg-gray-700 text-zinc-100 p-1">&lsaquo; -10</button>
                <button on:click={() => {curdt = today}} class="cursor-pointer shadow-md hover:shadow-lg transition-all shadow-gray-200 bg-teal-300 text-zinc-800 p-1">[ TODAY ]</button>
                <button on:click={() => setYears(+10)} class="cursor-pointer shadow-md hover:shadow-lg transition-all shadow-gray-200 w-18 bg-gray-700 text-zinc-100 p-1">+10 &rsaquo;</button>
                <button on:click={() => setYears(+20)} class="cursor-pointer shadow-md hover:shadow-lg transition-all shadow-gray-200 w-18 bg-gray-700 text-zinc-100 p-1">+20 &raquo;</button>
            </div>
            <Pagetitle size="2xl">Monthly Calendar :: {curdt.toFormat("MMMM yyyy")}</Pagetitle>
        </div>
        <div>
            <div class="grid grid-cols-10 gap-1">
                {#each years as yr}
                <button on:click={() => setYear(yr)} class="bg-gray-700 text-zinc-100 p-1">{yr}</button>
                {/each}
            </div>
            <div class="grid grid-cols-12 gap-1 text-center">
                {#each calmod.months as mo,i}
                <button on:click={(e) => setMonth(i)} class="p-1 bg-gray-300 text-slate-800 rounded-t-md">{mo}</button>
                {/each}
            </div>
            <div  class="my-2 grid grid-cols-7 gap-1 text-center">
                {#each calmod.weekdays as wd}
                <span class="rounded-t-md bg-gray-800 shadow shadow-white text-gray-200 p-2">
                    {wd}
                </span>
                {/each}
            </div>
            <div class="grid grid-cols-7 gap-1 text-center">
                {#each days as d}
                <span class="p-4 bg-zinc-300 font-bold text-3xl text-blue-800">{d}</span>
                {/each}
            </div>
        </div>
    </Panel>
</main>
