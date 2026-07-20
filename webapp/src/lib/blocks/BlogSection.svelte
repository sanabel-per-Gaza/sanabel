<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import pb from '$lib/pocketbase';
	import dayjs from 'dayjs';
	import 'dayjs/locale/it';
	import type { RecordModel } from 'pocketbase';

	dayjs.locale('it');

	export let posts: RecordModel[] = [];
</script>

<section class="section relative py-20 lg:py-28 bg-helpo-light-gray">
	<div class="container mx-auto">
		<div class="mb-16">
			<SectionHeader
				center={true}
				preTitle="Blog"
				mainTitle="storie e aggiornamenti"
			/>
		</div>

		{#if posts.length === 0}
			<div class="rounded-sm bg-white/70 p-12 text-center shadow-sm">
				<p class="text-lg font-bold text-helpo-heading">Nessun articolo</p>
				<p class="mt-2 text-helpo-gray-text">Torna presto per leggere i nostri aggiornamenti.</p>
			</div>
		{:else}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each posts as post}
					<article class="group flex flex-col overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md">
						{#if post.image}
							<div class="aspect-[16/10] overflow-hidden">
								<img
									src={pb.files.getURL(post, post.image)}
									alt={post.title}
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									loading="lazy"
								/>
							</div>
						{:else}
							<div class="flex aspect-[16/10] items-center justify-center bg-helpo-purple/5">
								<span class="text-4xl text-helpo-purple/20">📰</span>
							</div>
						{/if}
						<div class="flex flex-1 flex-col p-6">
							<time class="text-xs font-bold uppercase tracking-[0.15em] text-helpo-purple/60">
								{dayjs(post.created).format('D MMMM YYYY')}
							</time>
							<h3 class="mt-3 text-xl font-bold leading-snug text-helpo-heading">
								<a href="/blog/{post.slug}" class="no-underline hover:text-helpo-purple transition-colors">
									{post.title}
								</a>
							</h3>
							{#if post.excerpt}
								<p class="mt-3 flex-1 text-sm leading-7 text-helpo-gray-text line-clamp-3">
									{post.excerpt}
								</p>
							{/if}
							<div class="mt-4 flex items-center justify-between border-t border-helpo-purple/8 pt-4">
								<span class="text-xs text-helpo-gray-text">{post.author || 'Sanabel'}</span>
								<a href="/blog/{post.slug}" class="text-xs font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">
									Leggi →
								</a>
							</div>
						</div>
					</article>
				{/each}
			</div>

			<div class="mt-12 text-center">
				<Button variant="reverted" href="/blog">Tutti gli articoli</Button>
			</div>
		{/if}
	</div>
</section>
