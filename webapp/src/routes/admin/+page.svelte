<script lang="ts">
	import { onMount } from 'svelte';
	import { getAdminClient } from '$lib/stores/auth';
	import { CONTENT_COLLECTION } from '$lib/content';

	type Stat = { label: string; value: string; href: string };
	let stats: Stat[] = [];
	let missing: string[] = [];

	async function count(collection: string, filter = '') {
		const pb = await getAdminClient();
		try {
			const res = await pb!.collection(collection).getList(1, 1, { filter, requestKey: null });
			return res.totalItems;
		} catch (e: any) {
			if (e?.status === 404) missing = [...missing, collection];
			return null;
		}
	}

	onMount(async () => {
		const [posts, activities, unread, content] = await Promise.all([
			count('sanabel_posts'),
			count('sanabel_projects'),
			count('sanabel_messages', 'read = false'),
			count(CONTENT_COLLECTION)
		]);
		stats = [
			{ label: 'Articoli del blog', value: posts === null ? '—' : String(posts), href: '/admin/blog' },
			{ label: 'Attività', value: activities === null ? '—' : String(activities), href: '/admin/attivita' },
			{ label: 'Messaggi da leggere', value: unread === null ? '—' : String(unread), href: '/admin/messaggi' },
			{ label: 'Testi del sito', value: content ? 'Personalizzati' : 'Predefiniti', href: '/admin/contenuti' }
		];
	});
</script>

<svelte:head>
	<title>Panoramica — Admin Sanabel</title>
</svelte:head>

<div class="max-w-5xl">
	<h1 class="text-2xl">Panoramica</h1>
	<p class="mt-2">Da qui gestisci tutti i contenuti del sito: testi e immagini delle pagine, articoli del blog, attività e messaggi arrivati dal modulo Contatti.</p>

	{#if missing.length}
		<div class="mt-6 rounded-sm border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900" role="alert">
			<p class="font-bold">Configurazione PocketBase incompleta</p>
			<p class="mt-1">Mancano le collection: <code>{missing.join(', ')}</code>. Importale seguendo <code>pb_schema/README.md</code>. Finché non ci sono, il sito mostra i testi predefiniti e il modulo Contatti non funziona.</p>
		</div>
	{/if}

	<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat}
			<a href={stat.href} class="block rounded-sm bg-white p-5 no-underline shadow-sm transition-shadow hover:shadow-md">
				<p class="text-2xl font-bold text-helpo-heading">{stat.value}</p>
				<p class="mt-1 text-sm">{stat.label}</p>
			</a>
		{/each}
	</div>

	<div class="mt-10 grid gap-4 md:grid-cols-3">
		<a href="/admin/contenuti" class="rounded-sm border border-helpo-purple/10 bg-white p-6 no-underline hover:border-helpo-purple/40">
			<p class="font-bold text-helpo-heading">Modifica testi e immagini</p>
			<p class="mt-1 text-sm">Home, Chi siamo, Gaza, Contatti, Privacy, footer e dati per le donazioni.</p>
		</a>
		<a href="/admin/blog/new" class="rounded-sm border border-helpo-purple/10 bg-white p-6 no-underline hover:border-helpo-purple/40">
			<p class="font-bold text-helpo-heading">Scrivi un articolo</p>
			<p class="mt-1 text-sm">Racconta un evento o un aggiornamento: comparirà nel blog e in home.</p>
		</a>
		<a href="/admin/attivita/new" class="rounded-sm border border-helpo-purple/10 bg-white p-6 no-underline hover:border-helpo-purple/40">
			<p class="font-bold text-helpo-heading">Aggiungi un'attività</p>
			<p class="mt-1 text-sm">Un nuovo intervento a Gaza, con stato, obiettivo e importo donato.</p>
		</a>
	</div>
</div>
