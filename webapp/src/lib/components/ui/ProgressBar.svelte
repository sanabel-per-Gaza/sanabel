<!-- src/lib/components/ui/ProgressBar.svelte -->
<script>
  export let percentage = 0;
</script>

<div class="relative w-full h-3.5 bg-helpo-light-gray rounded-full">
  <div 
    class="absolute top-0 left-0 h-full bg-green-400 rounded-full" 
    style="width: {percentage}%;"
  >
    <div class="absolute -top-7 right-0 text-helpo-heading font-bold">
      {percentage}%
    </div>
  </div>
</div>