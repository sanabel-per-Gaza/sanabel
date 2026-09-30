<script lang="ts">
	/** Campo immagine: mostra l'immagine attuale, permette di sostituirla o tornare a quella predefinita. */
	export let id: string;
	export let label: string;
	export let currentUrl: string | null = null;
	export let hint = '';
	export let removable = true;
	/** File scelto dall'utente (da caricare al salvataggio) */
	export let file: File | null = null;
	/** true se l'utente ha chiesto di rimuovere l'immagine caricata */
	export let remove = false;

	let preview: string | null = null;

	function onChange(e: Event) {
		const input = e.currentTarget as HTMLInputElement;
		file = input.files?.[0] ?? null;
		remove = false;
		if (preview) URL.revokeObjectURL(preview);
		preview = file ? URL.createObjectURL(file) : null;
	}

	$: shown = preview ?? (remove ? null : currentUrl);
</script>

<div>
	<label for={id} class="field-label">{label}</label>
	<div class="flex flex-col gap-4 sm:flex-row sm:items-start">
		<div class="flex h-28 w-44 shrink-0 items-center justify-center overflow-hidden border border-helpo-purple/15 bg-helpo-light-gray">
			{#if shown}
				<img src={shown} alt="" class="h-full w-full object-cover" />
			{:else}
				<span class="px-3 text-center text-xs">Nessuna immagine</span>
			{/if}
		</div>
		<div class="flex-1 space-y-2">
			<input
				{id}
				type="file"
				accept="image/*"
				on:change={onChange}
				class="w-full text-sm file:mr-4 file:cursor-pointer file:border-0 file:bg-helpo-purple file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:text-white"
			/>
			{#if hint}<p class="field-hint">{hint}</p>{/if}
			{#if removable && currentUrl && !file}
				<label class="flex items-center gap-2 text-xs">
					<input type="checkbox" bind:checked={remove} class="accent-helpo-purple" />
					{remove ? 'L\'immagine verrà rimossa al salvataggio' : 'Rimuovi l\'immagine caricata'}
				</label>
			{/if}
		</div>
	</div>
</div>
