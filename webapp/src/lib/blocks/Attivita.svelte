<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { donationUrl } from '$lib/links';
	import pb from '$lib/pocketbase';
	import { onMount } from 'svelte';

	const STATUS_COLORS: Record<string, string> = {
		'In corso': '#2EC774',
		'Sospeso': '#F36F8F',
		'Raggiunto': '#49C2DF'
	};

	let projects: any[] = [];
	let loading = true;

	onMount(async () => {
		try {
			projects = await pb.collection('sanabel_projects').getFullList({
				filter: 'published = true',
				sort: '-created'
			});
		} catch (e) {
			console.error(e);
		} finally {
			loading = false;
		}
	});
</script>

<section id="attivita" class="section py-20 lg:py-28">
	<div class="container mx-auto">
		<div class="text-center mb-16">
			<p class="mb-4 text-sm font-bold uppercase tracking-[0.26em] text-helpo-purple">Attività</p>
			<h2 class="text-4xl font-bold leading-tight text-helpo-heading md:text-5xl">
				I nostri progetti
			</h2>
			<p class="mt-6 max-w-3xl mx-auto text-lg leading-8 text-helpo-gray-text">
				Sanabel vive attraverso una rete di solidarietà diffusa di persone, gruppi e realtà coinvolte in
				diverse città italiane. In questi territori nascono iniziative, incontri e attività di sensibilizzazione che
				contribuiscono a sostenere il progetto e a costruire legami concreti di solidarietà con Gaza.
				Di seguito le nostre principali attività.
			</p>
		</div>

		{#if loading}
			<div class="space-y-6">
				{#each Array(3) as _}
					<div class="rounded-sm bg-white shadow-lg overflow-hidden animate-pulse">
						<div class="p-6 md:p-8 lg:p-10">
							<div class="h-6 w-24 bg-helpo-purple/10 rounded mb-5"></div>
							<div class="h-8 w-3/4 bg-helpo-purple/5 rounded mb-4"></div>
							<div class="space-y-2">
								<div class="h-4 w-full bg-helpo-purple/5 rounded"></div>
								<div class="h-4 w-5/6 bg-helpo-purple/5 rounded"></div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else if projects.length === 0}
			<div class="rounded-sm bg-white/70 p-12 text-center shadow-sm">
				<p class="text-lg font-bold text-helpo-heading">Nessuna attività in evidenza</p>
				<p class="mt-2 text-helpo-gray-text">Torna presto per scoprire le nostre attività.</p>
			</div>
		{:else}
			<div class="space-y-10">
				{#each projects as project}
					<article class="rounded-sm bg-white shadow-lg overflow-hidden">
						<div class="p-6 md:p-8 lg:p-10">
							<div class="flex flex-wrap items-center gap-4 mb-5">
								{#if project.status}
									<span
										class="inline-block text-white text-sm font-bold py-1 px-4 rounded"
										style="background-color: {STATUS_COLORS[project.status] || '#777'};"
									>
										{project.status}
									</span>
								{/if}
								{#if project.period}
									<span class="text-sm text-helpo-gray-text">Periodo: {project.period}</span>
								{/if}
							</div>
							<h3 class="text-2xl font-bold text-helpo-heading mb-4">
								{#if project.slug}
									<a href="/progetti/{project.slug}" class="no-underline hover:text-helpo-purple transition-colors">
										{project.title}
									</a>
								{:else}
									{project.title}
								{/if}
							</h3>
							<div class="max-w-3xl">
								<div class="text-base leading-7 text-helpo-gray-text">
									{#if project.excerpt}
										<p>{project.excerpt}</p>
									{:else if project.content}
										{@html project.content}
									{/if}
								</div>
							</div>
							<div class="mt-6 flex flex-wrap gap-6 text-sm">
								{#if project.goal}
									<div class="text-helpo-gray-text">
										<span class="font-bold text-helpo-heading">Obiettivo:&nbsp;</span>{project.goal}
									</div>
								{/if}
								{#if project.donated}
									<div class="text-helpo-gray-text">
										<span class="font-bold text-helpo-heading">Donato:&nbsp;</span>{project.donated}
									</div>
								{/if}
							</div>
						</div>
					</article>
				{/each}
			</div>
		{/if}

		<div class="mt-12 text-center">
			<Button variant="reverted" href={donationUrl} target="_blank">Sostieni il progetto</Button>
		</div>
	</div>
</section>
