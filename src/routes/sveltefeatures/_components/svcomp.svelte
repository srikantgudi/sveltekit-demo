<script>
    import {Pagetitle, Panel} from '$lib';
    import Contact from './contact.svelte';
    import About from './about.svelte';

    let mycomp = Contact;
</script>

<Panel>
    <Pagetitle>"svelte-component" demo</Pagetitle>

    <div class="p-4 flex justify-evenly">
        <button class="bg-gray-600 hover:bg-gray-700 hover:shadow shadow-sm shadow-teal-400 p-1 px-4 rounded-sm" onclick={() => mycomp=Contact}>Contact</button>
        <button class="bg-gray-600 hover:bg-gray-700 hover:shadow shadow-sm shadow-teal-400 p-1 px-4 rounded-sm" onclick={() => mycomp=About}>About</button>
    </div>
    <div>
        <div class="py-4 px-8">
            <svelte:component this={mycomp}></svelte:component>
        </div>
    </div>
</Panel>
