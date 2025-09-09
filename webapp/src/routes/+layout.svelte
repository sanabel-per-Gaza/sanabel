<script lang="ts">
	import '../app.css';
	import Header from '$lib/blocks/Header.svelte';
	import Footer from '$lib/blocks/Footer.svelte';

	let isAsideOpen = false;
	const toggleAside = () => (isAsideOpen = !isAsideOpen);
	const closeAside = () => (isAsideOpen = false);

</script>

<div class="flex flex-col min-h-screen bg-white">
	
	<!-- 
		The Header component receives the 'toggleAside' function as a prop.
		This is a clean way to allow a child component to control state in its parent layout.
	-->
	<Header on:toggleAside={toggleAside} />
	
	<!-- Main content of each page will be injected here -->
	<main class="main">
		<slot />
	</main>
	
	<Footer />

</div>

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