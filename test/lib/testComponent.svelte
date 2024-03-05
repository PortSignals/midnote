<script lang="js">
    let TestComponent;
    export let slots = [];
</script>

<svelte:component this={TestComponent}>
    {#each slots as testSlot}
        <slot />
    {/each}
</svelte:component>
