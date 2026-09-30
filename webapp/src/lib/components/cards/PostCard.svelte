<script lang="ts">
	import type { RecordModel } from 'pocketbase';
	import { formatDate, imageUrl, postDate } from '$lib/data';

	export let post: RecordModel;
	export let headingLevel: 'h2' | 'h3' = 'h3';

	$: img = imageUrl(post, 'image', '800x0');
</script>

<article class="group relative flex flex-col overflow-hidden rounded-sm bg-helpo-light-gray transition-shadow hover:shadow-lg">
	<div class="aspect-[16/10] overflow-hidden bg-helpo-purple/8">
		{#if img}
			<img
				src={img}
				alt=""
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				loading="lazy"
			/>
		{:else}
			<div class="flex h-full items-center justify-center">
				<img src="/logo-sanabel.jpeg" alt="" class="h-20 w-20 opacity-30 mix-blend-multiply grayscale" />
			</div>
		{/if}
	</div>
	<div class="flex flex-1 flex-col p-6">
		<time datetime={postDate(post)} class="text-xs font-bold uppercase tracking-[0.15em] text-helpo-purple/70">
			{formatDate(postDate(post))}
		</time>
		<svelte:element this={headingLevel} class="mt-3 text-xl leading-snug">
			<a href="/blog/{post.slug}" class="no-underline transition-colors after:absolute after:inset-0 group-hover:text-helpo-purple">
				{post.title}
			</a>
		</svelte:element>
		{#if post.excerpt}
			<p class="mt-3 line-clamp-3 flex-1 text-sm leading-7">{post.excerpt}</p>
		{:else}
			<div class="flex-1"></div>
		{/if}
		<div class="mt-5 flex items-center justify-between border-t border-helpo-purple/10 pt-4">
			<span class="text-xs">{post.author || 'Sanabel'}</span>
			<span class="text-xs font-bold uppercase tracking-wider text-helpo-purple">
				Leggi <span aria-hidden="true" class="inline-block transition-transform group-hover:translate-x-1">›</span>
			</span>
		</div>
	</div>
</article>
