<script lang="ts">
	import PageHero from '$lib/components/ui/PageHero.svelte';
	import StatusBadge from '$lib/components/ui/StatusBadge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { imageUrl } from '$lib/data';

	export let data;
	$: activity = data.activity;
	$: c = data.content;
</script>

<svelte:head>
	<title>{activity.title} — Sanabel</title>
	<meta property="og:title" content={activity.title} />
	{#if activity.excerpt}<meta name="description" content={activity.excerpt} />{/if}
</svelte:head>

<PageHero
	eyebrow={activity.category || 'Cosa facciamo'}
	title={activity.title}
	image={imageUrl(activity)}
	breadcrumb={[{ href: '/attivita', label: 'Cosa facciamo' }, { label: activity.title }]}
/>

<article class="py-14 lg:py-20">
	<div class="container">
		<div class="mx-auto max-w-3xl">
			{#if activity.status || activity.period || activity.location || activity.goal || activity.donated}
				<dl class="mb-10 grid gap-4 rounded-sm bg-helpo-light-gray p-6 text-sm sm:grid-cols-2">
					{#if activity.status}
						<div><dt class="mb-1 font-bold text-helpo-heading">Stato</dt><dd><StatusBadge status={activity.status} /></dd></div>
					{/if}
					{#if activity.period}
						<div><dt class="mb-1 font-bold text-helpo-heading">Periodo</dt><dd>{activity.period}</dd></div>
					{/if}
					{#if activity.location}
						<div><dt class="mb-1 font-bold text-helpo-heading">Luogo</dt><dd>{activity.location}</dd></div>
					{/if}
					{#if activity.goal}
						<div><dt class="mb-1 font-bold text-helpo-heading">Obiettivo</dt><dd>{activity.goal}</dd></div>
					{/if}
					{#if activity.donated}
						<div><dt class="mb-1 font-bold text-helpo-heading">Donato</dt><dd>{activity.donated}</dd></div>
					{/if}
				</dl>
			{/if}

			<div class="rich-text">{@html activity.content}</div>

			<div class="mt-14 flex flex-col gap-6 border-t border-helpo-purple/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
				<a href="/attivita" class="text-sm font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">
					<span aria-hidden="true">‹</span> Torna alle attività
				</a>
				<Button variant="filled" href={c.donation_url} target="_blank">Sostieni Sanabel</Button>
			</div>
		</div>
	</div>
</article>
