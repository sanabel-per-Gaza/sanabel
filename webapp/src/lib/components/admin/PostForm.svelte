<script lang="ts">
	import type { RecordModel } from 'pocketbase';
	import { goto } from '$app/navigation';
	import { getAdminClient } from '$lib/stores/auth';
	import { ensureHtml, errorMessage, slugify, toDateInput } from '$lib/admin';
	import RichTextEditor from './RichTextEditor.svelte';
	import ImageField from './ImageField.svelte';
	import pbPublic from '$lib/pocketbase';

	export let post: RecordModel | null = null;

	let title = post?.title ?? '';
	let slug = post?.slug ?? '';
	let date = toDateInput(post?.date);
	let excerpt = post?.excerpt ?? '';
	let content = ensureHtml(post?.content);
	let author = post?.author ?? '';
	let published = post?.published ?? false;
	let image: File | null = null;
	let removeImage = false;
	let slugTouched = !!post;
	let saving = false;
	let error = '';

	$: if (!slugTouched) slug = slugify(title);
	$: currentImage = post?.image ? pbPublic.files.getURL(post, post.image) : null;

	async function handleSubmit() {
		error = '';
		saving = true;
		try {
			const pb = await getAdminClient();
			const data = new FormData();
			data.append('title', title);
			data.append('slug', slug);
			data.append('date', date);
			data.append('excerpt', excerpt);
			data.append('content', content);
			data.append('author', author || 'Sanabel');
			data.append('published', String(published));
			if (image) data.append('image', image);
			else if (removeImage) data.append('image', '');

			if (post) await pb!.collection('sanabel_posts').update(post.id, data);
			else await pb!.collection('sanabel_posts').create(data);
			await goto('/admin/blog?salvato=1');
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
		<input id="title" type="text" bind:value={title} required class="field-input" />
	</div>

	<div class="grid gap-6 sm:grid-cols-[2fr_1fr]">
		<div>
			<label for="slug" class="field-label">Indirizzo della pagina *</label>
			<input id="slug" type="text" bind:value={slug} on:input={() => (slugTouched = true)} required pattern="[a-z0-9\-]+" class="field-input font-mono" />
			<p class="field-hint">/blog/{slug || '…'} — solo lettere minuscole, numeri e trattini</p>
		</div>
		<div>
			<label for="date" class="field-label">Data dell'evento / articolo</label>
			<input id="date" type="date" bind:value={date} class="field-input" />
			<p class="field-hint">Se vuota si usa la data di creazione</p>
		</div>
	</div>

	<div>
		<label for="excerpt" class="field-label">Estratto</label>
		<textarea id="excerpt" bind:value={excerpt} rows="2" maxlength="300" class="field-input" placeholder="Breve riassunto mostrato nelle anteprime"></textarea>
	</div>

	<div>
		<label for="content" class="field-label">Contenuto *</label>
		<RichTextEditor id="content" bind:value={content} minHeight="20rem" />
	</div>

	<div class="grid gap-6 sm:grid-cols-2">
		<div>
			<label for="author" class="field-label">Autore</label>
			<input id="author" type="text" bind:value={author} class="field-input" placeholder="Sanabel" />
		</div>
	</div>

	<ImageField id="image" label="Immagine di copertina" currentUrl={currentImage} bind:file={image} bind:remove={removeImage} />

	<label class="flex items-center gap-3">
		<input type="checkbox" bind:checked={published} class="h-4 w-4 accent-helpo-purple" />
		<span class="text-sm font-bold text-helpo-heading">Pubblicato (visibile sul sito)</span>
	</label>

	{#if error}
		<p class="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</p>
	{/if}

	<div class="flex flex-wrap gap-3 pt-2">
		<button type="submit" disabled={saving || !content} class="bg-helpo-purple px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-helpo-heading disabled:opacity-50">
			{saving ? 'Salvataggio…' : post ? 'Salva modifiche' : 'Crea articolo'}
		</button>
		<a href="/admin/blog" class="inline-flex items-center px-6 py-3 text-xs font-bold uppercase tracking-wider no-underline hover:text-helpo-heading">Annulla</a>
		{#if post?.published}
			<a href="/blog/{post.slug}" target="_blank" class="ml-auto inline-flex items-center text-xs font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">Vedi sul sito ↗</a>
		{/if}
	</div>
</form>
