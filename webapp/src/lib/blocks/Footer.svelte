<!-- src/lib/blocks/Footer.svelte -->
<script lang="ts">
	import Logo from '$lib/components/ui/Logo.svelte';

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
					Sostieni il progetto Sanabel… seminiamo umanità
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
				<h2 class="text-xl font-bold text-white mb-5">Sostieni</h2>
				<div class="leading-7 space-y-4">
					<div>
						<p class="text-sm text-gray-400 mb-1">Bonifico bancario</p>
						<p class="font-mono text-sm">IBAN: IT23Q0501804000000020000463</p>
						<p class="text-sm text-gray-400 mt-1">Causale: Sanabel per Gaza</p>
					</div>
					<div>
						<p class="text-sm text-gray-400 mb-1">PayPal</p>
						<p class="font-mono text-sm">donazioni@associazionesanabel.org</p>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-14 border-t border-white/10 pt-6 text-sm text-gray-500">
			<p>Sanabel — spighe di solidarietà per Gaza</p>
		</div>
	</div>
</footer>