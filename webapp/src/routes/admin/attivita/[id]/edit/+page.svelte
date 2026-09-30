<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { RecordModel } from 'pocketbase';
	import { getAdminClient } from '$lib/stores/auth';
	import ActivityForm from '$lib/components/admin/ActivityForm.svelte';

	let activity: RecordModel | null = null;
	let loading = true;

	onMount(async () => {
		try {
			const pb = await getAdminClient();
			activity = await pb!.collection('sanabel_projects').getOne($page.params.id);
		} catch {
			activity = null;
		} finally {
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>Modifica attività — Admin Sanabel</title>
</svelte:head>

<div class="max-w-3xl">
	<div class="mb-8">
		<a href="/admin/attivita" class="text-sm text-helpo-purple no-underline hover:underline">‹ Torna alle attività</a>
		<h1 class="mt-2 text-2xl">Modifica attività</h1>
	</div>
	{#if loading}
		<p>Caricamento…</p>
	{:else if activity}
		<ActivityForm {activity} />
	{:else}
		<p class="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">Attività non trovata.</p>
	{/if}
</div>
