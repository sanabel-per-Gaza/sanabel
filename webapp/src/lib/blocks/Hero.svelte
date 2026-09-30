<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import GrainMark from '$lib/components/ui/GrainMark.svelte';
	import type { SiteContent } from '$lib/content';

	export let content: SiteContent;
</script>

<section class="relative" aria-labelledby="home-hero-title">
	<div
		class="hero-field relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden py-14 sm:py-18 lg:min-h-[720px] lg:py-20 2xl:min-h-[820px]"
		style="--hero-image: url('{content.hero_image}')"
	>
		<div class="container relative text-white">
			<div class="max-w-3xl xl:max-w-4xl">
				<div class="flex flex-col gap-6 sm:gap-7 xl:gap-8">
					<GrainMark />
					<p class="text-sm font-bold uppercase tracking-[0.28em] text-helpo-yellow">{content.hero_eyebrow}</p>
					<h1
						id="home-hero-title"
						class="hero-title max-w-4xl text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[5.25rem]"
					>
						{content.hero_title}
					</h1>
					<p class="max-w-2xl text-lg leading-8 whitespace-pre-line text-white/90 xl:text-xl xl:leading-9">
						{content.hero_text}
					</p>
					<div class="flex flex-col gap-4 sm:flex-row">
						<Button variant="filled" href={content.donation_url} target="_blank">Dona ora</Button>
						<Button variant="primary" href="/chi-siamo">{content.hero_button_label}</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-field {
		background-color: var(--color-helpo-dark);
		background-image:
			linear-gradient(90deg, rgba(32, 33, 43, 0.88), rgba(32, 33, 43, 0.4)),
			var(--hero-image);
		background-size: cover;
		background-position: 58% center;
	}

	@media (min-width: 1280px) {
		.hero-field {
			background-image:
				linear-gradient(90deg, rgba(32, 33, 43, 0.9) 0%, rgba(32, 33, 43, 0.68) 42%, rgba(32, 33, 43, 0.18) 100%),
				var(--hero-image);
			background-position: center right;
		}
	}

	.hero-title {
		color: #fefdf6;
		text-shadow:
			0 1px 4px rgba(0, 0, 0, 0.5),
			0 4px 16px rgba(0, 0, 0, 0.25);
	}
</style>
