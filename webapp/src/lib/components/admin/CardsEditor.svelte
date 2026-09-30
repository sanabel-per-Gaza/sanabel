<script lang="ts">
	import type { Card } from '$lib/content';

	export let id: string;
	export let value: Card[] = [];

	const add = () => (value = [...value, { title: '', text: '' }]);
	const remove = (i: number) => (value = value.filter((_, j) => j !== i));
	function move(i: number, dir: -1 | 1) {
		const next = [...value];
		[next[i], next[i + dir]] = [next[i + dir], next[i]];
		value = next;
	}
</script>

<div class="space-y-3" {id}>
	{#each value as card, i}
		<div class="border border-helpo-purple/15 bg-helpo-light-gray/60 p-4">
			<div class="mb-3 flex items-center justify-between gap-2">
				<span class="text-xs font-bold uppercase tracking-wider text-helpo-purple">Riquadro {i + 1}</span>
				<div class="flex gap-3 text-xs font-bold">
					<button type="button" disabled={i === 0} on:click={() => move(i, -1)} class="text-helpo-purple disabled:opacity-30" aria-label="Sposta su">↑</button>
					<button type="button" disabled={i === value.length - 1} on:click={() => move(i, 1)} class="text-helpo-purple disabled:opacity-30" aria-label="Sposta giù">↓</button>
					<button type="button" on:click={() => remove(i)} class="uppercase tracking-wider text-red-600">Rimuovi</button>
				</div>
			</div>
			<input type="text" bind:value={card.title} placeholder="Titolo" aria-label="Titolo del riquadro {i + 1}" class="field-input mb-2 font-bold" />
			<textarea bind:value={card.text} rows="3" placeholder="Testo" aria-label="Testo del riquadro {i + 1}" class="field-input"></textarea>
		</div>
	{/each}
	<button type="button" on:click={add} class="text-xs font-bold uppercase tracking-wider text-helpo-purple hover:underline">+ Aggiungi riquadro</button>
</div>
