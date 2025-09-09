<!-- src/lib/blocks/Testimonials.svelte -->
<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import TestimonialCard from '$lib/components/cards/TestimonialCard.svelte';

	// Mock data for testimonials
	const testimonials = [
		{
			text: 'Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury swordfish southern.',
			author: 'Jack Wolfskin',
			position: 'Volunteer'
		},
		{
			text: 'Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel.',
			author: 'Jane Doe',
			position: 'Donor'
		}
	];
</script>

<section class="section bg-helpo-light-gray">
	<div class="container mx-auto">
		<div class="row">
			<div class="col-xl-4">
				<div class="flex flex-col sm:flex-row sm:items-end sm:justify-between xl:flex-col xl:items-start xl:justify-start">
					<SectionHeader
						preTitle="Testimonials"
						mainTitle="<span>What People</span><br /><span>Says About Us</span>"
					/>
					<!-- Slider Nav -->
					<div class="slider__nav mt-8 sm:mt-0 xl:mt-12">
						<div class="flex gap-4">
							<button
								class="w-12 h-12 rounded-full border-2 border-helpo-yellow flex items-center justify-center text-helpo-purple hover:bg-helpo-yellow transition-colors"
								aria-label="Previous Testimonial"
							>
								&lt;
							</button>
							<button
								class="w-12 h-12 rounded-full border-2 border-helpo-yellow flex items-center justify-center text-helpo-purple hover:bg-helpo-yellow transition-colors"
								aria-label="Next Testimonial"
							>
								&gt;
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-8 mt-12 xl:mt-0">
				<!-- This is a simplified slider. A real implementation would use a library or more complex logic -->
				<div class="overflow-hidden">
					<div class="flex">
						{#each testimonials as testimonial}
							<div class="w-full flex-shrink-0 lg:w-1/2 lg:pr-8">
								<TestimonialCard {...testimonial} />
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>