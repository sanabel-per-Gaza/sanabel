<script lang="ts">
	import ActivityForm from '$lib/components/admin/ActivityForm.svelte';
</script>

<svelte:head>
	<title>Nuova attività — Admin Sanabel</title>
</svelte:head>

<div class="max-w-3xl">
	<div class="mb-8">
		<a href="/admin/attivita" class="text-sm text-helpo-purple no-underline hover:underline">‹ Torna alle attività</a>
		<h1 class="mt-2 text-2xl">Nuova attività</h1>
	</div>
	<ActivityForm />
</div>
