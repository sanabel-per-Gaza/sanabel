<script lang="ts">
	import { onMount } from 'svelte';
	import type { RecordModel } from 'pocketbase';
	import { getAdminClient } from '$lib/stores/auth';
	import { errorMessage } from '$lib/admin';
	import { CONTENT_COLLECTION, defaults, IMAGE_FIELDS, JSON_FIELDS, type SiteContent } from '$lib/content';
	import { fieldGroups } from '$lib/content/fields';
	import RichTextEditor from '$lib/components/admin/RichTextEditor.svelte';
	import ImageField from '$lib/components/admin/ImageField.svelte';
	import CardsEditor from '$lib/components/admin/CardsEditor.svelte';
	import ClustersEditor from '$lib/components/admin/ClustersEditor.svelte';

	type ImageKey = (typeof IMAGE_FIELDS)[number];

	let record: RecordModel | null = null;
	let values: Record<string, any> = structuredClone(defaults);
	let files: Partial<Record<ImageKey, File | null>> = {};
	let removals: Partial<Record<ImageKey, boolean>> = {};
	let imageUrls: Partial<Record<ImageKey, string | null>> = {};

	let loading = true;
	let saving = false;
	let collectionMissing = false;
	let error = '';
	let savedAt = '';
	let snapshot = '';
	let activeGroup = fieldGroups[0].id;
	let formKey = 0; // rimonta gli editor dopo il caricamento

	const isImage = (key: string): key is ImageKey => (IMAGE_FIELDS as readonly string[]).includes(key);
	const isJson = (key: string) => (JSON_FIELDS as readonly string[]).includes(key);
	const hasText = (v: unknown) =>
		Array.isArray(v) ? v.length > 0 : typeof v === 'string' ? v.replace(/<[^>]*>/g, '').trim() !== '' : !!v;

	async function load() {
		const pb = await getAdminClient();
		try {
			const list = await pb!.collection(CONTENT_COLLECTION).getList(1, 1, { requestKey: null });
			record = list.items[0] ?? null;
		} catch (e: any) {
			if (e?.status === 404) collectionMissing = true;
			else error = errorMessage(e, 'Impossibile caricare i contenuti.');
		}

		const next: Record<string, any> = structuredClone(defaults);
		for (const key of Object.keys(defaults)) {
			if (isImage(key)) {
				imageUrls[key] = record?.[key] ? pb!.files.getURL(record, record[key]) : (defaults[key as keyof SiteContent] as string);
			} else if (record && hasText(record[key])) {
				next[key] = isJson(key) ? structuredClone(record[key]) : record[key];
			}
		}
		values = next;
		snapshot = JSON.stringify(next);
		files = {};
		removals = {};
		formKey += 1;
	}

	onMount(async () => {
		const hash = location.hash.slice(1);
		if (fieldGroups.some((g) => g.id === hash)) activeGroup = hash;
		await load();
		loading = false;
	});

	async function save() {
		error = '';
		saving = true;
		try {
			const pb = await getAdminClient();
			const data = new FormData();
			for (const key of Object.keys(defaults)) {
				if (isImage(key)) {
					if (files[key]) data.append(key, files[key]!);
					else if (removals[key]) data.append(key, '');
				} else if (isJson(key)) {
					data.append(key, JSON.stringify(values[key] ?? []));
				} else {
					data.append(key, values[key] ?? '');
				}
			}
			if (record) record = await pb!.collection(CONTENT_COLLECTION).update(record.id, data);
			else record = await pb!.collection(CONTENT_COLLECTION).create(data);
			await load();
				savedAt = new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
		} catch (e) {
			error = errorMessage(e);
		} finally {
			saving = false;
		}
	}

	function selectGroup(id: string) {
		activeGroup = id;
		history.replaceState(history.state, '', `#${id}`);
	}

	function resetField(key: keyof SiteContent) {
		if (!confirm('Ripristinare il testo originale di questo campo?')) return;
		values[key] = structuredClone(defaults[key]);
		formKey += 1;
	}

	$: dirty =
		snapshot !== '' &&
		(snapshot !== JSON.stringify(values) ||
			Object.values(files).some(Boolean) ||
			Object.values(removals).some(Boolean));

	$: group = fieldGroups.find((g) => g.id === activeGroup)!;
</script>

<svelte:head>
	<title>Testi e immagini — Admin Sanabel</title>
</svelte:head>

<svelte:window
	on:beforeunload={(e) => {
		if (dirty && !saving) e.preventDefault();
	}}
/>

