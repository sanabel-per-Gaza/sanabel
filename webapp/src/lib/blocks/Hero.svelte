<!-- src/lib/blocks/Hero.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';

</script>

<section class="relative pt-32 lg:pt-0">
	<div
		class="min-h-[700px] lg:min-h-screen flex items-center"
		style="background-image: url('/promo_2.jpg'); background-size: cover; background-position: center;"
	>
		<div class="container mx-auto text-white" >
			<div class="row">
				<div class="col-xl-7">
					<div class="flex flex-col gap-6">
						<div class="text-5xl lg:text-7xl font-bold text-white">
							Spighe <br /><span class="font-light">di solidarietà per Gaza</span>
						</div>
						<p class="max-w-xl">
							Sanabel non è un aiuto che parte da qui per arrivare là: è uno scambio profondo, un cammino comune che unisce le nostre esperienze, competenze e desideri di giustizia. Ci accompagniamo a vicenda, ogni giorno, come spighe che si piegano insieme al vento senza spezzarsi.
						</p>
						<div>
							<Button variant="primary" href="#">Dona</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>