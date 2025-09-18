<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import ServiceCard from '$lib/components/cards/ServiceCard.svelte';
	import pb from '$lib/pocketbase';

	export let nodes: {
		id: string;
		name: string;
		description: string;
		image: string;
	}[]
</script>

<section class="section" id="nodi">
	<div class="container mx-auto py-8">
		<div class="mb-12">
				<SectionHeader
					preTitle="Nodi territorial"
					mainTitle="Ci potete raggiungere in queste cittá"
					center
				/>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{#each nodes as node}
				<div class="col-sm-6 col-lg-3">
					<ServiceCard
						iconSrc={pb.files.getURL(node, node.image)}
						title={node.name}
						description={node.description}
					/>
				</div>
			{/each}
		</div>
	</div>
</section>