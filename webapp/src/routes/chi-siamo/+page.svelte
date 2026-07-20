<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { donationUrl } from '$lib/links';
</script>

<svelte:head>
	<title>Chi siamo — Sanabel</title>
</svelte:head>

<main>
	<!-- Hero -->
	<section class="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-helpo-dark">
		<img
			src="/foto chi siamo 1.jpeg"
			alt="Gruppo di volontarie e volontari di Sanabel riuniti insieme"
			class="absolute inset-0 h-full w-full object-cover opacity-50"
		/>
		<div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
			<p class="mb-4 text-sm font-bold uppercase tracking-[0.26em] text-helpo-yellow">Chi siamo</p>
			<h1 class="text-4xl font-bold leading-tight !text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] md:text-5xl lg:text-6xl">
				Insieme, per Seminare Umanità
			</h1>
		</div>
	</section>

	<!-- Breadcrumb -->
	<div class="border-b border-helpo-purple/8 bg-white">
		<div class="container mx-auto py-3">
			<nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs uppercase tracking-wider text-helpo-gray-text">
				<a href="/" class="no-underline hover:text-helpo-purple transition-colors">Home</a>
				<span class="text-helpo-purple/30">/</span>
				<span class="font-bold text-helpo-purple">Chi siamo</span>
			</nav>
		</div>
	</div>

	<!-- Intro -->
	<section class="py-20 lg:py-28">
		<div class="container mx-auto">
			<div class="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
				<div class="flex-1">
					<img
						src="/foto 2 chi siamo.jpeg"
						alt="Attività sul campo del progetto Sanabel con la comunità locale"
						class="w-full rounded-sm shadow-lg"
						loading="lazy"
					/>
				</div>
				<div class="flex-1">
					<h2 class="mb-6 text-3xl font-bold leading-tight text-helpo-heading md:text-4xl">
						Un ponte di solidarietà tra Italia e Gaza
					</h2>
					<p class="mb-4 text-lg leading-8 text-helpo-gray-text">
						Sanabel è un progetto di amicizia, solidarietà e cooperazione nato per sostenere le persone con
						disabilità e neurodivergenti nella Striscia di Gaza.
					</p>
					<p class="text-lg leading-8 text-helpo-gray-text">
						Uniamo persone, famiglie e organizzazioni in Italia e a Gaza per costruire relazioni autentiche e
						offrire risposte concrete, capaci di restituire dignità, autonomia e speranza. Perché ogni persona
						possa sentirsi sostenuta, ascoltata e parte attiva della propria comunità.
					</p>
					<div class="mt-8 flex flex-wrap gap-4">
						<Button variant="filled" href={donationUrl} target="_blank">Dona ora</Button>
						<Button variant="reverted" href="/progetti">Scopri i progetti</Button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Valori -->
	<section class="bg-helpo-light-gray py-20 lg:py-28">
		<div class="container mx-auto">
			<div class="mb-16 text-center">
				<p class="mb-3 text-sm font-bold uppercase tracking-[0.26em] text-helpo-purple/50">I nostri valori</p>
				<h2 class="text-3xl font-bold text-helpo-heading md:text-4xl">
					Ciò in cui crediamo
				</h2>
			</div>

			<div class="grid gap-8">
				<!-- Valore 1 -->
				<div class="group flex flex-row items-center gap-6 rounded-sm bg-white p-8 shadow-sm md:gap-10 md:p-10">
					<div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-helpo-yellow/15 transition-colors group-hover:bg-helpo-yellow/25">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#efc940" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
							<circle cx="9" cy="7" r="4" />
							<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
							<path d="M16 3.13a4 4 0 0 1 0 7.75" />
						</svg>
					</div>
					<div class="flex-1">
						<h3 class="mb-3 text-xl font-bold text-helpo-heading md:text-2xl">Una rete che unisce</h3>
						<p class="text-sm leading-7 text-helpo-gray-text md:text-base md:leading-8">
							Sanabel nasce dall'incontro tra organizzazioni palestinesi, operatrici e operatori, professionisti,
							ricercatori, insegnanti, studenti e volontari. Una rete di persone che condivide competenze,
							responsabilità e umanità.
						</p>
					</div>
				</div>

				<!-- Valore 2 -->
				<div class="group flex flex-row items-center gap-6 rounded-sm bg-white p-8 shadow-sm md:gap-10 md:p-10">
					<div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-helpo-yellow/15 transition-colors group-hover:bg-helpo-yellow/25">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#efc940" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
						</svg>
					</div>
					<div class="flex-1">
						<h3 class="mb-3 text-xl font-bold text-helpo-heading md:text-2xl">Un sostegno che diventa azione</h3>
						<p class="text-sm leading-7 text-helpo-gray-text md:text-base md:leading-8">
							Acqua pulita, strumenti di assistenza, supporto psicologico, attività educative e formazione:
							trasformiamo la solidarietà in interventi concreti, costruiti intorno ai bisogni delle persone e delle
							loro famiglie.
						</p>
					</div>
				</div>

				<!-- Valore 3 -->
				<div class="group flex flex-row items-center gap-6 rounded-sm bg-white p-8 shadow-sm md:gap-10 md:p-10">
					<div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-helpo-yellow/15 transition-colors group-hover:bg-helpo-yellow/25">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#efc940" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
						</svg>
					</div>
					<div class="flex-1">
						<h3 class="mb-3 text-xl font-bold text-helpo-heading md:text-2xl">Dignità, autonomia e futuro</h3>
						<p class="text-sm leading-7 text-helpo-gray-text md:text-base md:leading-8">
							Crediamo in una comunità nella quale le persone con disabilità e neurodivergenti siano visibili,
							ascoltate e protagoniste. Per questo lavoriamo non soltanto sulle necessità più urgenti, ma anche
							sull'inclusione e sull'autonomia nel lungo periodo.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Closing CTA -->
	<section class="py-20 lg:py-28">
		<div class="container mx-auto max-w-2xl text-center">
			<h2 class="mb-6 text-3xl font-bold leading-tight text-helpo-heading md:text-4xl">
				Aiutaci a seminare umanità
			</h2>
			<p class="mb-8 text-lg leading-8 text-helpo-gray-text">
				Ogni contributo sostiene persone con disabilità e neurodivergenti a Gaza. Dona ora o esplora i nostri progetti per scoprire come puoi fare la differenza.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<Button variant="filled" href={donationUrl} target="_blank">Dona ora</Button>
				<Button variant="reverted" href="/blog">Leggi le nostre storie</Button>
			</div>
		</div>
	</section>
</main>
