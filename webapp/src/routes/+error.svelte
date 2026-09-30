<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/Button.svelte';
	import GrainMark from '$lib/components/ui/GrainMark.svelte';
</script>

<svelte:head>
	<title>Pagina non trovata — Sanabel</title>
</svelte:head>

<section class="py-24 lg:py-32">
	<div class="container flex max-w-2xl flex-col items-center text-center">
		<GrainMark />
		<p class="eyebrow mt-8">Errore {$page.status}</p>
		<h1 class="mt-4 text-4xl md:text-5xl">
			{$page.status === 404 ? 'Questa pagina non esiste' : 'Qualcosa non ha funzionato'}
		</h1>
		<p class="mt-6 text-lg leading-8">
			{$page.status === 404
				? 'Il link potrebbe essere cambiato. Torna alla home o scopri cosa facciamo.'
				: 'Ricarica la pagina tra qualche istante.'}
		</p>
		<div class="mt-10 flex flex-wrap justify-center gap-4">
			<Button variant="filled" href="/">Torna alla home</Button>
			<Button variant="reverted" href="/attivita">Cosa facciamo</Button>
		</div>
	</div>
</section>
