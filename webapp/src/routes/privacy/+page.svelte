<script lang="ts">
	import PageHero from '$lib/components/ui/PageHero.svelte';

	export let data;
	$: c = data.content;
</script>

<svelte:head>
	<title>{c.privacy_title} — Sanabel</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<PageHero title={c.privacy_title} breadcrumb={[{ label: c.privacy_title }]} />

<section class="py-14 lg:py-20">
	<div class="container">
		<div class="rich-text rich-text--compact mx-auto max-w-3xl [overflow-wrap:anywhere]">
			{@html c.privacy_body}
		</div>
	</div>
</section>
