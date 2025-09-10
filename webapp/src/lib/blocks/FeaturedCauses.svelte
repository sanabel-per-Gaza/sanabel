<!-- src/lib/blocks/FeaturedCauses.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import CauseCard from '$lib/components/cards/CauseCard.svelte';
</script>

<section class="section bg-helpo-light-gray relative overflow-hidden py-8">
	<img class="absolute bottom-0 right-0 hidden lg:block" src="img/causes_img.png" alt="background decoration" />
	<div class="container mx-auto">
		<div class="flex flex-row mb-8 items-start">
			<div class="min-w-sm">
				<SectionHeader preTitle="Progetti" mainTitle="Sanabel progetti" />
			</div>
			<div class="col-lg-8 flex flex-col justify-end">
				<p class="text-helpo-gray-text mt-8 lg:mt-0">
					Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento
					splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish.
				</p>
				<div class="mt-8">
					<Button variant="reverted" href="#">More Causes</Button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<CauseCard
					imageUrl="img/causes_1.jpg"
					category="Water Delivery"
					categoryColor="#49C2DF"
					title="Distribuzione di acqua potabile e kit per l’igiene"
					percentage={78}
					goal="25 000$"
					pledged="20 350$"
				/>
				<CauseCard
					imageUrl="img/causes_2.jpg"
					category="Medicine"
					categoryColor="#F36F8F"
					title="Supporto psicosociale con attività di gruppo e consulenza tra pari"
					percentage={23}
					goal="14 000$"
					pledged="6 098$"
				/>
				<CauseCard
					imageUrl="img/causes_2.jpg"
					category="Medicine"
					categoryColor="#F36F8F"
					title="fornitura di ausili per la mobilità e la comunicazione"
					percentage={23}
					goal="14 000$"
					pledged="6 098$"
				/>
				<CauseCard
					imageUrl="img/causes_3.jpg"
					category="Education"
					categoryColor="#2EC774"
					title="sostegno educativo per bambine e bambini autistici"
					percentage={51}
					goal="159 000$"
					pledged="76 500$"
				/>
				<CauseCard
					imageUrl="img/causes_3.jpg"
					category="Education"
					categoryColor="#2EC774"
					title="formazione reciproca per assistenti, volontari e familiari"
					percentage={51}
					goal="159 000$"
					pledged="76 500$"
				/>
			</div>
		</div>
		<div class="row">
			<div class="col-12 text-center mt-8">
				<!-- <Button variant="reverted" href="#">More Causes</Button> -->
			</div>
		</div>
	</div>
</section>