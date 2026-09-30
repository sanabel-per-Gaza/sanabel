<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import PageHero from '$lib/components/ui/PageHero.svelte';

	export let data;
	$: c = data.content;

	const icons = [
		`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
		`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
		`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
	];
</script>

<svelte:head>
	<title>Chi siamo — Sanabel</title>
	<meta property="og:title" content="Chi siamo — Sanabel" />
</svelte:head>

<PageHero
	eyebrow={c.chisiamo_eyebrow}
	title={c.chisiamo_title}
	image={c.chisiamo_hero_image}
	imageAlt="Volontarie e volontari di Sanabel riuniti insieme"
	breadcrumb={[{ label: 'Chi siamo' }]}
/>

<section class="py-20 lg:py-28">
	<div class="container">
		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<img
				src={c.chisiamo_intro_image}
				alt="Attività sul campo di Sanabel con la comunità locale"
				class="w-full rounded-sm shadow-lg"
				loading="lazy"
			/>
			<div>
				<h2 class="mb-6 text-3xl leading-tight md:text-4xl">{c.chisiamo_intro_title}</h2>
				<div class="rich-text">{@html c.chisiamo_intro_body}</div>
				<div class="mt-8 flex flex-wrap gap-4">
					<Button variant="filled" href={c.donation_url} target="_blank">Dona ora</Button>
					<Button variant="reverted" href="/attivita">Scopri le attività Sanabel</Button>
				</div>
			</div>
		</div>
	</div>
</section>

{#if c.chisiamo_values.length}
	<section class="bg-helpo-light-gray py-20 lg:py-28">
		<div class="container">
			<div class="mb-14 text-center">
				<p class="eyebrow mb-3">{c.chisiamo_values_eyebrow}</p>
				<h2 class="text-3xl md:text-4xl">{c.chisiamo_values_title}</h2>
			</div>

			<div class="grid gap-6">
				{#each c.chisiamo_values as value, i}
					<div class="flex flex-col gap-6 rounded-sm bg-white p-8 shadow-sm sm:flex-row sm:items-center md:gap-10 md:p-10">
						<div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-helpo-yellow/15 text-[#c9a21c]">
							{@html icons[i % icons.length]}
						</div>
						<div class="flex-1">
							<h3 class="mb-3 text-xl md:text-2xl">{value.title}</h3>
							<p class="leading-7 md:text-lg md:leading-8">{value.text}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<section class="py-20 lg:py-28">
	<div class="container max-w-2xl text-center">
		<h2 class="mb-6 text-3xl leading-tight md:text-4xl">{c.chisiamo_cta_title}</h2>
		<p class="mb-8 text-lg leading-8">{c.chisiamo_cta_text}</p>
		<div class="flex flex-wrap justify-center gap-4">
			<Button variant="filled" href={c.donation_url} target="_blank">Dona ora</Button>
			<Button variant="reverted" href="/blog">Leggi le nostre storie</Button>
		</div>
	</div>
</section>
