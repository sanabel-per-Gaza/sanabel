<script>
    import Hero from '$lib/blocks/Hero.svelte';
    import AboutStats from '$lib/blocks/AboutStats.svelte';
    import WhatWeDo from '$lib/blocks/WhatWeDo.svelte';
    import FeaturedCauses from '$lib/blocks/FeaturedCauses.svelte';
    import EventsSection from '$lib/blocks/EventsSection.svelte';

  export let data
  const { events } = data

  </script>
  
  <main>

    
    <WhatWeDo />
    <FeaturedCauses />
    <EventsSection {events} />
  </main>