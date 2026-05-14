<!-- src/lib/blocks/Hero.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { donationUrl } from '$lib/links';

</script>

<section class="relative" aria-labelledby="home-hero-title">
	<div
		class="hero-field relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden py-14 sm:py-18 lg:min-h-[760px] lg:py-20 xl:min-h-[calc(100vh-5rem)] 2xl:min-h-[820px]"
	>
		<div class="absolute inset-0 bg-helpo-dark/45"></div>
		<div class="container relative mx-auto text-white" >
			<div class="max-w-3xl xl:max-w-4xl">
				<div class="flex flex-col gap-6 sm:gap-7 xl:gap-8">
					<div class="grain-mark" aria-hidden="true">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<p class="text-sm font-bold uppercase tracking-[0.28em] text-helpo-yellow">Sanabel per Gaza</p>
					<h1 id="home-hero-title" class="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[5.25rem]">
						Spighe di solidarietà per persone con disabilità e neurodivergenze
					</h1>
					<p class="max-w-2xl text-lg leading-8 text-white/90 xl:text-xl xl:leading-9">
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
		background-position: 58% center;
	}

	@media (min-width: 1280px) {
		.hero-field {
			background-image: linear-gradient(90deg, rgba(32, 33, 43, 0.9) 0%, rgba(32, 33, 43, 0.68) 42%, rgba(32, 33, 43, 0.18) 100%), url('/promo_2.jpg');
			background-position: center right;
		}
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