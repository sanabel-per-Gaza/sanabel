<!-- src/lib/blocks/NodiTerritoriali.svelte -->
<script lang="ts">
	const email = 'info@associazionesanabel.org';

	const nodi = [
		{ city: 'Napoli', region: 'Campania', img: '/napoli.png', contact: 'nodo.napoli@associazionesanabel.org' },
		{ city: 'Torino', region: 'Piemonte', img: '/torino.png', contact: 'nodo.torino@associazionesanabel.org' },
		{ city: 'Matera', region: 'Basilicata', img: null, contact: null },
		{ city: 'Brescia', region: 'Lombardia', img: null, contact: null },
		{ city: 'Bologna', region: 'Emilia-Romagna', img: null, contact: null }
	];

	const featured = nodi.filter(n => n.img);
	const others = nodi.filter(n => !n.img);
</script>

<section id="nodi" class="section bg-helpo-light-gray py-20 lg:py-28">
	<div class="container mx-auto">
		<div class="text-center mb-14">
			<p class="mb-4 text-sm font-bold uppercase tracking-[0.26em] text-helpo-purple">Nodi territoriali</p>
			<h2 class="text-4xl font-bold leading-tight text-helpo-heading md:text-5xl">
				Una rete di solidarietà diffusa
			</h2>
			<p class="mt-6 max-w-3xl mx-auto text-lg leading-8 text-helpo-gray-text">
				Sanabel vive attraverso una rete di persone, gruppi e realtà coinvolte in diverse città italiane.
				In questi territori nascono iniziative, incontri e attività di sensibilizzazione che contribuiscono a
				sostenere il progetto e a costruire legami concreti di solidarietà con Gaza.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 mb-8">
			{#each featured as nodo}
				<article class="nodo-card flex flex-col sm:flex-row overflow-hidden">
					<div class="nodo-img-wrap sm:w-48 shrink-0">
						<img class="nodo-img" src={nodo.img} alt="{nodo.city}" loading="lazy" />
					</div>
					<div class="p-5 flex flex-col justify-center">
						<h3 class="text-xl font-bold text-helpo-heading">{nodo.city}</h3>
						<p class="text-sm text-helpo-purple/60 font-medium mt-0.5">{nodo.region}</p>
						{#if nodo.contact}
							<a href="mailto:{nodo.contact}" class="mt-3 text-sm text-helpo-purple font-bold no-underline hover:underline">
								{nodo.contact}
							</a>
						{/if}
					</div>
				</article>
			{/each}
		</div>

		<div class="flex flex-wrap justify-center gap-3">
			{#each others as nodo}
				<span class="inline-block bg-white/80 px-6 py-3 text-base font-bold text-helpo-heading shadow-sm">
					{nodo.city}
					<span class="block text-xs font-medium text-helpo-purple/50 mt-0.5">{nodo.region}</span>
				</span>
			{/each}
		</div>

		<p class="mt-10 text-center text-base text-helpo-gray-text">
			Per informazioni generali: <a href="mailto:{email}" class="text-helpo-purple font-bold no-underline hover:underline">{email}</a>
		</p>
	</div>
</section>

<style>
	.nodo-card {
		background: rgba(255, 255, 255, 0.8);
		border: 1px solid rgba(52, 56, 119, 0.1);
		box-shadow: 0 1px 3px rgba(0,0,0,0.04);
	}

	.nodo-img-wrap {
		overflow: hidden;
	}

	.nodo-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 4/3;
	}

	@media (min-width: 640px) {
		.nodo-img {
			aspect-ratio: auto;
			min-height: 160px;
		}
	}
</style>
