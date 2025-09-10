<!-- src/lib/blocks/EventsSection.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import EventCard from '$lib/components/cards/EventCard.svelte';
	import dayjs from 'dayjs';
	import pb from '$lib/pocketbase';
	import type { RecordModel } from 'pocketbase';

	export let events: RecordModel[] = [];
	$: console.log(events);
</script>

<section class="section relative  py-8">
	<img class="absolute left-0 bottom-0 -z-10 hidden lg:block" src="img/events_bg.png" alt="background decoration" />
	<div class="container mx-auto">
		<div class="row mb-12">
			<div class="col-12">
				<SectionHeader
					center={true}
					preTitle="Eventi"
					mainTitle="Sanabel ti aspetta"
				/>
				<p class="max-w-2xl mx-auto text-center mt-4">
					Le spighe di sanabel si intrecciano per sostenere chi ha bisogno.
				</p>
			</div>
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
				<EventCard
                    imageUrl={pb.files.getURL(event,event.image)}
                    title={event.title}
                    location={event.address}
                    dates={dayjs(event.from).format('DD MMMM YYYY') + (event.to ? ' - ' + dayjs(event.to).format('DD MMMM YYYY') : '')}
                    times={event.times}
                />
				<EventCard
                    imageUrl={pb.files.getURL(event,event.image)}
                    title={event.title}
                    location={event.address}
                    dates={dayjs(event.from).format('DD MMMM YYYY') + (event.to ? ' - ' + dayjs(event.to).format('DD MMMM YYYY') : '')}
                    times={event.times}
                />
            {/each}
        </div>
		<div class="row">
			<div class="col-12 text-center">
				<Button variant="reverted" href="#">View All Events</Button>
			</div>
		</div>
	</div>
</section>