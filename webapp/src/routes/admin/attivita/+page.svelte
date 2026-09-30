<script lang="ts">
	import { getAdminClient } from '$lib/stores/auth';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { errorMessage } from '$lib/admin';
	import StatusBadge from '$lib/components/ui/StatusBadge.svelte';
	import type { RecordModel } from 'pocketbase';

	let activities: RecordModel[] = [];
	let loading = true;
	let error = '';

	onMount(async () => {
		try {
			const pb = await getAdminClient();
			activities = await pb!.collection('sanabel_projects').getFullList({ sort: '-created' });
		} catch (e) {
			error = errorMessage(e, 'Impossibile caricare le attività.');
		} finally {
			loading = false;
		}
	});

	async function handleDelete(activity: RecordModel) {
		if (!confirm(`Eliminare "${activity.title}"? L'operazione non è reversibile.`)) return;
		try {
			const pb = await getAdminClient();
			await pb!.collection('sanabel_projects').delete(activity.id);
			activities = activities.filter((a) => a.id !== activity.id);
		} catch (e) {
			error = errorMessage(e, 'Eliminazione non riuscita.');
		}
	}
</script>

<svelte:head>
	<title>Attività — Admin Sanabel</title>
</svelte:head>

<div class="max-w-5xl">
	<div class="mb-8 flex flex-wrap items-center justify-between gap-4">
		<div>
			<h1 class="text-2xl">Attività</h1>
			<p class="mt-1 text-sm">Compaiono in home e nella pagina "Cosa facciamo", dalla più recente.</p>
		</div>
		<a href="/admin/attivita/new" class="inline-block bg-helpo-purple px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white no-underline transition-colors hover:bg-helpo-heading">
			Nuova attività
		</a>
	</div>

	{#if $page.url.searchParams.has('salvato')}
		<p class="mb-6 rounded-sm border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800" role="status">Attività salvata.</p>
	{/if}
	{#if error}
		<p class="mb-6 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</p>
	{/if}

	{#if loading}
		<p>Caricamento…</p>
	{:else if activities.length === 0 && !error}
		<div class="rounded-sm border border-helpo-purple/10 bg-white p-12 text-center">
			<p class="text-lg font-bold text-helpo-heading">Ancora nessuna attività</p>
			<p class="mt-2 text-sm">Crea la prima con "Nuova attività".</p>
		</div>
	{:else if activities.length}
		<div class="overflow-x-auto rounded-sm border border-helpo-purple/10 bg-white">
			<table class="w-full min-w-[680px] text-left text-sm">
				<thead class="border-b border-helpo-purple/10 bg-helpo-light-gray">
					<tr>
						<th class="px-5 py-3 font-bold text-helpo-heading">Titolo</th>
						<th class="px-5 py-3 font-bold text-helpo-heading">Stato</th>
						<th class="px-5 py-3 font-bold text-helpo-heading">Visibilità</th>
						<th class="px-5 py-3 font-bold text-helpo-heading"><span class="sr-only">Azioni</span></th>
					</tr>
				</thead>
				<tbody>
					{#each activities as activity}
						<tr class="border-b border-helpo-purple/5 last:border-b-0">
							<td class="px-5 py-3">
								<a href="/admin/attivita/{activity.id}/edit" class="font-bold text-helpo-heading no-underline hover:text-helpo-purple">{activity.title}</a>
								{#if activity.category}<p class="mt-0.5 text-xs uppercase tracking-wider">{activity.category}</p>{/if}
							</td>
							<td class="px-5 py-3">{#if activity.status}<StatusBadge status={activity.status} />{:else}—{/if}</td>
							<td class="px-5 py-3">
								{#if activity.published}
									<span class="inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700">Pubblicata</span>
								{:else}
									<span class="inline-block rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-bold text-yellow-800">Bozza</span>
								{/if}
							</td>
							<td class="px-5 py-3">
								<div class="flex justify-end gap-4">
									<a href="/admin/attivita/{activity.id}/edit" class="text-xs font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">Modifica</a>
									<button on:click={() => handleDelete(activity)} class="text-xs font-bold uppercase tracking-wider text-red-600 hover:underline">Elimina</button>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>
