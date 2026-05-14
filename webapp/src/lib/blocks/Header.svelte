<!-- src/lib/blocks/Header.svelte -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Logo from '$lib/components/ui/Logo.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import NavLinks from '$lib/components/navigation/NavLinks.svelte';
	import { donationUrl } from '$lib/links';

	const dispatch = createEventDispatcher();
</script>

<header class="header sticky top-0 left-0 w-full z-30 bg-white/95 shadow-md backdrop-blur-sm">
	<div class="container mx-auto">
		<div class="flex justify-between items-center">
			
			<div class="flex items-center">
				<Logo theme="light" />
			</div>

			<div class="hidden lg:flex">
				<NavLinks />
			</div>

			<div class="flex items-center">
				<div class="hidden sm:flex">
					<Button variant="squared" href={donationUrl} target="_blank">Dona ora</Button>
				</div>
				
				<div class="lg:hidden ml-4">
					<button
						on:click={() => dispatch('toggleAside')}
						class="inline-flex h-12 w-12 items-center justify-center border border-helpo-purple/20 text-helpo-purple"
						type="button"
						aria-label="Apri menu"
					>
						<span class="flex flex-col gap-1.5" aria-hidden="true">
							<span class="block h-0.5 w-6 bg-helpo-purple"></span>
							<span class="block h-0.5 w-6 bg-helpo-purple"></span>
							<span class="block h-0.5 w-6 bg-helpo-purple"></span>
						</span>
					</button>
				</div>
			</div>

		</div>
	</div>
</header>