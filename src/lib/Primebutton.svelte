<script>
    let {onClick} = $props(); 
</script>
<button class="p-1 px-2 bg-gray-600 text-blue-200 rounded-sm" onclick={onClick}>
    <slot/>
</button>
