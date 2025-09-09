<!-- src/lib/blocks/Header.svelte -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Logo from '$lib/components/ui/Logo.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import NavLinks from '$lib/components/navigation/NavLinks.svelte';
	import LanguageSwitcher from '$lib/components/navigation/LanguageSwitcher.svelte';

	const dispatch = createEventDispatcher();
</script>

<header class="header fixed top-0 left-0 w-full z-30 bg-white shadow-md">
	<div class="container mx-auto">
		<div class="flex justify-between items-center">
			
			<div class="flex items-center">
				<Logo theme="light" />
			</div>

			<div class="hidden lg:flex">
				<NavLinks />
			</div>

			<div class="flex items-center">
				<!-- <div class="hidden lg:flex">
					<LanguageSwitcher />
				</div> -->
				<div class="hidden sm:flex">
					<Button variant="squared" href="#">Donate</Button>
				</div>
				<div class="lg:hidden ml-4">
					<button on:click={() => dispatch('toggleAside')} class="hamburger hamburger--3dx" type="button" aria-label="Open menu">
						<span class="hamburger-box">
							<span class="hamburger-inner bg-helpo-purple before:bg-helpo-purple after:bg-helpo-purple"></span>
						</span>
					</button>
				</div>
			</div>

		</div>
	</div>
</header>