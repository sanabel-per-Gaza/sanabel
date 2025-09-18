<script lang="ts">
    import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
    import pb from '$lib/pocketbase.js';
    
    export let data;
    const { post } = data
</script>

<section class="section" id="nodi">
    <div class="container mx-auto py-8 mt-16">
        <div class="mb-12">
            <SectionHeader
                preTitle="Nodi territorial"
                mainTitle={post.title}
                center
            />
        </div>
        <div class="bg-black">
            <img src={pb.files.getURL(post, post.image)} alt={post.title} class="w-full h-48 object-cover" />
            <div class="p-4">
                <h3 class="text-lg font-bold text-white mb-2">{post.title}</h3>
                <p class="text-white mb-4">{post.article}</p>
                {#if post.url}
                    <a href={post.url} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">Read more</a>
                {/if}
            </div>
        </div>
    </div>
</section>