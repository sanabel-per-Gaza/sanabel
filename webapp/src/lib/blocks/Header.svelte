<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import Logo from '$lib/components/ui/Logo.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import NavLinks from '$lib/components/navigation/NavLinks.svelte';
	import { navLinks, isActive } from '$lib/links';
	import type { SiteContent } from '$lib/content';

	export let content: SiteContent;

	let menuOpen = false;
	const closeMenu = () => (menuOpen = false);

	// Chiude il menu mobile a ogni cambio pagina
	$: $page.url.pathname, closeMenu();
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && closeMenu()} />

<header class="sticky top-0 z-30 w-full bg-white/95 shadow-md backdrop-blur-sm">
	<div class="container mx-auto">
		<div class="flex items-center justify-between gap-6">
			<Logo />

			<div class="hidden lg:flex">
				<NavLinks />
			</div>

			<div class="flex items-center self-stretch">
				<div class="hidden self-stretch sm:flex">
					<Button variant="squared" href={content.donation_url} target="_blank">Dona ora</Button>
				</div>

				<button
					on:click={() => (menuOpen = true)}
					class="ml-4 inline-flex h-12 w-12 items-center justify-center border border-helpo-purple/20 text-helpo-purple lg:hidden"
					type="button"
					aria-label="Apri menu"
					aria-expanded={menuOpen}
					aria-controls="menu-mobile"
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
</header>

{#if menuOpen}
	<div class="fixed inset-0 z-40 lg:hidden" id="menu-mobile">
		<button
			type="button"
			aria-label="Chiudi menu"
			class="absolute inset-0 bg-helpo-dark/50"
			on:click={closeMenu}
			transition:fade={{ duration: 200 }}
		></button>
		<aside
			class="relative ml-auto flex h-full w-80 max-w-[85vw] flex-col overflow-y-auto bg-helpo-light-gray p-8 shadow-lg"
			transition:fly={{ x: 320, duration: 250 }}
			aria-label="Menu"
		>
			<div class="flex items-center justify-between">
				<p class="text-2xl font-bold text-helpo-heading">Menu</p>
				<button
					type="button"
					class="text-3xl leading-none text-helpo-purple"
					aria-label="Chiudi menu"
					on:click={closeMenu}
				>
					&times;
				</button>
			</div>
			<nav class="mt-10" aria-label="Menu principale">
				<ul class="flex flex-col gap-5 text-lg font-bold uppercase text-helpo-heading">
					{#each navLinks as link}
						{@const active = isActive(link.href, $page.url.pathname)}
						<li>
							<a
								class="no-underline {active ? 'text-helpo-purple underline decoration-helpo-yellow decoration-2 underline-offset-8' : ''}"
								aria-current={active ? 'page' : undefined}
								href={link.href}
								on:click={closeMenu}
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<div class="mt-auto pt-10">
				<p class="mb-5 text-sm leading-relaxed text-helpo-gray-text">{content.menu_blurb}</p>
				<Button variant="filled" href={content.donation_url} target="_blank">Dona ora</Button>
			</div>
		</aside>
	</div>
{/if}
