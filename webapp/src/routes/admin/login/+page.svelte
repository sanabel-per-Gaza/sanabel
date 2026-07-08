<script lang="ts">
	import { auth } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let error = '';
	let loading = false;

	async function handleLogin() {
		error = '';
		loading = true;
		try {
			await auth.login(email, password);
			await goto('/admin');
		} catch (e: any) {
			error = e?.message || 'Credenziali non valide';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Admin Login — Sanabel</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-helpo-light-gray px-4">
	<div class="w-full max-w-md">
		<div class="rounded-sm bg-white p-8 shadow-lg">
			<h1 class="mb-2 text-2xl font-bold text-helpo-heading">Admin</h1>
			<p class="mb-8 text-sm text-helpo-gray-text">Accedi per gestire i contenuti del sito.</p>

			<form on:submit|preventDefault={handleLogin} class="space-y-5">
				<div>
					<label for="email" class="block text-sm font-bold text-helpo-heading mb-1.5">Email</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						required
						class="w-full border border-helpo-purple/20 bg-white px-4 py-3 text-sm text-helpo-heading focus:border-helpo-purple focus:outline-none"
						placeholder="admin@example.com"
					/>
				</div>
				<div>
					<label for="password" class="block text-sm font-bold text-helpo-heading mb-1.5">Password</label>
					<input
						id="password"
						type="password"
						bind:value={password}
						required
						class="w-full border border-helpo-purple/20 bg-white px-4 py-3 text-sm text-helpo-heading focus:border-helpo-purple focus:outline-none"
						placeholder="••••••••"
					/>
				</div>

				{#if error}
					<p class="text-sm text-red-600 font-medium">{error}</p>
				{/if}

				<button
					type="submit"
					disabled={loading}
					class="w-full bg-helpo-purple py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-helpo-heading disabled:opacity-50"
				>
					{loading ? 'Accesso in corso…' : 'Accedi'}
				</button>
			</form>
		</div>
	</div>
</div>
