<script lang="ts">
	import pb from '$lib/pocketbase';
	import dayjs from 'dayjs';
	import 'dayjs/locale/it';

	dayjs.locale('it');

	export let data;
	const { post } = data;
</script>

<svelte:head>
	<title>{post.title} — Sanabel Blog</title>
</svelte:head>

<main>
	<article>
		{#if post.image}
			<div class="relative h-64 overflow-hidden bg-helpo-dark md:h-96">
				<img
					src={pb.files.getURL(post, post.image)}
					alt={post.title}
					class="h-full w-full object-cover opacity-60"
				/>
				<div class="absolute inset-0 flex items-end">
					<div class="container mx-auto pb-8">
						<div class="max-w-3xl">
							<a href="/blog" class="mb-4 inline-block text-sm font-bold uppercase tracking-wider text-helpo-yellow no-underline hover:underline">
								← Blog
							</a>
							<h1 class="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
								{post.title}
							</h1>
						</div>
					</div>
				</div>
			</div>
		{:else}
			<div class="bg-helpo-light-gray py-16">
				<div class="container mx-auto">
					<a href="/blog" class="mb-4 inline-block text-sm font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">
						← Blog
					</a>
					<h1 class="max-w-3xl text-3xl font-bold leading-tight text-helpo-heading md:text-4xl lg:text-5xl">
						{post.title}
					</h1>
				</div>
			</div>
		{/if}

		<div class="container mx-auto py-12 lg:py-16">
			<div class="mx-auto max-w-3xl">
				<div class="mb-10 flex flex-wrap items-center gap-4 border-b border-helpo-purple/10 pb-8">
					<time class="text-sm font-bold uppercase tracking-[0.12em] text-helpo-purple/60">
						{dayjs(post.created).format('D MMMM YYYY')}
					</time>
					{#if post.author}
						<span class="text-sm text-helpo-gray-text">di <strong class="text-helpo-heading">{post.author}</strong></span>
					{/if}
				</div>

				<div class="prose prose-lg max-w-none prose-headings:text-helpo-heading prose-p:text-helpo-gray-text prose-p:leading-8 prose-a:text-helpo-purple prose-strong:text-helpo-heading">
					{@html post.content}
				</div>

				<div class="mt-16 border-t border-helpo-purple/10 pt-8">
					<a href="/blog" class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">
						← Torna al blog
					</a>
				</div>
			</div>
		</div>
	</article>
</main>
