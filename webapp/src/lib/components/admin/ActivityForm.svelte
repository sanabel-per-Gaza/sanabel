<script lang="ts">
	import type { RecordModel } from 'pocketbase';
	import { goto } from '$app/navigation';
	import { getAdminClient } from '$lib/stores/auth';
	import { errorMessage, slugify } from '$lib/admin';
	import RichTextEditor from './RichTextEditor.svelte';
	import ImageField from './ImageField.svelte';
	import pbPublic from '$lib/pocketbase';

	export let activity: RecordModel | null = null;

	const fields = ['title', 'slug', 'category', 'location', 'status', 'period', 'goal', 'donated', 'excerpt', 'content'] as const;
	const values: Record<(typeof fields)[number], string> = Object.fromEntries(
		fields.map((f) => [f, activity?.[f] ?? ''])
	) as Record<(typeof fields)[number], string>;

	let published = activity?.published ?? false;
	let image: File | null = null;
	let removeImage = false;
	let slugTouched = !!activity;
	let saving = false;
	let error = '';

	$: if (!slugTouched) values.slug = slugify(values.title);
	$: currentImage = activity?.image ? pbPublic.files.getURL(activity, activity.image) : null;

	async function handleSubmit() {
		error = '';
		saving = true;
		try {
			const pb = await getAdminClient();
			const data = new FormData();
			for (const f of fields) data.append(f, values[f]);
			data.append('published', String(published));
			if (image) data.append('image', image);
			else if (removeImage) data.append('image', '');

			if (activity) await pb!.collection('sanabel_projects').update(activity.id, data);
			else await pb!.collection('sanabel_projects').create(data);
			await goto('/admin/attivita?salvato=1');
		} catch (e) {
			error = errorMessage(e);
		} finally {
			saving = false;
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-6 rounded-sm bg-white p-6 shadow-sm md:p-8">
	<div>
		<label for="title" class="field-label">Titolo *</label>
		<input id="title" type="text" bind:value={values.title} required class="field-input" />
	</div>

	<div>
		<label for="slug" class="field-label">Indirizzo della pagina *</label>
		<input id="slug" type="text" bind:value={values.slug} on:input={() => (slugTouched = true)} required pattern="[a-z0-9\-]+" class="field-input font-mono" />
		<p class="field-hint">/attivita/{values.slug || '…'} — solo lettere minuscole, numeri e trattini</p>
	</div>

	<div class="grid gap-6 sm:grid-cols-2">
		<div>
			<label for="category" class="field-label">Categoria</label>
			<input id="category" type="text" bind:value={values.category} class="field-input" placeholder="Educazione, Supporto, Emergenza…" />
		</div>
		<div>
			<label for="location" class="field-label">Luogo</label>
			<input id="location" type="text" bind:value={values.location} class="field-input" placeholder="Gaza City, Khan Younis…" />
		</div>
		<div>
			<label for="status" class="field-label">Stato</label>
			<select id="status" bind:value={values.status} class="field-input">
				<option value="">— nessuno —</option>
				<option value="In corso">In corso</option>
				<option value="Sospeso">Sospeso</option>
				<option value="Raggiunto">Raggiunto</option>
			</select>
		</div>
		<div>
			<label for="period" class="field-label">Periodo</label>
			<input id="period" type="text" bind:value={values.period} class="field-input" placeholder="da ottobre 2025" />
		</div>
		<div>
			<label for="goal" class="field-label">Obiettivo</label>
			<input id="goal" type="text" bind:value={values.goal} class="field-input" placeholder="3.500 € al mese" />
		</div>
		<div>
			<label for="donated" class="field-label">Donato</label>
			<input id="donated" type="text" bind:value={values.donated} class="field-input" placeholder="2.000 €" />
		</div>
	</div>

	<div>
		<label for="excerpt" class="field-label">Estratto</label>
		<textarea id="excerpt" bind:value={values.excerpt} rows="2" class="field-input" placeholder="Breve riassunto mostrato in home e nelle anteprime"></textarea>
	</div>

	<div>
		<label for="content" class="field-label">Descrizione completa *</label>
		<RichTextEditor id="content" bind:value={values.content} minHeight="16rem" />
	</div>

	<ImageField id="image" label="Immagine" currentUrl={currentImage} bind:file={image} bind:remove={removeImage} />

	<label class="flex items-center gap-3">
		<input type="checkbox" bind:checked={published} class="h-4 w-4 accent-helpo-purple" />
		<span class="text-sm font-bold text-helpo-heading">Pubblicata (visibile sul sito)</span>
	</label>

	{#if error}
		<p class="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</p>
	{/if}

	<div class="flex flex-wrap gap-3 pt-2">
		<button type="submit" disabled={saving || !values.content} class="bg-helpo-purple px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-helpo-heading disabled:opacity-50">
			{saving ? 'Salvataggio…' : activity ? 'Salva modifiche' : 'Crea attività'}
		</button>
		<a href="/admin/attivita" class="inline-flex items-center px-6 py-3 text-xs font-bold uppercase tracking-wider no-underline hover:text-helpo-heading">Annulla</a>
		{#if activity?.published}
			<a href="/attivita/{activity.slug}" target="_blank" class="ml-auto inline-flex items-center text-xs font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">Vedi sul sito ↗</a>
		{/if}
	</div>
</form>
