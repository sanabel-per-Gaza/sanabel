<script lang="ts">
	import '../app.css';
	import Header from '$lib/blocks/Header.svelte';
	import Footer from '$lib/blocks/Footer.svelte';
	import Modal from '$lib/components/modal/Modal.svelte';
	import Content from '$lib/components/modal/Content.svelte';
	import Trigger from '$lib/components/modal/Trigger.svelte';
  import { Donation } from '$lib/components/modal/Modals';

	let isAsideOpen = false;
	const toggleAside = () => (isAsideOpen = !isAsideOpen);
	const closeAside = () => (isAsideOpen = false);

</script>
 <Modal modalId={Donation}>
	<Content>
		<div class="gfm-embed" data-url="https://www.gofundme.com/f/sanabel-per-le-persone-con-disabilita-e-neurodivergentigaza/widget/large?sharesheet=undefined&attribution_id=sl:3a71cd7d-5e38-45e9-a2bf-1abf1cbb24da"></div><script defer src="https://www.gofundme.com/static/js/embed.js"></script>
	</Content>
	<div class="flex flex-col min-h-screen bg-white">
		<Header on:toggleAside={toggleAside} />
		<main class="main">
			<slot />
		</main>
		<Footer />
	</div>
</Modal>


<!-- Aside (Mobile) Menu Overlay -->
{#if isAsideOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events - a simple overlay -->
	<div on:click={closeAside} class="fixed inset-0 bg-black/40 z-40 lg:hidden">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click|stopPropagation class="bg-helpo-light-gray h-full w-80 max-w-full shadow-lg p-8 transform-gpu transition-transform duration-300 {isAsideOpen ? 'translate-x-0' : '-translate-x-full'}">
			<!-- A full implementation of NavLinks would go here for mobile -->
			<h2 class="text-2xl font-bold text-helpo-heading">Menu</h2>
			<p class="mt-4">Mobile navigation links would be listed here.</p>
		</div>
	</div>
{/if}