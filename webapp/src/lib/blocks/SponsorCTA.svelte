<!-- src/lib/blocks/SponsorCTA.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="section relative py-20 lg:py-36 overflow-hidden">
	<!-- Background Blobs -->
	<img
		src="img/text-section_2.png"
		alt="decoration"
		class="absolute -bottom-1/4 -left-1/4 w-full h-auto -z-10 opacity-70"
	/>
	<div class="container mx-auto relative">
		<div class="row">
			<div class="col-12 text-center">
				<h2 class="font-storytella text-helpo-yellow text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] leading-none">Sponsor</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-8 offset-lg-2 text-center -mt-8 md:-mt-12 lg:-mt-16">
				<h3 class="text-3xl lg:text-5xl text-helpo-heading mb-4">
					Delivering help and hope <br />
					to children through sponsorship.
				</h3>
				<p class="max-w-xl mx-auto text-helpo-gray-text">
					Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento
					splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish
				</p>
				<div class="mt-8">
					<Button href="#">More Information</Button>
				</div>
			</div>
		</div>
	</div>
</section>