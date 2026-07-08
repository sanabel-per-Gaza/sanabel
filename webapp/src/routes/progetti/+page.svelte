<script lang="ts">
	import pb from '$lib/pocketbase';
	import dayjs from 'dayjs';
	import 'dayjs/locale/it';

	dayjs.locale('it');

	export let data;
	const { projects } = data;
</script>

<svelte:head>
	<title>Progetti — Sanabel</title>
</svelte:head>

<main>
	<section class="bg-helpo-light-gray py-20 lg:py-28">
		<div class="container mx-auto">
			<div class="mb-16 text-center">
				<p class="mb-4 text-sm font-bold uppercase tracking-[0.26em] text-helpo-purple">Progetti</p>
				<h1 class="text-4xl font-bold leading-tight text-helpo-heading md:text-5xl">
					quello che facciamo
				</h1>
			</div>

			{#if projects.length === 0}
				<div class="rounded-sm bg-white/70 p-12 text-center shadow-sm">
					<p class="text-lg font-bold text-helpo-heading">Nessun progetto</p>
					<p class="mt-2 text-helpo-gray-text">Torna presto per scoprire i nostri progetti.</p>
				</div>
			{:else}
				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each projects as project}
						<article class="group flex flex-col overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md">
							{#if project.image}
								<div class="aspect-[16/10] overflow-hidden">
									<img
										src={pb.files.getURL(project, project.image)}
										alt={project.title}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										loading="lazy"
									/>
								</div>
							{:else}
								<div class="flex aspect-[16/10] items-center justify-center bg-helpo-purple/5">
									<span class="text-4xl text-helpo-purple/20">🌱</span>
								</div>
							{/if}
							<div class="flex flex-1 flex-col p-6">
								{#if project.category}
									<span class="text-xs font-bold uppercase tracking-[0.15em] text-helpo-yellow">{project.category}</span>
								{/if}
								<h2 class="mt-2 text-xl font-bold leading-snug text-helpo-heading">
									<a href="/progetti/{project.slug}" class="no-underline hover:text-helpo-purple transition-colors">
										{project.title}
									</a>
								</h2>
								{#if project.excerpt}
									<p class="mt-3 flex-1 text-sm leading-7 text-helpo-gray-text line-clamp-3">
										{project.excerpt}
									</p>
								{/if}
								<div class="mt-4 flex items-center justify-between border-t border-helpo-purple/8 pt-4">
									{#if project.location}
										<span class="text-xs text-helpo-gray-text">{project.location}</span>
									{:else}
										<span></span>
									{/if}
									<a href="/progetti/{project.slug}" class="text-xs font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">
										Scopri →
									</a>
								</div>
							</div>
						</article>
					{/each}
				</div>
			{/if}
		</div>
	</section>
</main>
