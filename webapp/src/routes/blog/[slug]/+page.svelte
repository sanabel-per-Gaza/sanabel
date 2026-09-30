<script lang="ts">
	import PageHero from '$lib/components/ui/PageHero.svelte';
	import { formatDate, imageUrl, postDate } from '$lib/data';

	export let data;
	$: post = data.post;

	// I vecchi articoli sono testo semplice: in quel caso conserviamo gli a capo
	$: isHtml = /<\/?(p|h[1-6]|ul|ol|div|br)\b/i.test(post.content ?? '');
</script>

<svelte:head>
	<title>{post.title} — Sanabel</title>
	<meta property="og:title" content={post.title} />
	<meta property="og:type" content="article" />
	{#if post.excerpt}<meta name="description" content={post.excerpt} />{/if}
	{#if imageUrl(post)}<meta property="og:image" content={imageUrl(post)} />{/if}
</svelte:head>

<PageHero
	eyebrow="Blog"
	title={post.title}
	image={imageUrl(post)}
	breadcrumb={[{ href: '/blog', label: 'Blog' }, { label: post.title }]}
/>

<article class="py-14 lg:py-20">
	<div class="container">
		<div class="mx-auto max-w-3xl">
			<div class="mb-10 flex flex-wrap items-center gap-4 border-b border-helpo-purple/10 pb-6 text-sm">
				<time datetime={postDate(post)} class="font-bold uppercase tracking-[0.12em] text-helpo-purple/70">
					{formatDate(postDate(post))}
				</time>
				{#if post.author}
					<span>di <strong class="text-helpo-heading">{post.author}</strong></span>
				{/if}
			</div>

			<div class="rich-text" class:whitespace-pre-line={!isHtml}>{@html post.content}</div>

			<div class="mt-14 border-t border-helpo-purple/10 pt-8">
				<a href="/blog" class="text-sm font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">
					<span aria-hidden="true">‹</span> Torna al blog
				</a>
			</div>
		</div>
	</div>
</article>
