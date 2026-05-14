<!-- src/lib/blocks/Hero.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { donationUrl } from '$lib/links';

</script>

<section class="relative" aria-labelledby="home-hero-title">
	<div
		class="hero-field relative min-h-[720px] overflow-hidden lg:min-h-screen flex items-center"
	>
		<div class="absolute inset-0 bg-helpo-dark/45"></div>
		<div class="container relative mx-auto text-white" >
			<div class="max-w-3xl">
				<div class="flex flex-col gap-7">
					<div class="grain-mark" aria-hidden="true">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<p class="text-sm font-bold uppercase tracking-[0.28em] text-helpo-yellow">Sanabel per Gaza</p>
					<h1 id="home-hero-title" class="max-w-3xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
						Spighe di solidarietà per persone con disabilità e neurodivergenze
					</h1>
					<p class="max-w-2xl text-lg leading-8 text-white/90">
						Sanabel unisce reti palestinesi e solidali in Italia per sostenere cura, autonomia e continuità educativa nella Striscia di Gaza. Non è un aiuto che parte da qui per arrivare là: è un cammino comune, fatto di competenze condivise e responsabilità reciproca.
					</p>
					<div class="flex flex-col gap-4 sm:flex-row">
						<Button variant="primary" href={donationUrl} target="_blank">Dona ora</Button>
						<Button variant="primary" href="/#chi-siamo">Scopri il progetto</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-field {
		background-image: linear-gradient(90deg, rgba(32, 33, 43, 0.86), rgba(32, 33, 43, 0.24)), url('/promo_2.jpg');
		background-size: cover;
		background-position: center;
	}

	.grain-mark {
		display: flex;
		align-items: flex-end;
		gap: 0.45rem;
		height: 4.5rem;
	}

	.grain-mark span {
		display: block;
		width: 0.28rem;
		border-radius: 999px;
		background: #efc940;
		transform-origin: bottom center;
	}

	.grain-mark span:nth-child(1) {
		height: 3.2rem;
		transform: rotate(-11deg);
	}

	.grain-mark span:nth-child(2) {
		height: 4.5rem;
	}

	.grain-mark span:nth-child(3) {
		height: 3.7rem;
		transform: rotate(11deg);
	}
</style>