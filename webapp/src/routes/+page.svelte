<script>
    import Hero from '$lib/blocks/Hero.svelte';
    import AboutStats from '$lib/blocks/AboutStats.svelte';
    import WhatWeDo from '$lib/blocks/WhatWeDo.svelte';
    import FeaturedCauses from '$lib/blocks/FeaturedCauses.svelte';
    // import ProjectsGrid from '$lib/blocks/ProjectsGrid.svelte';
    // import SponsorCTA from '$lib/blocks/SponsorCTA.svelte';
    import EventsSection from '$lib/blocks/EventsSection.svelte';
    // import Testimonials from '$lib/blocks/Testimonials.svelte';

    import EventCard from "$lib/components/cards/EventCard.svelte";
  import SectionHeader from "$lib/components/ui/SectionHeader.svelte";
  import pb from "$lib/pocketbase.js";
  import dayjs from "dayjs";

  export let data
  const { events } = data

  </script>
  
  <!-- <Header /> -->
  
  <main>
    <Hero />
    <AboutStats />
    <WhatWeDo />
    <FeaturedCauses "/>
    <!-- <ProjectsGrid /> -->
    <!-- <SponsorCTA /> -->
    <EventsSection {events} />
    <!-- <Testimonials /> -->
  </main>
  
  <!-- <Footer /> -->