<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/nunito-sans';
	import { page } from '$app/stores';
	import Header from '$lib/blocks/Header.svelte';
	import Footer from '$lib/blocks/Footer.svelte';

	export let data;

	$: content = data.content;
	$: isAdmin = $page.url.pathname.startsWith('/admin');
</script>

<svelte:head>
	<meta name="description" content={content.site_description} />
	<meta property="og:site_name" content="Sanabel" />
	<meta property="og:description" content={content.site_description} />
	<meta property="og:image" content={new URL(content.hero_image, $page.url.origin).href} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="it_IT" />
</svelte:head>

{#if isAdmin}
	<slot />
{:else}
	<a
		href="#contenuto"
		class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-helpo-yellow focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-helpo-purple"
	>
		Vai al contenuto
	</a>
	<div class="flex min-h-screen flex-col bg-white">
		<Header {content} />
		<main id="contenuto" class="flex-1">
			<slot />
		</main>
		<Footer {content} />
	</div>
{/if}
