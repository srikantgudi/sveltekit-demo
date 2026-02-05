<script>
    import { Pagetitle, Panel, Clock} from '$lib';
</script>

<Panel>
    <Pagetitle size="3xl">@Home</Pagetitle>
    <Pagetitle size="xl">Welcome to Sample SvelteKit Demo App</Pagetitle>
    <div class="h-160 mt-8">
        <ul class="ml-12 list-['|>']">
            <li class="px-4">Home - this page</li>
            <li class="px-4">Zone times:
                <ul class="ml-8 list-disc">
                    <li class="pl-2">View time of selected zone</li>
                    <li class="pl-2">User can view a custom time by selecting a custom input time</li>
                </ul>
            </li>
            <li class="px-4">Calendars - core feature of the app
                <ul class="ml-8 list-disc">
                    <li>**Monthly**  - Regular calendar with year navigation  `[-20] [-10] [Today] [+10] [+20]`</li>
                    <li>**Radial** - Original circular visualization (my invention)</li>
                    <li>**Yearly** - Complete annual overview - with year navigatio</li>
                </ul>
            </li>
            <li class="px-4">
                <p>Dynamic data:
                <ul class="ml-8 list-disc">
                    <li>to view various API data from <a style="color:cyan" href="https://jsonplaceholder.typicode.com">https://jsonplaceholder.typicode.com</a></li>
                    <li>This uses inner layout and router outlet</li>
                </ul>
            </li>
        </ul>
    </div>
</Panel>
