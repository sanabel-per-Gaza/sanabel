<script>
  import SectionHeader from "$lib/components/ui/SectionHeader.svelte";

  export let data
  const { posts } = data

</script>

<main>
    <section class="relative pt-32">
        <div class="py-8">
            <SectionHeader center preTitle="Eventi" mainTitle="Eventi che ci vedono coinvolti" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each posts as post}
                {JSON.stringify(post)}
            {/each}
        </div>
    </section>
</main>
