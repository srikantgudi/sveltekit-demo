<script>
    import { onMount } from 'svelte';
    import { todos } from '$lib/stores';
    import { Pagetitle, Panel } from '$lib';

    let todotext = '';

    onMount(() => {
        $todos = [...$todos, 'todo-1','todo-2'];
    })

    const addtodo = (e) => {
        if (e.key == 'Enter') {
            $todos = [...$todos, todotext];
            setTimeout(() => {
                todotext = '';
            },200)
        }
    }
</script>


<Panel>
    <Pagetitle>Store Demo (component)</Pagetitle>
    <div class="p-4">
        <div>
            <div class="text-2xl">Todos</div> 
            <span class="text-[1rem] text-gray-400">({$todos.length} todos}</span>
            <button class="bg-amber-700 p-1 px-2 rounded-sm" onclick={() => todos.set([])}>Clear</button>
        </div>
        <div class="my-2">Enter todo text:</div>
        <div>
            <input type="text" bind:value={todotext} placeholder="press enter to add text..." class="p-1 border rounded-sm" onkeyup={addtodo}/>
        </div>
        <div class="my-4">
            <div class="text-xl my-2">Todo List</div>
            <Panel>
                <ul>
                    {#each $todos as todo, i}
                    <li class="my-2">
                        <button 
                            onclick={() => $todos = $todos.filter((_,idx) => idx !== i)}
                            class="p-1 bg-[maroon] rounded-sm shadow shadow-gray-200 text-white">
                        &times</button>
                        {todo || '??'}
                    </li>
                    {:else}
                        <div class="p-2">* No todos found</div>
                    {/each}
                </ul>
            </Panel>
        </div>
    </div>
</Panel>