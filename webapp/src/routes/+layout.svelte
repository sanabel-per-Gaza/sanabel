<script lang="ts">
	import '../app.css';
	import Header from '$lib/blocks/Header.svelte';
	import Footer from '$lib/blocks/Footer.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { donationUrl } from '$lib/links';

	let isAsideOpen = false;
	const toggleAside = () => (isAsideOpen = !isAsideOpen);
	const closeAside = () => (isAsideOpen = false);

</script>

<div class="flex flex-col min-h-screen bg-white">
	<Header on:toggleAside={toggleAside} />
	<main class="main">
		<slot />
	</main>
	<Footer />
</div>


<!-- Aside (Mobile) Menu Overlay -->
{#if isAsideOpen}
	<div class="fixed inset-0 z-40 lg:hidden">
		<button
			type="button"
			aria-label="Chiudi menu"
			class="absolute inset-0 bg-helpo-dark/50"
			on:click={closeAside}
		></button>
		<aside class="relative ml-auto flex h-full w-80 max-w-full flex-col bg-helpo-light-gray p-8 shadow-lg">
			<div class="flex items-center justify-between">
				<h2 class="text-2xl font-bold text-helpo-heading">Menu</h2>
				<button
					type="button"
					class="text-3xl leading-none text-helpo-purple"
					aria-label="Chiudi menu"
					on:click={closeAside}
				>
					&times;
				</button>
			</div>
			<nav class="mt-10">
				<ul class="flex flex-col gap-5 text-lg font-bold uppercase text-helpo-heading">
					<li><a class="no-underline" href="/" on:click={closeAside}>Home</a></li>
					<li><a class="no-underline" href="/#chi-siamo" on:click={closeAside}>Chi siamo</a></li>
					<li><a class="no-underline" href="/progetti" on:click={closeAside}>Progetti</a></li>
					<li><a class="no-underline" href="#" on:click={closeAside}>Gaza</a></li>
					<li><a class="no-underline" href="/blog" on:click={closeAside}>Blog</a></li>
					<li><a class="no-underline" href="/#contatti" on:click={closeAside}>Contatti</a></li>
				</ul>
			</nav>
			<div class="mt-auto pt-10">
				<p class="mb-5 text-sm leading-relaxed text-helpo-gray-text">
					Sostieni una rete di cura condivisa per persone con disabilità e bambine e bambini neurodivergenti a Gaza.
				</p>
				<Button variant="filled" href={donationUrl} target="_blank">Dona ora</Button>
			</div>
		</aside>
	</div>
{/if}