<!-- src/lib/blocks/AboutStats.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { donationUrl } from '$lib/links';

	const clusters = [
		{
			label: 'Bisogni immediati',
			icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 2C14 2 6 10 6 16a8 8 0 0 0 16 0C22 10 14 2 14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
			items: [
				{ verb: 'Distribuire', text: 'kit per l\'igiene e acqua potabile' },
				{ verb: 'Fornire', text: 'ausili per la mobilità' }
			]
		},
		{
			label: 'Supporto e cura',
			icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M8 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 0c1.5 2 4 4 6 4s4.5-2 6-4M14 2v4m14 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
			items: [
				{ verb: 'Realizzare', text: 'attività di supporto psico-sociale' },
				{ verb: 'Sostenere', text: 'bambini autistici e le loro famiglie' }
			]
		},
		{
			label: 'Inclusione e consapevolezza',
			icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="currentColor" stroke-width="2"/><path d="M14 8v12m-6-6h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
			items: [
				{ verb: 'Favorire', text: 'l\'inclusione delle persone con disabilità' },
				{ verb: 'Promuovere', text: 'campagne di sensibilizzazione' }
			]
		}
	];
</script>

<section id="chi-siamo" class="section bg-helpo-light-gray py-20 lg:py-28">
	<div class="container mx-auto">
		<div class="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
			<div class="mission-sticky">
				<p class="mb-4 text-sm font-bold uppercase tracking-[0.26em] text-helpo-purple">Chi siamo</p>
				<h2 class="max-w-xl text-4xl font-bold leading-tight text-helpo-heading md:text-5xl">
					Sanabel nasce tra Gaza e l'Italia
				</h2>
				<p class="mt-6 max-w-xl text-lg leading-8 text-helpo-gray-text">
					Le sanabel (سنبلة, sunbula, spighe di grano) sono forti e flessibili: crescono meglio quando si sostengono a vicenda e diventano un simbolo concreto della possibilità di resistere e rigenerare la vita attraverso legami comunitari e sociali.
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
						Sanabel è un progetto di amicizia e sostegno alle persone con disabilità fisiche, sensoriali, intellettive nella Striscia di Gaza, che ha come focus specifico bambini autistici e bambine autistiche, e/o neurodivergenti.
					</p>
					<p class="mt-5 leading-8">
						Sanabel è anche un'Associazione che nasce a Gaza e che, a partire da aprile 2025, si è sviluppata in diverse città italiane, dove si sono costituiti i "nodi Sanabel" …
					</p>
					<p class="mt-5 leading-8">
						Il progetto nasce tra due sponde dello stesso mare, il Mediterraneo, dalla collaborazione tra il Centro Irada per l'Educazione Inclusiva di Gaza e gruppi di professionisti/e nel campo dell'educazione, del sostegno psico-sociale, delle disabilità e delle neurodivergenze, della ricerca universitaria, insegnanti, studenti/studentesse in tutta Italia (i nodi Sanabel).
					</p>
					<p class="mt-5 leading-8">
						Da quel lato del mare le condizioni di vita sono diventate ancora più difficili per chi vive con una disabilità o una neurodivergenza. Gli strumenti di assistenza e le reti di supporto, laddove ancora esistenti, sono totalmente frammentati. I bambini e le bambine autistici/che, in particolare, hanno perso ogni sicurezza e hanno bisogno di sostegno per ritrovare routine e stabilità.
					</p>
				</div>

				<div class="proof-strip">
					<p class="text-sm font-bold uppercase tracking-[0.22em] text-helpo-purple">Sanabel lavora sull'emergenza con uno sguardo teso verso il futuro</p>
					<div class="mt-6 grid gap-5 md:grid-cols-3">
						{#each clusters as cluster}
							<article class="cluster-card">
								<div class="cluster-icon" style="color: #343877;">{@html cluster.icon}</div>
								<h3 class="text-sm font-bold uppercase tracking-[0.14em] text-helpo-purple">{cluster.label}</h3>
								<ul class="mt-3 space-y-2.5">
									{#each cluster.items as item}
										<li>
											<span class="text-base font-bold text-helpo-heading">{item.verb}</span>
											<span class="block mt-0.5 text-sm leading-6 text-helpo-gray-text">{item.text}</span>
										</li>
									{/each}
								</ul>
							</article>
						{/each}
					</div>
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

	.cluster-card {
		border: 1px solid rgba(52, 56, 119, 0.12);
		background: rgba(255, 255, 255, 0.7);
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
	}

	.cluster-icon {
		margin-bottom: 0.75rem;
		opacity: 0.7;
	}

	.proof-strip {
		border-top: 1px solid rgba(52, 56, 119, 0.16);
		border-bottom: 1px solid rgba(52, 56, 119, 0.16);
		padding: 1.5rem 0;
	}

</style>