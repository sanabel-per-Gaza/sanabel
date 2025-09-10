<script>
  import EventCard from "$lib/components/cards/EventCard.svelte";
  import SectionHeader from "$lib/components/ui/SectionHeader.svelte";
  import pb from "$lib/pocketbase.js";
  import dayjs from "dayjs";

  export let data
  const { events } = data
  $: console.log(events)

</script>

<main>
    <section class="relative pt-32">
        <div class="py-8">
            <SectionHeader center preTitle="Eventi" mainTitle="Eventi che ci vedono coinvolti" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each events as event}
                <EventCard
                    imageUrl={pb.files.getURL(event,event.image)}
                    title={event.title}
                    location={event.address}
                    dates={dayjs(event.from).format('DD MMMM YYYY') + (event.to ? ' - ' + dayjs(event.to).format('DD MMMM YYYY') : '')}
                    times={event.times}
                />
            {/each}
        </div>
    </section>
</main>
