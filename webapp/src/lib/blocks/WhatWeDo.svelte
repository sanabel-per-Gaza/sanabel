<!-- src/lib/blocks/WhatWeDo.svelte -->
<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import ServiceCard from '$lib/components/cards/ServiceCard.svelte';
</script>

<section class="section" id="nodi">
	<div class="container mx-auto py-8">
		<div class="mb-12">
				<SectionHeader
					preTitle="Nodi territorial"
					mainTitle="Ci potete raggiungere in queste cittá"
					center
				/>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<div class="col-sm-6 col-lg-3">
				<ServiceCard
					iconSrc="napoli.png"
					title="Napoli"
					description="Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail,"
				/>
			</div>
			<div class="col-sm-6 col-lg-3">
				<ServiceCard
					iconSrc="torino.png"
					title="Torino"
					description="Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet"
				/>
			</div>
			<div class="col-sm-6 col-lg-3">
				<ServiceCard
					iconSrc="napoli.png"
					title="Matera"
					description="Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish"
				/>
			</div>
			<div class="col-sm-6 col-lg-3">
				<ServiceCard
					iconSrc="torino.png"
					title="Brescia"
					description="Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead"
				/>

			</div>
			<div class="col-sm-6 col-lg-3">
				<ServiceCard
					iconSrc="napoli.png"
					title="Brescia"
					description="Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead"
				/>
			</div>
			<div class="col-sm-6 col-lg-3">
				<ServiceCard
					iconSrc="napoli.png"
					title="Brescia"
					description="Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead"
				/>
			</div>
		</div>
	</div>
</section>