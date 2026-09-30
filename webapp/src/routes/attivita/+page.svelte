<script lang="ts">
	import PageHero from '$lib/components/ui/PageHero.svelte';
	import StatusBadge from '$lib/components/ui/StatusBadge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { imageUrl } from '$lib/data';

	export let data;
	$: c = data.content;
</script>

<svelte:head>
	<title>Cosa facciamo — Sanabel</title>
	<meta property="og:title" content="Cosa facciamo — Sanabel" />
</svelte:head>

<PageHero eyebrow={c.activities_page_eyebrow} title={c.activities_page_title}>
	{#if c.activities_page_intro}
		<p class="mx-auto mt-6 max-w-2xl text-lg leading-8">{c.activities_page_intro}</p>
	{/if}
</PageHero>

<section class="bg-helpo-light-gray pb-20 lg:pb-28">
	<div class="container">
		{#if data.activities.length === 0}
			<div class="rounded-sm bg-white p-12 text-center shadow-sm">
				<p class="text-lg font-bold text-helpo-heading">Nessuna attività pubblicata</p>
				<p class="mt-2">Torna presto per scoprire le nostre attività.</p>
			</div>
		{:else}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each data.activities as activity}
					{@const img = imageUrl(activity, 'image', '800x0')}
					<article class="group relative flex flex-col overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-lg">
						<div class="aspect-[16/10] overflow-hidden bg-helpo-purple/5">
							{#if img}
								<img src={img} alt="" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
							{:else}
								<div class="flex h-full items-center justify-center">
									<img src="/logo-sanabel.jpeg" alt="" class="h-20 w-20 opacity-30 mix-blend-multiply grayscale" />
								</div>
							{/if}
						</div>
						<div class="flex flex-1 flex-col p-6">
							<div class="flex flex-wrap items-center gap-3">
								{#if activity.category}
									<span class="text-xs font-bold uppercase tracking-[0.15em] text-[#b38d12]">{activity.category}</span>
								{/if}
								{#if activity.status}<StatusBadge status={activity.status} />{/if}
							</div>
							<h2 class="mt-3 text-xl leading-snug">
								<a href="/attivita/{activity.slug}" class="no-underline transition-colors after:absolute after:inset-0 group-hover:text-helpo-purple">
									{activity.title}
								</a>
							</h2>
							{#if activity.excerpt}
								<p class="mt-3 line-clamp-4 flex-1 text-sm leading-7">{activity.excerpt}</p>
							{:else}
								<div class="flex-1"></div>
							{/if}
							<div class="mt-5 flex items-center justify-between gap-4 border-t border-helpo-purple/10 pt-4">
								<span class="text-xs">{activity.location || activity.period || ''}</span>
								<span class="shrink-0 text-xs font-bold uppercase tracking-wider text-helpo-purple">
									Scopri <span aria-hidden="true" class="inline-block transition-transform group-hover:translate-x-1">›</span>
								</span>
							</div>
						</div>
					</article>
				{/each}
			</div>
		{/if}

		<div class="mt-14 text-center">
			<Button variant="filled" href={c.donation_url} target="_blank">Sostieni Sanabel</Button>
		</div>
	</div>
</section>
