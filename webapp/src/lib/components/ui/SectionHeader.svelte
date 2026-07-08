<!-- src/lib/components/ui/SectionHeader.svelte -->
<script>
  export let preTitle = '';
  export let mainTitle = '';
  export let center = false;
</script>

<div class:text-center={center} class="heading heading--primary {center ? 'mx-auto max-w-2xl' : ''}">
  <span class="text-gray-400 font-bold mb-2.5 inline-block">{preTitle}</span>
  <h2 class="text-3xl md:text-4xl lg:text-5xl text-helpo-heading tracking-tight mb-0">
    {#if mainTitle}
      {mainTitle}
    {:else}
      <slot name="heading" />
    {/if}
  </h2>
</div>