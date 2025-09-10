<!-- src/lib/blocks/AboutStats.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
</script>

<section class="section bg-helpo-light-gray py-8">
	<div class="container mx-auto">
		<div class="flex flex-row items-center space-x-2 items-start ">
			<div class="flex flex-col mb-8 xl:mb-0 min-w-[400px] pt-8">
				<SectionHeader preTitle="About Us" mainTitle="<span>Help is Our</span> <span>Main Goal Ever</span>" />
				<div class="xl:block mt-8">
					<Button variant="reverted" href="#">More About</Button>
				</div>
			</div>
			<div class="flex flex-col py-8">
				<p>
					<strong
						>Sanabel è un progetto di amicizia e sostegno alle persone con disabilità fisiche, sensoriali, intellettive e alle bambine e bambini con autismo e altre neurodivergenze nella Striscia di Gaza.</strong
					>
				</p>
				<p>
					Le sanabel (سنبلة, sunbula, “spiga di grano”) sono forti e flessibili e crescono meglio quando si sostengono a vicenda. 
				</p>
				<p>
					Il progetto nasce tra due sponde dello stesso mare, dalla collaborazione tra l’Unione Generale Palestinese delle Persone con Disabilità, il Centro Irada per l’Educazione Inclusiva di Gaza, e gruppi di educatrici, psicologhe, operatrici nel campo delle disabilità e delle neurodivergenze, ricercatrici universitarie, insegnanti, studentesse e solidali in tutta Italia. Oggi, da quel lato del mare, le condizioni di vita sono diventate ancora più complesse per chi vive con una disabilità o una neurodivergenza. Gli strumenti di assistenza e le reti di supporto sono frammentate. I bambini e le bambine con autismo, in particolare, faticano a ritrovare sicurezza, routine e stabilità. Sanabel tende una mano per:
				</p>
				<div class="flex flex-row mt-12 justify-between">
					<div class="flex-1 text-center mb-8 md:mb-0">
						<h6 class="text-sm font-bold text-helpo-heading mb-2">People We Helped on 2018</h6>
						<div class="text-6xl font-bold text-helpo-purple">
							200<span class="text-4xl">k</span>
						</div>
					</div>
					<div class="flex-1 text-center mb-8 md:mb-0">
						<h6 class="text-sm font-bold text-helpo-heading mb-2">Dollars We Collected</h6>
						<div class="text-6xl font-bold text-helpo-purple">
							65<span class="text-4xl">bil</span>
						</div>
					</div>
					<div class="flex-1 text-center">
						<h6 class="text-sm font-bold text-helpo-heading mb-2">Closed Projects</h6>
						<div class="text-6xl font-bold text-helpo-purple">
							100<span class="text-4xl">+</span>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="col-12 text-center xl:hidden mt-8">
				<Button href="#">More About</Button>
			</div> -->
		</div>
	</div>
</section>