<div class="max-w-4xl pb-24">
	<h1 class="text-2xl">Testi e immagini</h1>
	<p class="mt-2 text-sm leading-6">
		Modifica i testi e le foto delle pagine. Le modifiche sono visibili sul sito appena premi <strong>Salva</strong>.
		Se lasci un campo vuoto il sito mostra il testo originale.
	</p>

	{#if collectionMissing}
		<div class="mt-6 rounded-sm border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900" role="alert">
			<p class="font-bold">La collection «{CONTENT_COLLECTION}» non esiste ancora su PocketBase.</p>
			<p class="mt-1">Il sito sta mostrando i testi predefiniti. Per poterli modificare importa lo schema come descritto in <code>pb_schema/README.md</code>.</p>
		</div>
	{/if}

	{#if loading}
		<p class="mt-8">Caricamento…</p>
	{:else}
		<div class="sticky top-0 z-10 -mx-4 mt-8 overflow-x-auto bg-helpo-light-gray px-4 py-3 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
			<div class="flex gap-2" role="tablist" aria-label="Pagine">
				{#each fieldGroups as g}
					<button
						type="button"
						role="tab"
						aria-selected={g.id === activeGroup}
						on:click={() => selectGroup(g.id)}
						class="whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors {g.id === activeGroup
							? 'bg-helpo-purple text-white'
							: 'bg-white text-helpo-heading hover:bg-helpo-purple/10'}"
					>
						{g.title}
					</button>
				{/each}
			</div>
		</div>

		<form on:submit|preventDefault={save} class="mt-4">
			<div class="rounded-sm bg-white p-6 shadow-sm md:p-8" role="tabpanel">
				<div class="mb-8 flex flex-wrap items-start justify-between gap-3 border-b border-helpo-purple/10 pb-5">
					<div>
						<h2 class="text-xl">{group.title}</h2>
						<p class="mt-1 text-sm">{group.description}</p>
					</div>
					{#if group.page}
						<a href={group.page} target="_blank" class="text-xs font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">Vedi la pagina ↗</a>
					{/if}
				</div>

				{#key `${activeGroup}-${formKey}`}
					<div class="space-y-8">
						{#each group.fields as field (field.key)}
							{@const id = `f-${field.key}`}
							<div>
								{#if field.type === 'image' && isImage(field.key)}
									<ImageField
										{id}
										label={field.label}
										hint={field.hint ?? ''}
										currentUrl={imageUrls[field.key] ?? null}
										removable={!!record?.[field.key]}
										bind:file={files[field.key]}
										bind:remove={removals[field.key]}
									/>
								{:else}
									<div class="mb-1.5 flex items-baseline justify-between gap-3">
										<label for={id} class="field-label mb-0">{field.label}</label>
										{#if JSON.stringify(values[field.key]) !== JSON.stringify(defaults[field.key])}
											<button type="button" class="shrink-0 text-[11px] text-helpo-purple hover:underline" on:click={() => resetField(field.key)}>
												Ripristina originale
											</button>
										{/if}
									</div>
									{#if field.type === 'rich'}
										<RichTextEditor {id} bind:value={values[field.key]} minHeight="10rem" full={field.key === 'privacy_body' || field.key.includes('section')} />
									{:else if field.type === 'textarea'}
										<textarea {id} bind:value={values[field.key]} rows="4" class="field-input"></textarea>
									{:else if field.type === 'clusters'}
										<ClustersEditor {id} bind:value={values[field.key]} />
									{:else if field.type === 'cards'}
										<CardsEditor {id} bind:value={values[field.key]} />
									{:else}
										<input
											{id}
											type={field.type === 'url' ? 'url' : field.type === 'email' ? 'email' : 'text'}
											bind:value={values[field.key]}
											class="field-input"
										/>
									{/if}
									{#if field.hint}<p class="field-hint">{field.hint}</p>{/if}
								{/if}
							</div>
						{/each}
					</div>
				{/key}
			</div>

			<div class="fixed inset-x-0 bottom-0 z-20 border-t border-helpo-purple/10 bg-white/95 px-4 py-3 backdrop-blur lg:left-60">
				<div class="flex max-w-4xl flex-wrap items-center gap-4 lg:px-6">
					<button
						type="submit"
						disabled={saving || collectionMissing}
						class="bg-helpo-purple px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-helpo-heading disabled:opacity-50"
					>
						{saving ? 'Salvataggio…' : 'Salva tutte le modifiche'}
					</button>
					{#if error}
						<p class="text-sm text-red-700" role="alert">{error}</p>
					{:else if savedAt}
						<p class="text-sm text-green-700" role="status">Salvato alle {savedAt}.</p>
					{:else}
						<p class="text-xs">{dirty ? 'Ci sono modifiche non salvate.' : 'Puoi passare da una scheda all’altra: le modifiche restano finché non salvi.'}</p>
					{/if}
				</div>
			</div>
		</form>
	{/if}
</div>
