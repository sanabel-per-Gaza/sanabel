<script lang="ts">
    import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
    
    export let data;
    const { posts, node } = data;
    let p = [...posts];

    $: if(node) {
        p = [...posts]
        console.log('posts', node, posts)
    }
</script>
<section class="section" id="nodi">
    <div class="container mx-auto py-8 mt-16">
        <div class="mb-12">
            <SectionHeader
                preTitle="Nodi territorial"
                mainTitle={node.charAt(0).toUpperCase() + node.slice(1)}
                center
            />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {#each p as post}
                {JSON.stringify(post)}
            {/each}
        </div>
    </div>
</section>