<script lang="ts">
	import { getAdminClient } from '$lib/stores/auth';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let title = '';
	let slug = '';
	let content = '';
	let excerpt = '';
	let author = '';
	let published = false;
	let image: File | null = null;
	let currentImage = '';
	let saving = false;
	let error = '';
	let loading = true;

	const postId = $page.params.id;

	onMount(async () => {
		try {
			const pb = await getAdminClient();
			const post = await pb!.collection('sanabel_posts').getOne(postId);
			title = post.title;
			slug = post.slug;
			content = post.content;
			excerpt = post.excerpt || '';
			author = post.author || '';
			published = post.published;
			currentImage = post.image ? pb!.files.getURL(post, post.image) : '';
		} catch (e) {
			error = 'Post non trovato.';
		} finally {
			loading = false;
		}
	});

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

			await pb!.collection('sanabel_posts').update(postId, formData);
			await goto('/admin');
		} catch (e: any) {
			error = e?.message || 'Errore durante il salvataggio.';
		} finally {
			saving = false;
		}
	}
</script>

<svelte:head>
	<title>Modifica post — Admin Sanabel</title>
</svelte:head>

<div class="max-w-3xl">
	<div class="mb-8">
		<a href="/admin" class="text-sm text-helpo-purple no-underline hover:underline">← Torna ai post</a>
		<h1 class="mt-2 text-2xl font-bold text-helpo-heading">Modifica post</h1>
	</div>

	{#if loading}
		<p class="text-helpo-gray-text">Caricamento…</p>
	{:else}
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
				<textarea id="excerpt" bind:value={excerpt} rows="2" class="w-full border border-helpo-purple/20 px-4 py-3 text-sm text-helpo-heading focus:border-helpo-purple focus:outline-none"></textarea>
			</div>

			<div>
				<label for="content" class="block text-sm font-bold text-helpo-heading mb-1.5">Contenuto *</label>
				<textarea id="content" bind:value={content} required rows="16" class="w-full border border-helpo-purple/20 px-4 py-3 text-sm text-helpo-heading font-mono focus:border-helpo-purple focus:outline-none"></textarea>
				<p class="mt-1 text-xs text-helpo-gray-text">HTML supportato.</p>
			</div>

			<div>
				<label for="author" class="block text-sm font-bold text-helpo-heading mb-1.5">Autore</label>
				<input id="author" type="text" bind:value={author} class="w-full border border-helpo-purple/20 px-4 py-3 text-sm text-helpo-heading focus:border-helpo-purple focus:outline-none" />
			</div>

			<div>
				<label for="image" class="block text-sm font-bold text-helpo-heading mb-1.5">Immagine</label>
				{#if currentImage}
					<img src={currentImage} alt="" class="mb-3 h-32 w-auto object-cover border border-helpo-purple/10" />
				{/if}
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
				<label for="published" class="text-sm font-bold text-helpo-heading">Pubblicato</label>
			</div>

			{#if error}
				<p class="text-sm text-red-600 font-medium">{error}</p>
			{/if}

			<div class="flex gap-3 pt-2">
				<button type="submit" disabled={saving} class="bg-helpo-purple px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-helpo-heading disabled:opacity-50">
					{saving ? 'Salvando…' : 'Salva modifiche'}
				</button>
				<a href="/admin" class="inline-flex items-center px-6 py-3 text-xs font-bold uppercase tracking-wider text-helpo-gray-text no-underline hover:text-helpo-heading">Annulla</a>
			</div>
		</form>
	{/if}
</div>
