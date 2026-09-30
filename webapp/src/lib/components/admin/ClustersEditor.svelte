<script lang="ts">
	import type { Cluster } from '$lib/content';

	export let id: string;
	export let value: Cluster[] = [];

	const addCluster = () => (value = [...value, { title: '', items: [{ verb: '', text: '' }] }]);
	const removeCluster = (i: number) => (value = value.filter((_, j) => j !== i));
	function addItem(i: number) {
		value[i].items = [...(value[i].items ?? []), { verb: '', text: '' }];
	}
	function removeItem(i: number, k: number) {
		value[i].items = value[i].items.filter((_, j) => j !== k);
	}
</script>

<div class="grid gap-3 xl:grid-cols-3" {id}>
	{#each value as cluster, i}
		<div class="border border-helpo-purple/15 bg-helpo-light-gray/60 p-4">
			<div class="mb-3 flex items-center justify-between">
				<span class="text-xs font-bold uppercase tracking-wider text-helpo-purple">Area {i + 1}</span>
				<button type="button" on:click={() => removeCluster(i)} class="text-xs font-bold uppercase tracking-wider text-red-600">Rimuovi</button>
			</div>
			<input type="text" bind:value={cluster.title} placeholder="Nome dell'area" aria-label="Nome dell'area {i + 1}" class="field-input mb-3 font-bold" />
			{#each cluster.items ?? [] as item, k}
				<div class="mb-2 border-l-2 border-helpo-yellow pl-3">
					<input type="text" bind:value={item.verb} placeholder="Verbo (es. Distribuire)" aria-label="Verbo" class="field-input mb-1 py-2" />
					<input type="text" bind:value={item.text} placeholder="Descrizione" aria-label="Descrizione" class="field-input py-2" />
					<button type="button" on:click={() => removeItem(i, k)} class="mt-1 text-[11px] text-red-600 hover:underline">rimuovi voce</button>
				</div>
			{/each}
			<button type="button" on:click={() => addItem(i)} class="text-xs font-bold text-helpo-purple hover:underline">+ voce</button>
		</div>
	{/each}
	<div>
		<button type="button" on:click={addCluster} class="text-xs font-bold uppercase tracking-wider text-helpo-purple hover:underline">+ Aggiungi area</button>
	</div>
</div>
