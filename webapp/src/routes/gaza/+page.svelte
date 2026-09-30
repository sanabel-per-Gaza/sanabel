<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import PageHero from '$lib/components/ui/PageHero.svelte';

	export let data;
	$: c = data.content;

	const icons = [
		`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
		`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
		`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h14M5 17a2 2 0 1 0 4 0M5 17a2 2 0 1 1 4 0m6 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0M3 17V7a2 2 0 0 1 2-2h9v12M14 9h4l3 4v4h-2"/></svg>`
	];
</script>

<svelte:head>
	<title>Gaza — Sanabel</title>
	<meta property="og:title" content="{c.gaza_title} — Sanabel" />
</svelte:head>

<PageHero
	eyebrow={c.gaza_eyebrow}
	title={c.gaza_title}
	image={c.gaza_hero_image}
	breadcrumb={[{ label: 'Gaza' }]}
/>

<section class="py-20 lg:py-28">
	<div class="container">
		<div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
			<div>
				<h2 class="mb-6 text-3xl leading-tight md:text-4xl">{c.gaza_section1_title}</h2>
				<div class="rich-text">{@html c.gaza_section1_body}</div>
			</div>
			<figure class="lg:pt-16">
				<img src={c.gaza_image} alt="" class="w-full rounded-sm shadow-lg" loading="lazy" />
			</figure>
		</div>
	</div>
</section>

<section class="bg-helpo-light-gray py-20 lg:py-28">
	<div class="container">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-6 text-3xl leading-tight md:text-4xl">{c.gaza_section2_title}</h2>
			<div class="rich-text">{@html c.gaza_section2_body}</div>
		</div>
	</div>
</section>

{#if c.gaza_focus.length}
	<section class="py-20 lg:py-28">
		<div class="container">
			<h2 class="mb-12 text-center text-3xl md:text-4xl">{c.gaza_focus_title}</h2>
			<div class="grid gap-6 md:grid-cols-3">
				{#each c.gaza_focus as focus, i}
					<article class="border-t-4 border-helpo-yellow bg-white p-8 shadow-[0_10px_40px_-12px_rgba(52,56,119,0.25)]">
						<div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-helpo-purple/8 text-helpo-purple">
							{@html icons[i % icons.length]}
						</div>
						<h3 class="mb-3 text-xl">{focus.title}</h3>
						<p class="leading-7">{focus.text}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>
{/if}

<section class="bg-helpo-purple py-20 text-center lg:py-24">
	<div class="container max-w-2xl">
		<h2 class="mb-5 text-3xl leading-tight text-white md:text-4xl">{c.gaza_cta_title}</h2>
		<p class="mb-8 text-lg leading-8 text-white/80">{c.gaza_cta_text}</p>
		<div class="flex flex-wrap justify-center gap-4">
			<Button variant="filled" href={c.donation_url} target="_blank">Dona ora</Button>
			<Button variant="primary" href="/contatti">Contattaci</Button>
		</div>
	</div>
</section>
