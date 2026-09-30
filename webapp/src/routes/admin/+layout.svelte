<script lang="ts">
	import { auth } from '$lib/stores/auth';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	$: isLoginPage = $page.url.pathname.startsWith('/admin/login');
	$: path = $page.url.pathname;

	let menuOpen = false;
	$: path, (menuOpen = false);

	onMount(() => {
		if (!isLoginPage && !auth.isValid) goto('/admin/login');
	});

	// Se la sessione scade, torna al login
	$: if (browser && !isLoginPage && !$auth) goto('/admin/login');

	function handleLogout() {
		auth.logout();
		goto('/admin/login');
	}

	const sections = [
		{ title: 'Sito', links: [{ href: '/admin', label: 'Panoramica', exact: true }, { href: '/admin/contenuti', label: 'Testi e immagini' }, { href: '/admin/messaggi', label: 'Messaggi ricevuti' }] },
		{ title: 'Blog', links: [{ href: '/admin/blog', label: 'Tutti gli articoli', exact: true }, { href: '/admin/blog/new', label: 'Nuovo articolo' }] },
		{ title: 'Cosa facciamo', links: [{ href: '/admin/attivita', label: 'Tutte le attività', exact: true }, { href: '/admin/attivita/new', label: 'Nuova attività' }] }
	];

	const isCurrent = (href: string, exact = false) =>
		exact ? path === href : path === href || path.startsWith(href + '/');
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#if isLoginPage}
	<slot />
{:else if !browser}
	<div style="display: contents"><slot /></div>
{:else if auth.isValid}
	<div class="min-h-screen bg-helpo-light-gray lg:flex">
		<div class="flex items-center justify-between bg-helpo-dark px-4 py-3 text-white lg:hidden">
			<p class="font-bold">Sanabel Admin</p>
			<button type="button" class="rounded border border-white/20 px-3 py-1.5 text-sm" on:click={() => (menuOpen = !menuOpen)} aria-expanded={menuOpen}>
				{menuOpen ? 'Chiudi' : 'Menu'}
			</button>
		</div>

		<nav class="{menuOpen ? 'flex' : 'hidden'} w-full shrink-0 flex-col bg-helpo-dark p-6 text-white lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-60 lg:overflow-y-auto" aria-label="Menu amministrazione">
			<div class="mb-8 hidden lg:block">
				<p class="text-lg font-bold">Sanabel Admin</p>
				<p class="mt-1 truncate text-xs text-gray-400">{auth.user?.email}</p>
			</div>
			{#each sections as section}
				<div class="mb-6">
					<p class="mb-2 px-3 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">{section.title}</p>
					<ul class="space-y-1">
						{#each section.links as link}
							<li>
								<a
									href={link.href}
									class="block rounded px-3 py-2 text-sm no-underline transition-colors hover:bg-white/10 {isCurrent(link.href, link.exact) ? 'bg-white/15 font-bold' : 'text-gray-300'}"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
			<div class="mt-auto space-y-2 pt-6">
				<a href="/" target="_blank" class="block rounded px-3 py-2 text-sm text-gray-300 no-underline hover:bg-white/10">Apri il sito ↗</a>
				<button on:click={handleLogout} class="w-full rounded border border-white/20 px-3 py-2 text-sm text-gray-300 transition-colors hover:text-white">
					Esci
				</button>
			</div>
		</nav>

		<main class="min-w-0 flex-1 p-4 sm:p-6 lg:p-10">
			<slot />
		</main>
	</div>
{:else}
	<div class="flex min-h-screen items-center justify-center bg-helpo-light-gray">
		<p>Reindirizzamento…</p>
	</div>
{/if}
