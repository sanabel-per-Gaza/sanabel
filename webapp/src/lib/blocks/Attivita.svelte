<!-- src/lib/blocks/Attivita.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { donationUrl } from '$lib/links';

	const activities = [
		{
			title: 'Supporto domiciliare psicologico e materiale, per bambini autistici, bambine autistiche e con disabilità',
			description: 'Supportiamo l\'attività di un team di specialisti per fornire supporto domiciliare, valutazione e assistenza psicologica a 21 famiglie con bambini e bambine con disabilità a Gaza City, Deir Al-Balah e Khan Younis, includendo anche la distribuzione di cibo e di beni di prima necessità.',
			status: 'In corso',
			statusColor: '#2EC774',
			period: 'da ottobre 2025',
			goal: '3.500 € al mese',
			donated: '2.000 €'
		},
		{
			title: 'La "scuola tenda" di Khan Younis',
			description: 'Per offrire un punto di riferimento stabile per bambini, bambine e per le loro famiglie. Un\'esperienza di resistenza popolare in difesa dell\'infanzia per realizzare attività educative, riabilitative e di sostegno psicologico',
			subNotes: [
				'pensata per attuarsi con la firma dell\'accordo USA/Israele/Hamas, è stata purtroppo sospesa, perché la tregua auspicata non è mai giunta.',
				'i fondi raccolti nei primi giorni di ottobre, sono stati pertanto allocati ad altra attività.'
			],
			status: 'Sospeso',
			statusColor: '#F36F8F',
			period: 'da ottobre 2025 a ottobre 2025',
			goal: '10.000 €',
			donated: '2.000 €'
		},
		{
			title: 'Distribuire, sostenere, favorire',
			description: 'Distribuire acqua potabile, kit igienici ed ausili per la mobilità alle persone con disabilità, per favorire autonomia e partecipazione sociale; garantire sostegno psicologico mirato all\'elaborazione della traumatizzazione estrema, determinata dal contesto genocidario; organizzare attività di socializzazione per i bambini e le bambine con disabilità, con l\'obiettivo di promuovere benessere emotivo, inclusione e relazioni di cura.',
			status: 'Raggiunto',
			statusColor: '#49C2DF',
			period: 'da giugno 2025 a settembre 2025',
			goal: '5.000 €',
			donated: '5.000 €'
		}
	];
</script>

<section id="attivita" class="section py-20 lg:py-28">
	<div class="container mx-auto">
		<div class="text-center mb-16">
			<p class="mb-4 text-sm font-bold uppercase tracking-[0.26em] text-helpo-purple">Attività</p>
			<h2 class="text-4xl font-bold leading-tight text-helpo-heading md:text-5xl">
				Il ruolo dei nodi Sanabel in Italia
			</h2>
			<p class="mt-6 max-w-3xl mx-auto text-lg leading-8 text-helpo-gray-text">
				Il ruolo dei nodi Sanabel in Italia è dare vita a campagne di sensibilizzazione e finanziamento delle diverse attività portate avanti a Gaza. La costante relazione con il nodo Sanabel di Gaza permette di mantenere un contatto diretto con il partner locale, insieme al quale si identificano le iniziative da realizzare. Una costruzione concreta di relazioni tra due comunità, italiana e gazawi.
			</p>
		</div>

		<div class="space-y-10">
			{#each activities as activity}
				<article class="rounded-sm bg-white shadow-lg overflow-hidden">
					<div class="p-6 md:p-8 lg:p-10">
						<div class="flex flex-wrap items-center gap-4 mb-5">
							<span
								class="inline-block text-white text-sm font-bold py-1 px-4 rounded"
								style="background-color: {activity.statusColor};"
							>
								{activity.status}
							</span>
							<span class="text-sm text-helpo-gray-text">Periodo: {activity.period}</span>
						</div>
						<h3 class="text-2xl font-bold text-helpo-heading mb-4">{activity.title}</h3>
						<div class="max-w-3xl">
							<p class="text-base leading-7 text-helpo-gray-text">{activity.description}</p>
							{#if activity.subNotes}
								<ul class="mt-4 space-y-2">
									{#each activity.subNotes as note}
										<li class="flex gap-2 text-sm leading-6 text-helpo-gray-text">
											<span class="text-helpo-purple font-bold mt-0.5">●</span>
											<span>{note}</span>
										</li>
									{/each}
								</ul>
							{/if}
						</div>
						<div class="mt-6 flex flex-wrap gap-6 text-sm">
							<div class="text-helpo-gray-text">
								<span class="font-bold text-helpo-heading">Obiettivo:&nbsp;</span>{activity.goal}
							</div>
							<div class="text-helpo-gray-text">
								<span class="font-bold text-helpo-heading">Donato:&nbsp;</span>{activity.donated}
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<Button variant="reverted" href={donationUrl} target="_blank">Sostieni il progetto</Button>
		</div>
	</div>
</section>
