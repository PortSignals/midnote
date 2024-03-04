<script lang='ts'>
  import { slide } from 'svelte/transition';
  
  import { onMount } from 'svelte';
  
  let visible = false
  
  onMount(()=> {
  })
</script>

<div class="expandable">
  <div class="expandable-label">
    <button class="expandable-button" on:click="{()=> {visible = !visible}}"><slot name="label"></slot></button>
  </div>
  {#if visible}
  <section class="expandable-content" transition:slide>
    <slot name="content"></slot>
  </section>
{/if}
</div>

<style lang='css'>
  .expandable {
    margin: 0;
  }
  .expandable-label {
    background: black;
    color: hsl(0,0%,70%);
    border-left: medium solid cyan;
    padding-left:12px;
    border-bottom: thin solid hsl(0,0%,15%);
  }
  .expandable-button {
    background: none;
    border: none;
    color: hsl(0,0%,70%);
    cursor: pointer;
    font-size: 0.9em;
    margin: none;
    padding: none;
  }
  .expandable-content {
    background: hsl(0,0%,20%);
    color: white;
    padding:12px;
  }
</style>