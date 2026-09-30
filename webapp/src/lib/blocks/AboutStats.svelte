<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import GrainMark from '$lib/components/ui/GrainMark.svelte';
	import type { SiteContent } from '$lib/content';

	export let content: SiteContent;

	// Icone associate alle tre aree, nell'ordine in cui sono inserite nel pannello
	const icons = [
		`<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 2C14 2 6 10 6 16a8 8 0 0 0 16 0C22 10 14 2 14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
		`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
		`<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="currentColor" stroke-width="2"/><path d="M14 8v12m-6-6h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`
	];
</script>

<section id="chi-siamo" class="bg-helpo-light-gray py-20 lg:py-28">
	<div class="container">
		<div class="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
			<div class="lg:sticky lg:top-32 lg:self-start">
				<p class="eyebrow mb-4">{content.about_eyebrow}</p>
				<h2 class="max-w-xl text-4xl leading-tight md:text-5xl">{content.about_title}</h2>
				<img
					class="mt-8 aspect-[4/3] w-full max-w-xl rounded-sm object-cover shadow-sm"
					src={content.about_image}
					alt=""
					loading="lazy"
				/>
				<p class="mt-6 max-w-xl text-lg leading-8">{content.about_caption}</p>
				<div class="mt-8">
					<GrainMark variant="line" />
				</div>
			</div>

			<div class="space-y-10">
				<div class="rich-text rounded-sm bg-white p-6 shadow-sm md:p-10">
					{@html content.about_body}
				</div>

				{#if content.about_clusters.length}
					<div class="border-y border-helpo-purple/15 py-8">
						<h3 class="eyebrow">{content.about_clusters_title}</h3>
						<div class="mt-6 grid gap-5 md:grid-cols-3">
							{#each content.about_clusters as cluster, i}
								<article class="flex flex-col border border-helpo-purple/10 bg-white/80 p-6">
									<div class="mb-3 text-helpo-purple opacity-70">{@html icons[i % icons.length]}</div>
									<h4 class="text-sm font-bold uppercase tracking-[0.14em] text-helpo-purple">{cluster.title}</h4>
									<ul class="mt-3 space-y-3">
										{#each cluster.items ?? [] as item}
											<li>
												<span class="text-base font-bold text-helpo-heading">{item.verb}</span>
												<span class="mt-0.5 block text-sm leading-6">{item.text}</span>
											</li>
										{/each}
									</ul>
								</article>
							{/each}
						</div>
					</div>
				{/if}

				<div class="flex flex-col gap-4 sm:flex-row">
					<Button variant="filled" href={content.donation_url} target="_blank">Sostieni Sanabel</Button>
					<Button variant="reverted" href="/contatti">Parla con noi</Button>
				</div>
			</div>
		</div>
	</div>
</section>
