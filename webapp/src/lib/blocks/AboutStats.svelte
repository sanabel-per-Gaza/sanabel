<!-- src/lib/blocks/AboutStats.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { donationUrl } from '$lib/links';

	const threads = [
		{
			title: 'Cura quotidiana',
			text: 'Kit per l\'igiene, ausili e materiali essenziali proteggono salute, dignità e autonomia quando le reti di assistenza sono frammentate.'
		},
		{
			title: 'Continuità educativa',
			text: 'Bambine e bambini autistici ritrovano routine, ascolto e strumenti per comunicare anche in un contesto instabile.'
		},
		{
			title: 'Competenze condivise',
			text: 'Educatrici, psicologhe, operatrici, familiari e volontarie costruiscono insieme pratiche accessibili tra Gaza e l\'Italia.'
		}
	];

	const proofPoints = [
		'15 mila kit per l\'igiene distribuiti',
		'800 ore di supporto psicosociale',
		'500 ausili per la mobilità forniti'
	];
</script>

<section id="chi-siamo" class="section bg-helpo-light-gray py-20 lg:py-28">
	<div class="container mx-auto">
		<div class="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
			<div class="mission-sticky">
				<p class="mb-4 text-sm font-bold uppercase tracking-[0.26em] text-helpo-purple">Chi siamo</p>
				<h2 class="max-w-xl text-4xl font-bold leading-tight text-helpo-heading md:text-5xl">
					Una rete che si piega insieme senza spezzarsi
				</h2>
				<p class="mt-6 max-w-xl text-lg leading-8 text-helpo-gray-text">
					Le sanabel (سنبلة, sunbula, spighe di grano) crescono meglio quando si sostengono a vicenda. Da questa immagine nasce il progetto: una relazione tra Gaza e l'Italia che mette al centro cura, disabilità, neurodivergenze e giustizia.
				</p>
				<div class="grain-line mt-8" aria-hidden="true">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div class="space-y-10">
				<div class="rounded-sm bg-white/70 p-6 shadow-sm md:p-8">
					<p class="text-xl font-bold leading-8 text-helpo-heading">
						Sanabel sostiene persone con disabilità fisiche, sensoriali e intellettive, insieme a bambine e bambini autistici e neurodivergenti nella Striscia di Gaza.
					</p>
					<p class="mt-5 leading-8">
						Il progetto nasce dalla collaborazione tra l'Unione Generale Palestinese delle Persone con Disabilità, il Centro Irada per l'Educazione Inclusiva di Gaza e una rete di educatrici, psicologhe, operatrici, ricercatrici, insegnanti, studentesse e solidali in Italia.
					</p>
				</div>

				<div class="grid gap-5 md:grid-cols-3">
					{#each threads as thread, index}
						<article class="thread-panel">
							<span class="thread-number">0{index + 1}</span>
							<h3 class="mt-5 text-xl font-bold text-helpo-heading">{thread.title}</h3>
							<p class="mt-4 text-sm leading-7 text-helpo-gray-text">{thread.text}</p>
						</article>
					{/each}
				</div>

				<div class="proof-strip">
					<p class="text-sm font-bold uppercase tracking-[0.22em] text-helpo-purple">Prime tracce del lavoro</p>
					<ul class="mt-5 grid gap-3 md:grid-cols-3">
						{#each proofPoints as point}
							<li>{point}</li>
						{/each}
					</ul>
				</div>

				<div class="flex flex-col gap-4 sm:flex-row">
					<Button variant="reverted" href={donationUrl} target="_blank">Sostieni la raccolta</Button>
					<Button variant="reverted" href="/#contatti">Parla con noi</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.mission-sticky {
		position: relative;
	}

	@media (min-width: 1024px) {
		.mission-sticky {
			position: sticky;
			top: 8rem;
			align-self: start;
		}
	}

	.grain-line {
		display: flex;
		align-items: flex-end;
		gap: 0.6rem;
		height: 5rem;
	}

	.grain-line span {
		width: 0.24rem;
		border-radius: 999px;
		background: #efc940;
		transform-origin: bottom center;
	}

	.grain-line span:nth-child(1) {
		height: 2.6rem;
		transform: rotate(-14deg);
	}

	.grain-line span:nth-child(2) {
		height: 4.7rem;
		transform: rotate(-4deg);
	}

	.grain-line span:nth-child(3) {
		height: 3.8rem;
		transform: rotate(7deg);
	}

	.grain-line span:nth-child(4) {
		height: 2.9rem;
		transform: rotate(15deg);
	}

	.thread-panel {
		border: 1px solid rgba(52, 56, 119, 0.12);
		background: rgba(255, 255, 255, 0.7);
		padding: 1.5rem;
	}

	.thread-number {
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		color: #343877;
	}

	.proof-strip {
		border-top: 1px solid rgba(52, 56, 119, 0.16);
		border-bottom: 1px solid rgba(52, 56, 119, 0.16);
		padding: 1.5rem 0;
	}

	.proof-strip li {
		color: #4a4c70;
		font-weight: 700;
		line-height: 1.6;
	}
</style>