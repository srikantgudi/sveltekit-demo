<script>
    import {Pagetitle, Panel} from '$lib';
    import Storedemo from './_components/storedemo.svelte';
    import Svcompdemo from './_components/svcomp.svelte';
    import Svcheckbox from './_components/svcheckbox.svelte';
</script>

<Panel>
    <Pagetitle size="3xl">Svelte-features</Pagetitle>

    <div class="flex justify-evenly gap-1">
        <Storedemo />
        <Svcompdemo />
        <Svcheckbox />
    </div>
</Panel>