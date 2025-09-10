<!-- src/lib/blocks/WhatWeDo.svelte -->
<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import ServiceCard from '$lib/components/cards/ServiceCard.svelte';
</script>

<section class="section">
	<div class="container mx-auto py-8">
		<div class="mb-12">
				<SectionHeader
					preTitle="What We do"
					mainTitle="<span>We do it</span> <span>for all people</span>"
					center
				/>
		</div>
		<div class="flex justify-between space-x-16">
			<div class="col-sm-6 col-lg-3">
				<ServiceCard
					iconSrc="img/svg/icons_2/1_blood.svg"
					title="Medicine Help"
					description="Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail,"
				/>
			</div>
			<div class="col-sm-6 col-lg-3">
				<ServiceCard
					iconSrc="img/svg/icons_2/1_house.svg"
					title="We Build and Create"
					description="Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet"
				/>
			</div>
			<div class="col-sm-6 col-lg-3">
				<ServiceCard
					iconSrc="img/svg/icons_2/1_charity.svg"
					title="Water Delivery"
					description="Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish"
				/>
			</div>
			<div class="col-sm-6 col-lg-3">
				<ServiceCard
					iconSrc="img/svg/icons_2/1_nature.svg"
					title="We Care About"
					description="Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead"
				/>
			</div>
		</div>
	</div>
</section>