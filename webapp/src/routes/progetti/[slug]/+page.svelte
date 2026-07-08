<script lang="ts">
	import pb from '$lib/pocketbase';
	import dayjs from 'dayjs';
	import 'dayjs/locale/it';

	dayjs.locale('it');

	export let data;
	const { project } = data;
</script>

<svelte:head>
	<title>{project.title} — Sanabel Progetti</title>
</svelte:head>

<main>
	<article>
		{#if project.image}
			<div class="relative h-64 overflow-hidden bg-helpo-dark md:h-96">
				<img
					src={pb.files.getURL(project, project.image)}
					alt={project.title}
					class="h-full w-full object-cover opacity-60"
				/>
				<div class="absolute inset-0 flex items-end">
					<div class="container mx-auto pb-8">
						<div class="max-w-3xl">
							<a href="/progetti" class="mb-4 inline-block text-sm font-bold uppercase tracking-wider text-helpo-yellow no-underline hover:underline">
								← Progetti
							</a>
							<h1 class="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
								{project.title}
							</h1>
						</div>
					</div>
				</div>
			</div>
		{:else}
			<div class="bg-helpo-light-gray py-16">
				<div class="container mx-auto">
					<a href="/progetti" class="mb-4 inline-block text-sm font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">
						← Progetti
					</a>
					<h1 class="max-w-3xl text-3xl font-bold leading-tight text-helpo-heading md:text-4xl lg:text-5xl">
						{project.title}
					</h1>
				</div>
			</div>
		{/if}

		<div class="container mx-auto py-12 lg:py-16">
			<div class="mx-auto max-w-3xl">
				<div class="mb-10 flex flex-wrap items-center gap-4 border-b border-helpo-purple/10 pb-8">
					{#if project.category}
						<span class="inline-block bg-helpo-yellow/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.12em] text-helpo-purple">
							{project.category}
						</span>
					{/if}
					{#if project.location}
						<span class="text-sm text-helpo-gray-text">{project.location}</span>
					{/if}
					<time class="text-sm text-helpo-purple/60">
						{dayjs(project.created).format('D MMMM YYYY')}
					</time>
				</div>

				<div class="prose prose-lg max-w-none prose-headings:text-helpo-heading prose-p:text-helpo-gray-text prose-p:leading-8 prose-a:text-helpo-purple prose-strong:text-helpo-heading">
					{@html project.content}
				</div>

				<div class="mt-16 border-t border-helpo-purple/10 pt-8">
					<a href="/progetti" class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">
						← Torna ai progetti
					</a>
				</div>
			</div>
		</div>
	</article>
</main>
