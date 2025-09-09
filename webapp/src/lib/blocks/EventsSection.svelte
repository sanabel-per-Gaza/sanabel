<!-- src/lib/blocks/EventsSection.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import EventCard from '$lib/components/cards/EventCard.svelte';
</script>

<section class="section relative">
	<img class="absolute left-0 bottom-0 -z-10 hidden lg:block" src="img/events_bg.png" alt="background decoration" />
	<div class="container mx-auto">
		<div class="row mb-12">
			<div class="col-12">
				<SectionHeader
					center={true}
					preTitle="Events"
					mainTitle="<span>Helpo Holds</span> <span>for You</span>"
				/>
				<p class="max-w-2xl mx-auto text-center mt-4">
					Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento
					splittail, Canthigaster rostrata. Midshipman dartfish
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 col-lg-4">
				<EventCard
					imageUrl="img/event_1.jpg"
					title="Help for Language. Voluanteer"
					location="<b>Dark Spurt,</b> San Francisco, CA 94528, USA"
					dates="<b>September 30 - October 31,</b> 2019"
					times="<b>10:00 AM - 18:00 PM,</b> Everyday"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<EventCard
					imageUrl="img/event_2.jpg"
					title="The Culture of Africa. Rebirth"
					location="<b>Dark Spurt,</b> San Francisco, CA 94528, USA"
					dates="<b>September 30 - October 31,</b> 2019"
					times="<b>10:00 AM - 18:00 PM,</b> Everyday"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<EventCard
					imageUrl="img/event_3.jpg"
					title="Help for Language. Voluanteer"
					location="<b>Dark Spurt,</b> San Francisco, CA 94528, USA"
					dates="<b>April 15 - April 20,</b> 2019"
					times="<b>10:00 AM - 15:00 PM,</b> Everyday"
				/>
			</div>
		</div>
		<div class="row">
			<div class="col-12 text-center">
				<Button href="#">View All Events</Button>
			</div>
		</div>
	</div>
</section>