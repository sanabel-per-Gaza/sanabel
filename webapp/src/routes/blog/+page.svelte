<script lang="ts">
	import PageHero from '$lib/components/ui/PageHero.svelte';
	import PostCard from '$lib/components/cards/PostCard.svelte';

	export let data;
	$: c = data.content;
</script>

<svelte:head>
	<title>Blog — Sanabel</title>
	<meta property="og:title" content="Blog — Sanabel" />
</svelte:head>

<PageHero eyebrow={c.blog_eyebrow} title={c.blog_title} />

<section class="pb-20 lg:pb-28">
	<div class="container">
		{#if data.posts.length === 0}
			<div class="rounded-sm bg-helpo-light-gray p-12 text-center">
				<p class="text-lg font-bold text-helpo-heading">Nessun articolo</p>
				<p class="mt-2">Torna presto per leggere i nostri aggiornamenti.</p>
			</div>
		{:else}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each data.posts as post}
					<PostCard {post} headingLevel="h2" />
				{/each}
			</div>
		{/if}
	</div>
</section>
