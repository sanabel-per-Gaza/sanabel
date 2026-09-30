<script lang="ts">
	import { getAdminClient } from '$lib/stores/auth';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { errorMessage } from '$lib/admin';
	import { formatDate, postDate } from '$lib/data';
	import type { RecordModel } from 'pocketbase';

	let posts: RecordModel[] = [];
	let loading = true;
	let error = '';

	onMount(async () => {
		try {
			const pb = await getAdminClient();
			posts = await pb!.collection('sanabel_posts').getFullList({ sort: '-created' });
			posts.sort((a, b) => postDate(b).localeCompare(postDate(a)));
		} catch (e) {
			error = errorMessage(e, 'Impossibile caricare gli articoli.');
		} finally {
			loading = false;
		}
	});

	async function handleDelete(post: RecordModel) {
		if (!confirm(`Eliminare "${post.title}"? L'operazione non è reversibile.`)) return;
		try {
			const pb = await getAdminClient();
			await pb!.collection('sanabel_posts').delete(post.id);
			posts = posts.filter((p) => p.id !== post.id);
		} catch (e) {
			error = errorMessage(e, 'Eliminazione non riuscita.');
		}
	}
</script>

<svelte:head>
	<title>Blog — Admin Sanabel</title>
</svelte:head>

<div class="max-w-5xl">
	<div class="mb-8 flex flex-wrap items-center justify-between gap-4">
		<h1 class="text-2xl">Articoli del blog</h1>
		<a href="/admin/blog/new" class="inline-block bg-helpo-purple px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white no-underline transition-colors hover:bg-helpo-heading">
			Nuovo articolo
		</a>
	</div>

	{#if $page.url.searchParams.has('salvato')}
		<p class="mb-6 rounded-sm border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800" role="status">Articolo salvato.</p>
	{/if}
	{#if error}
		<p class="mb-6 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</p>
	{/if}

	{#if loading}
		<p>Caricamento…</p>
	{:else if posts.length === 0 && !error}
		<div class="rounded-sm border border-helpo-purple/10 bg-white p-12 text-center">
			<p class="text-lg font-bold text-helpo-heading">Ancora nessun articolo</p>
			<p class="mt-2 text-sm">Crea il primo con "Nuovo articolo".</p>
		</div>
	{:else if posts.length}
		<div class="overflow-x-auto rounded-sm border border-helpo-purple/10 bg-white">
			<table class="w-full min-w-[640px] text-left text-sm">
				<thead class="border-b border-helpo-purple/10 bg-helpo-light-gray">
					<tr>
						<th class="px-5 py-3 font-bold text-helpo-heading">Titolo</th>
						<th class="px-5 py-3 font-bold text-helpo-heading">Stato</th>
						<th class="px-5 py-3 font-bold text-helpo-heading">Data</th>
						<th class="px-5 py-3 font-bold text-helpo-heading"><span class="sr-only">Azioni</span></th>
					</tr>
				</thead>
				<tbody>
					{#each posts as post}
						<tr class="border-b border-helpo-purple/5 last:border-b-0">
							<td class="px-5 py-3">
								<a href="/admin/blog/{post.id}/edit" class="font-bold text-helpo-heading no-underline hover:text-helpo-purple">{post.title}</a>
								{#if post.excerpt}<p class="mt-0.5 line-clamp-1 text-xs">{post.excerpt}</p>{/if}
							</td>
							<td class="px-5 py-3">
								{#if post.published}
									<span class="inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700">Pubblicato</span>
								{:else}
									<span class="inline-block rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-bold text-yellow-800">Bozza</span>
								{/if}
							</td>
							<td class="whitespace-nowrap px-5 py-3">{formatDate(postDate(post))}</td>
							<td class="px-5 py-3">
								<div class="flex justify-end gap-4">
									<a href="/admin/blog/{post.id}/edit" class="text-xs font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">Modifica</a>
									<button on:click={() => handleDelete(post)} class="text-xs font-bold uppercase tracking-wider text-red-600 hover:underline">Elimina</button>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>
