<script lang="ts">
	import Hero from '$lib/blocks/Hero.svelte';
	import AboutStats from '$lib/blocks/AboutStats.svelte';
	import Attivita from '$lib/blocks/Attivita.svelte';
	import BlogSection from '$lib/blocks/BlogSection.svelte';

	export let data;
</script>

<svelte:head>
	<title>Sanabel — spighe di solidarietà per Gaza</title>
	<meta property="og:title" content="Sanabel — spighe di solidarietà per Gaza" />
</svelte:head>

<Hero content={data.content} />
<AboutStats content={data.content} />
<Attivita content={data.content} activities={data.activities} />
<BlogSection content={data.content} posts={data.posts} />
