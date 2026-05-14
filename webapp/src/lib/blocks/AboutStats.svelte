<!-- src/lib/blocks/AboutStats.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { donationUrl } from '$lib/links';

	const actions = [
		{
			verb: 'Distribuire',
			text: 'kit per l\'igiene e acqua potabile'
		},
		{
			verb: 'Fornire',
			text: 'ausili per la mobilità'
		},
		{
			verb: 'Realizzare',
			text: 'attività di supporto psico-sociale'
		},
		{
			verb: 'Sostenere',
			text: 'bambini autistici, bambine autistiche e le loro famiglie'
		},
		{
			verb: 'Favorire',
			text: 'l\'inclusione delle persone con disabilità e neurodivergenze'
		},
		{
			verb: 'Promuovere',
			text: 'campagne di sensibilizzazione'
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
						Sanabel è un progetto di amicizia e sostegno alle persone con disabilità fisiche, sensoriali e intellettive nella Striscia di Gaza, con un focus specifico su bambini autistici, bambine autistiche e persone neurodivergenti.
					</p>
					<p class="mt-5 leading-8">
						Sanabel è anche un'Associazione che nasce a Gaza e che, da aprile 2025, si è sviluppata in diverse città italiane, dove si sono costituiti i nodi Sanabel.
					</p>
					<p class="mt-5 leading-8">
						Il progetto nasce tra due sponde dello stesso mare, il Mediterraneo, dalla collaborazione tra l'Unione Generale Palestinese delle Persone con Disabilità, il Centro Irada per l'Educazione Inclusiva di Gaza e gruppi di professionisti e professioniste nel campo dell'educazione, del sostegno psico-sociale, delle disabilità, delle neurodivergenze e della ricerca universitaria, insieme a insegnanti, studenti e studentesse in tutta Italia.
					</p>
					<p class="mt-5 leading-8">
						Da quel lato del mare le condizioni di vita sono diventate ancora più difficili per chi vive con una disabilità o una neurodivergenza. Gli strumenti di assistenza e le reti di supporto, laddove ancora esistenti, sono totalmente frammentati. I bambini e le bambine autistici, in particolare, hanno perso ogni sicurezza e hanno bisogno di sostegno per ritrovare routine e stabilità.
					</p>
				</div>

				<div class="proof-strip">
					<p class="text-sm font-bold uppercase tracking-[0.22em] text-helpo-purple">Sanabel lavora sull'emergenza con uno sguardo teso verso il futuro</p>
					<div class="mt-6 grid gap-4 md:grid-cols-2">
						{#each actions as action, index}
							<article class="thread-panel">
								<span class="thread-number">0{index + 1}</span>
								<h3 class="mt-4 text-xl font-bold text-helpo-heading">{action.verb}</h3>
								<p class="mt-3 text-sm leading-7 text-helpo-gray-text">{action.text}</p>
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

</style>