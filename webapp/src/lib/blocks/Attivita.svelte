<script lang="ts">
	import type { RecordModel } from 'pocketbase';
	import Button from '$lib/components/ui/Button.svelte';
	import StatusBadge from '$lib/components/ui/StatusBadge.svelte';
	import { imageUrl } from '$lib/data';
	import type { SiteContent } from '$lib/content';

	export let content: SiteContent;
	export let activities: RecordModel[] = [];
</script>

<section id="attivita" class="pb-20 pt-8 lg:pb-28 lg:pt-12">
	<div class="container">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="text-4xl leading-tight md:text-5xl">{content.activities_title}</h2>
			<p class="mt-6 text-lg leading-8 whitespace-pre-line">{content.activities_intro}</p>
			{#if content.activities_subtitle}
				<p class="mt-6 text-2xl font-bold leading-tight text-helpo-heading md:text-3xl">
					{content.activities_subtitle}
				</p>
			{/if}
		</div>

		{#if activities.length === 0}
			<div class="rounded-sm bg-helpo-light-gray p-12 text-center">
				<p class="text-lg font-bold text-helpo-heading">Nessuna attività in evidenza</p>
				<p class="mt-2">Torna presto per scoprire le nostre attività.</p>
			</div>
		{:else}
			<div class="space-y-8">
				{#each activities as activity}
					{@const img = imageUrl(activity, 'image', '600x0')}
					<article
						class="group relative grid overflow-hidden rounded-sm bg-helpo-light-gray {img
							? 'md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]'
							: ''}"
					>
						{#if img}
							<div class="aspect-[16/10] overflow-hidden md:aspect-auto">
								<img src={img} alt="" class="h-full w-full object-cover" loading="lazy" />
							</div>
						{/if}
						<div class="p-6 md:p-8 lg:p-10">
							<div class="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
								{#if activity.status}<StatusBadge status={activity.status} />{/if}
								{#if activity.period}
									<span class="text-sm">Periodo: {activity.period}</span>
								{/if}
							</div>
							<h3 class="mb-4 text-2xl">
								<a
									href="/attivita/{activity.slug}"
									class="no-underline transition-colors after:absolute after:inset-0 group-hover:text-helpo-purple"
								>
									{activity.title}
								</a>
							</h3>
							{#if activity.excerpt}
								<p class="max-w-3xl text-base leading-7">{activity.excerpt}</p>
							{/if}
							{#if activity.goal || activity.donated}
								<dl class="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
									{#if activity.goal}
										<div class="flex gap-1.5"><dt class="font-bold text-helpo-heading">Obiettivo:</dt><dd>{activity.goal}</dd></div>
									{/if}
									{#if activity.donated}
										<div class="flex gap-1.5"><dt class="font-bold text-helpo-heading">Donato:</dt><dd>{activity.donated}</dd></div>
									{/if}
								</dl>
							{/if}
							<p class="mt-6 text-xs font-bold uppercase tracking-wider text-helpo-purple">
								Scopri l'attività <span aria-hidden="true" class="inline-block transition-transform group-hover:translate-x-1">›</span>
							</p>
						</div>
					</article>
				{/each}
			</div>
		{/if}

		<div class="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button variant="filled" href={content.donation_url} target="_blank">Sostieni Sanabel</Button>
			<Button variant="reverted" href="/attivita">Tutte le attività</Button>
		</div>
	</div>
</section>
