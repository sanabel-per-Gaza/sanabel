<!-- src/lib/blocks/Footer.svelte -->
<script lang="ts">
	import Logo from '$lib/components/ui/Logo.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { donationUrl } from '$lib/links';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/#chi-siamo', label: 'Chi siamo' },
		{ href: '#contatti', label: 'Contatti' }
	];
</script>

<footer id="contatti" class="bg-helpo-dark text-gray-300 py-16">
	<div class="container mx-auto">
		<div class="grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.7fr_1fr]">
			<div>
				<div class="mb-6 max-w-44">
					<Logo theme="dark" />
				</div>
				<p class="max-w-md leading-7">
					Sanabel intreccia competenze e solidarietà tra Gaza e l'Italia per sostenere persone con disabilità e bambine e bambini neurodivergenti.
				</p>
			</div>

			<div>
				<h2 class="text-xl font-bold text-white mb-5">Naviga</h2>
				<nav>
					<ul class="space-y-3 text-sm font-bold uppercase tracking-[0.16em]">
						{#each links as link}
							<li><a href={link.href} class="no-underline hover:text-white">{link.label}</a></li>
						{/each}
					</ul>
				</nav>
			</div>

			<div>
				<h2 class="text-xl font-bold text-white mb-5">Contatti</h2>
				<p class="leading-7">
					Per collaborazioni, disponibilità sul territorio o domande sul progetto, usa la raccolta come primo punto di contatto pubblico. I canali diretti verranno pubblicati appena saranno pronti.
				</p>
				<div class="mt-6">
					<Button variant="filled" href={donationUrl} target="_blank">Apri la raccolta</Button>
				</div>
			</div>
		</div>

		<div class="mt-14 border-t border-white/10 pt-6 text-sm text-gray-500">
			<p>Sanabel. Spighe di solidarietà per Gaza.</p>
		</div>
	</div>
</footer>