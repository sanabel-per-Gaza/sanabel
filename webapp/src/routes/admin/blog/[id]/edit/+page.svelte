<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { RecordModel } from 'pocketbase';
	import { getAdminClient } from '$lib/stores/auth';
	import PostForm from '$lib/components/admin/PostForm.svelte';

	let post: RecordModel | null = null;
	let loading = true;

	onMount(async () => {
		try {
			const pb = await getAdminClient();
			post = await pb!.collection('sanabel_posts').getOne($page.params.id);
		} catch {
			post = null;
		} finally {
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>Modifica articolo — Admin Sanabel</title>
</svelte:head>

<div class="max-w-3xl">
	<div class="mb-8">
		<a href="/admin/blog" class="text-sm text-helpo-purple no-underline hover:underline">‹ Torna agli articoli</a>
		<h1 class="mt-2 text-2xl">Modifica articolo</h1>
	</div>
	{#if loading}
		<p>Caricamento…</p>
	{:else if post}
		<PostForm {post} />
	{:else}
		<p class="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">Articolo non trovato.</p>
	{/if}
</div>
