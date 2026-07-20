<script lang="ts">
    import Hero from '$lib/blocks/Hero.svelte';
    import AboutStats from '$lib/blocks/AboutStats.svelte';
    import Attivita from '$lib/blocks/Attivita.svelte';
    import BlogSection from '$lib/blocks/BlogSection.svelte';

    export let data;
    const { posts } = data;
  </script>
  
  <main>
    <Hero />
    <AboutStats />
    <Attivita />
    <BlogSection {posts} />
  </main>