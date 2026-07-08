<script lang="ts">
	import { auth } from '$lib/stores/auth';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const isLoginPage = $page.url.pathname.includes('/admin/login');

	onMount(() => {
		if (!isLoginPage && !auth.isValid) {
			goto('/admin/login');
		}
	});

	// Watch auth state
	$: if (browser && !isLoginPage && $auth && !auth.isValid) {
		goto('/admin/login');
	}

	function handleLogout() {
		auth.logout();
		goto('/admin/login');
	}
</script>

{#if isLoginPage || !browser}
	<slot />
{:else}
	<div class="flex min-h-screen bg-helpo-light-gray">
		<nav class="flex w-56 shrink-0 flex-col bg-helpo-dark p-6 text-white">
			<div class="mb-10">
				<h2 class="text-lg font-bold">Sanabel Admin</h2>
				<p class="mt-1 text-xs text-gray-400">{auth.user?.email}</p>
			</div>
			<ul class="space-y-1">
				<li>
					<a
						href="/admin"
						class="block rounded px-3 py-2 text-sm transition-colors hover:bg-white/10 {$page.url.pathname === '/admin' ? 'bg-white/15 font-bold' : ''}"
					>
						Tutti i post
					</a>
				</li>
				<li>
					<a
						href="/admin/new"
						class="block rounded px-3 py-2 text-sm transition-colors hover:bg-white/10 {$page.url.pathname === '/admin/new' ? 'bg-white/15 font-bold' : ''}"
					>
						Nuovo post
					</a>
				</li>
			</ul>
			<div class="mt-auto pt-8">
				<button
					on:click={handleLogout}
					class="w-full rounded border border-white/20 px-3 py-2 text-sm text-gray-400 transition-colors hover:text-white"
				>
					Esci
				</button>
			</div>
		</nav>
		<main class="flex-1 overflow-auto p-8">
			<slot />
		</main>
	</div>
{/if}
