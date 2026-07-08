<script lang="ts">
	import { getAdminClient } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

	let title = '';
	let slug = '';
	let content = '';
	let excerpt = '';
	let author = '';
	let published = false;
	let image: File | null = null;
	let saving = false;
	let error = '';

	function generateSlug() {
		slug = title
			.toLowerCase()
			.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // strip accents
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '');
	}

	$: if (title && !slug) generateSlug();

	async function handleSubmit() {
		error = '';
		saving = true;
		try {
			const pb = await getAdminClient();
			const formData = new FormData();
			formData.append('title', title);
			formData.append('slug', slug);
			formData.append('content', content);
			formData.append('excerpt', excerpt);
			formData.append('author', author || 'Sanabel');
			formData.append('published', String(published));
			if (image) formData.append('image', image);

			const post = await pb!.collection('sanabel_posts').create(formData);
			await goto(`/admin/${post.id}/edit`);
		} catch (e: any) {
			error = e?.message || 'Errore durante il salvataggio.';
		} finally {
			saving = false;
		}
	}
</script>

<svelte:head>
	<title>Nuovo post — Admin Sanabel</title>
</svelte:head>

<div class="max-w-3xl">
	<div class="mb-8">
		<a href="/admin" class="text-sm text-helpo-purple no-underline hover:underline">← Torna ai post</a>
		<h1 class="mt-2 text-2xl font-bold text-helpo-heading">Nuovo post</h1>
	</div>

	<form on:submit|preventDefault={handleSubmit} class="space-y-6 rounded-sm bg-white p-8 shadow-sm">
		<div>
			<label for="title" class="block text-sm font-bold text-helpo-heading mb-1.5">Titolo *</label>
			<input id="title" type="text" bind:value={title} required class="w-full border border-helpo-purple/20 px-4 py-3 text-sm text-helpo-heading focus:border-helpo-purple focus:outline-none" />
		</div>

		<div>
			<label for="slug" class="block text-sm font-bold text-helpo-heading mb-1.5">Slug *</label>
			<input id="slug" type="text" bind:value={slug} required class="w-full border border-helpo-purple/20 bg-helpo-light-gray px-4 py-3 text-sm text-helpo-heading focus:border-helpo-purple focus:outline-none font-mono" />
			<p class="mt-1 text-xs text-helpo-gray-text">URL: /blog/{slug || '…'}</p>
		</div>

		<div>
			<label for="excerpt" class="block text-sm font-bold text-helpo-heading mb-1.5">Estratto</label>
			<textarea id="excerpt" bind:value={excerpt} rows="2" class="w-full border border-helpo-purple/20 px-4 py-3 text-sm text-helpo-heading focus:border-helpo-purple focus:outline-none" placeholder="Breve riassunto per la card (max 150 caratteri)…"></textarea>
		</div>

		<div>
			<label for="content" class="block text-sm font-bold text-helpo-heading mb-1.5">Contenuto *</label>
			<textarea id="content" bind:value={content} required rows="16" class="w-full border border-helpo-purple/20 px-4 py-3 text-sm text-helpo-heading font-mono focus:border-helpo-purple focus:outline-none" placeholder="Scrivi il contenuto (HTML supportato)…"></textarea>
			<p class="mt-1 text-xs text-helpo-gray-text">HTML supportato. Usa &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;img&gt;, ecc.</p>
		</div>

		<div>
			<label for="author" class="block text-sm font-bold text-helpo-heading mb-1.5">Autore</label>
			<input id="author" type="text" bind:value={author} class="w-full border border-helpo-purple/20 px-4 py-3 text-sm text-helpo-heading focus:border-helpo-purple focus:outline-none" placeholder="Sanabel" />
		</div>

		<div>
			<label for="image" class="block text-sm font-bold text-helpo-heading mb-1.5">Immagine</label>
			<input
				id="image"
				type="file"
				accept="image/*"
				on:change={(e) => image = e.target?.files?.[0] || null}
				class="w-full text-sm text-helpo-gray-text file:mr-4 file:border-0 file:bg-helpo-purple file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:text-white file:cursor-pointer"
			/>
		</div>

		<div class="flex items-center gap-3">
			<input id="published" type="checkbox" bind:checked={published} class="h-4 w-4 accent-helpo-purple" />
			<label for="published" class="text-sm font-bold text-helpo-heading">Pubblica subito</label>
		</div>

		{#if error}
			<p class="text-sm text-red-600 font-medium">{error}</p>
		{/if}

		<div class="flex gap-3 pt-2">
			<button type="submit" disabled={saving} class="bg-helpo-purple px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-helpo-heading disabled:opacity-50">
				{saving ? 'Salvando…' : 'Crea post'}
			</button>
			<a href="/admin" class="inline-flex items-center px-6 py-3 text-xs font-bold uppercase tracking-wider text-helpo-gray-text no-underline hover:text-helpo-heading">Annulla</a>
		</div>
	</form>
</div>
