<!-- src/lib/blocks/FeaturedCauses.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import CauseCard from '$lib/components/cards/CauseCard.svelte';
</script>

<section class="section bg-helpo-light-gray relative overflow-hidden">
	<img class="absolute bottom-0 right-0 hidden lg:block" src="img/causes_img.png" alt="background decoration" />
	<div class="container mx-auto">
		<div class="row mb-8">
			<div class="col-lg-4">
				<SectionHeader preTitle="What we Do" mainTitle="<span>Helpo</span> <span>Causes</span>" />
			</div>
			<div class="col-lg-8 flex flex-col justify-end">
				<p class="text-helpo-gray-text mt-8 lg:mt-0">
					Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento
					splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish.
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<CauseCard
					imageUrl="img/causes_1.jpg"
					category="Water Delivery"
					categoryColor="#49C2DF"
					title="Clean Water in Africa"
					percentage={78}
					goal="25 000$"
					pledged="20 350$"
				/>
				<CauseCard
					imageUrl="img/causes_2.jpg"
					category="Medicine"
					categoryColor="#F36F8F"
					title="Health in other Countries"
					percentage={23}
					goal="14 000$"
					pledged="6 098$"
				/>
				<CauseCard
					imageUrl="img/causes_3.jpg"
					category="Education"
					categoryColor="#2EC774"
					title="We Build and Create"
					percentage={51}
					goal="159 000$"
					pledged="76 500$"
				/>
			</div>
		</div>
		<div class="row">
			<div class="col-12 text-center mt-8">
				<Button href="#">More Causes</Button>
			</div>
		</div>
	</div>
</section>