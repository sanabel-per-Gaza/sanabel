<!-- src/lib/blocks/AboutStats.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
</script>

<section class="section bg-helpo-light-gray">
	<div class="container mx-auto">
		<div class="row items-center">
			<div class="col-xl-4 mb-8 xl:mb-0">
				<SectionHeader preTitle="About Us" mainTitle="<span>Help is Our</span> <span>Main Goal Ever</span>" />
				<div class="hidden xl:block mt-8">
					<Button href="#">More About</Button>
				</div>
			</div>
			<div class="col-xl-8">
				<p>
					<strong
						>Thresher shark rudd African lungfish silverside, Red salmon rockfish grunion, garpike
						zebra danio king-of-the-salmon banjo catfish.</strong
					>
				</p>
				<p>
					Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish
					velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling
					trout-perch
				</p>
				<p>
					Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento
					splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish
					basslet. Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish,
					catla wolffish, mosshead warbonnet grouper darter wels catfish mud catfish.
				</p>
				<div class="row mt-12">
					<div class="col-md-4 text-center md:text-left mb-8 md:mb-0">
						<h6 class="text-sm font-bold text-helpo-heading mb-2">People We Helped on 2018</h6>
						<div class="text-6xl font-bold text-helpo-purple">
							200<span class="text-4xl">k</span>
						</div>
					</div>
					<div class="col-md-4 text-center md:text-left mb-8 md:mb-0">
						<h6 class="text-sm font-bold text-helpo-heading mb-2">Dollars We Collected</h6>
						<div class="text-6xl font-bold text-helpo-purple">
							65<span class="text-4xl">bil</span>
						</div>
					</div>
					<div class="col-md-4 text-center md:text-left">
						<h6 class="text-sm font-bold text-helpo-heading mb-2">Closed Projects</h6>
						<div class="text-6xl font-bold text-helpo-purple">
							100<span class="text-4xl">+</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 text-center xl:hidden mt-8">
				<Button href="#">More About</Button>
			</div>
		</div>
	</div>
</section>