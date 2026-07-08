<script lang="ts">
	import { getAdminClient } from '$lib/stores/auth';
	import { onMount } from 'svelte';

	let projects: any[] = [];
	let loading = true;

	onMount(async () => {
		try {
			const pb = await getAdminClient();
			projects = await pb!.collection('sanabel_projects').getFullList({ sort: '-created' });
		} catch (e) {
			console.error(e);
		} finally {
			loading = false;
		}
	});

	async function handleDelete(id: string, title: string) {
		if (!confirm(`Eliminare "${title}"? L'operazione non è reversibile.`)) return;
		try {
			const pb = await getAdminClient();
			await pb!.collection('sanabel_projects').delete(id);
			projects = projects.filter(p => p.id !== id);
		} catch (e) {
			alert('Errore durante l\'eliminazione.');
		}
	}
</script>

<svelte:head>
	<title>Progetti — Admin Sanabel</title>
</svelte:head>

<div>
	<div class="mb-8 flex items-center justify-between">
		<h1 class="text-2xl font-bold text-helpo-heading">Tutti i progetti</h1>
		<a
			href="/admin/progetti/new"
			class="inline-block bg-helpo-purple px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white no-underline transition-colors hover:bg-helpo-heading"
		>
			Nuovo progetto
		</a>
	</div>

	{#if loading}
		<p class="text-helpo-gray-text">Caricamento…</p>
	{:else if projects.length === 0}
		<div class="rounded-sm border border-helpo-purple/10 bg-white p-12 text-center">
			<p class="text-lg font-bold text-helpo-heading">Nessun progetto</p>
			<p class="mt-2 text-sm text-helpo-gray-text">Crea il tuo primo progetto.</p>
		</div>
	{:else}
		<div class="overflow-x-auto rounded-sm border border-helpo-purple/10 bg-white">
			<table class="w-full text-left text-sm">
				<thead class="border-b border-helpo-purple/10 bg-helpo-light-gray">
					<tr>
						<th class="px-5 py-3 font-bold text-helpo-heading">Titolo</th>
						<th class="px-5 py-3 font-bold text-helpo-heading">Categoria</th>
						<th class="px-5 py-3 font-bold text-helpo-heading">Stato</th>
						<th class="px-5 py-3 font-bold text-helpo-heading">Data</th>
						<th class="px-5 py-3 font-bold text-helpo-heading">Azioni</th>
					</tr>
				</thead>
				<tbody>
					{#each projects as project}
						<tr class="border-b border-helpo-purple/5 last:border-b-0">
							<td class="px-5 py-3">
								<span class="font-bold text-helpo-heading">{project.title}</span>
							</td>
							<td class="px-5 py-3">
								{#if project.category}
									<span class="text-xs font-bold uppercase tracking-wider text-helpo-purple">{project.category}</span>
								{:else}
									<span class="text-xs text-helpo-gray-text">—</span>
								{/if}
							</td>
							<td class="px-5 py-3">
								{#if project.published}
									<span class="inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700">Pubblicato</span>
								{:else}
									<span class="inline-block rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-bold text-yellow-700">Bozza</span>
								{/if}
							</td>
							<td class="px-5 py-3 text-helpo-gray-text">
								{new Date(project.created).toLocaleDateString('it-IT')}
							</td>
							<td class="px-5 py-3">
								<div class="flex gap-2">
									<a href="/admin/progetti/{project.id}/edit" class="text-xs font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">
										Modifica
									</a>
									<button on:click={() => handleDelete(project.id, project.title)} class="text-xs font-bold uppercase tracking-wider text-red-600 hover:underline">
										Elimina
									</button>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>
