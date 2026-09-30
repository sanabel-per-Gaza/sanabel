<script lang="ts">
	import type { RecordModel } from 'pocketbase';
	import Button from '$lib/components/ui/Button.svelte';
	import PostCard from '$lib/components/cards/PostCard.svelte';
	import type { SiteContent } from '$lib/content';

	export let content: SiteContent;
	export let posts: RecordModel[] = [];
</script>

{#if posts.length}
	<section class="py-20 lg:py-28">
		<div class="container">
			<div class="mb-14 text-center">
				<p class="eyebrow mb-4">{content.blog_eyebrow}</p>
				<h2 class="text-4xl leading-tight md:text-5xl">{content.blog_title}</h2>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each posts as post}
					<PostCard {post} />
				{/each}
			</div>

			<div class="mt-12 text-center">
				<Button variant="reverted" href="/blog">Tutti gli articoli</Button>
			</div>
		</div>
	</section>
{/if}
