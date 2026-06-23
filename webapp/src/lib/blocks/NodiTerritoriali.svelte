<!-- src/lib/blocks/NodiTerritoriali.svelte -->
<script lang="ts">
	const cities = ['Napoli', 'Torino', 'Matera', 'Brescia', 'Bologna'];
	const email = 'info@associazionesanabel.org';
</script>

<section id="nodi" class="section bg-helpo-light-gray py-20 lg:py-28">
	<div class="container mx-auto text-center">
		<p class="mb-4 text-sm font-bold uppercase tracking-[0.26em] text-helpo-purple">Nodi territoriali</p>
		<h2 class="text-4xl font-bold leading-tight text-helpo-heading md:text-5xl mb-8">
			Ci potete raggiungere in queste città
		</h2>
		<div class="flex flex-wrap justify-center gap-3 mb-8">
			{#each cities as city}
				<span class="inline-block bg-white/80 px-6 py-3 text-lg font-bold text-helpo-heading shadow-sm">{city}</span>
			{/each}
		</div>
		<p class="text-lg text-helpo-gray-text">
			Informazioni a: <a href="mailto:{email}" class="text-helpo-purple font-bold no-underline hover:underline">{email}</a>
		</p>
	</div>
</section>
