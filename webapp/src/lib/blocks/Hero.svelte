<!-- src/lib/blocks/Hero.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';

	let currentSlide = 1;
	const totalSlides = 3;

	function next() {
		currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
	}

	function prev() {
		currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
	}
</script>

<section class="relative pt-32 lg:pt-0">
	<!-- Slide 1 -->
	<div
		class="min-h-[700px] lg:min-h-screen flex items-center"
		style="background-image: url('/promo_2.jpg'); background-size: cover; background-position: center;"
		class:hidden={currentSlide !== 1}
	>
		<!-- <img class="absolute inset-0 w-full h-full object-cover -z-10" src="/promo_2.jpg" alt="Helping around the world" /> -->
		<!-- <div class="absolute inset-0 bg-helpo-purple/70 -z-10"></div> -->

		<div class="container mx-auto text-white" >
			<div class="row">
				<div class="col-xl-7">
					<div class="flex flex-col gap-6">
						<h2 class="text-5xl lg:text-7xl font-bold text-white">
							Our Helping <br /><span class="font-light">around the world.</span>
						</h2>
						<p class="max-w-xl">
							Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish
							shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish
						</p>
						<div>
							<Button variant="primary" href="#">Discover</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Other slides would go here with similar structure -->

	<!-- Slider Controls -->
	<!-- <div class="absolute bottom-10 left-0 right-0">
		<div class="container mx-auto">
			<div class="flex items-center gap-8 text-white">
				<div class="font-bold">{currentSlide}/{totalSlides}</div>
				<div class="flex gap-4">
					<button
						on:click={prev}
						class="w-12 h-12 rounded-full border-2 border-helpo-yellow flex items-center justify-center text-white hover:bg-helpo-yellow hover:text-helpo-purple transition-colors"
						aria-label="Previous Slide"
					>
						&lt;
					</button>
					<button
						on:click={next}
						class="w-12 h-12 rounded-full border-2 border-helpo-yellow flex items-center justify-center text-white hover:bg-helpo-yellow hover:text-helpo-purple transition-colors"
						aria-label="Next Slide"
					>
						&gt;
					</button>
				</div>
			</div>
		</div>
	</div> -->

    <!-- Watch Video Button -->
    <!-- <a href="https://www.youtube.com" target="_blank" class="absolute bottom-10 right-10 flex items-center gap-4 text-white group">
        <span class="font-bold">Watch our video</span>
        <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
            <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <svg class="w-5 h-5 text-helpo-purple" viewBox="0 0 16 16" fill="currentColor"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
            </div>
        </div>
    </a> -->
</section>