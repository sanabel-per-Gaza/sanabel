<script lang="ts">
	import { getAdminClient } from '$lib/stores/auth';
	import { onMount } from 'svelte';
	import { errorMessage } from '$lib/admin';
	import dayjs from 'dayjs';
	import type { RecordModel } from 'pocketbase';

	let messages: RecordModel[] = [];
	let loading = true;
	let error = '';
	let openId: string | null = null;

	onMount(async () => {
		try {
			const pb = await getAdminClient();
			messages = await pb!.collection('sanabel_messages').getFullList({ sort: '-created' });
		} catch (e) {
			error = errorMessage(e, 'Impossibile caricare i messaggi.');
		} finally {
			loading = false;
		}
	});

	async function setRead(message: RecordModel, read: boolean) {
		try {
			const pb = await getAdminClient();
			await pb!.collection('sanabel_messages').update(message.id, { read });
			messages = messages.map((m) => (m.id === message.id ? { ...m, read } : m));
		} catch (e) {
			error = errorMessage(e);
		}
	}

	function toggle(message: RecordModel) {
		openId = openId === message.id ? null : message.id;
		if (openId && !message.read) setRead(message, true);
	}

	async function handleDelete(message: RecordModel) {
		if (!confirm(`Eliminare il messaggio di ${message.name}?`)) return;
		try {
			const pb = await getAdminClient();
			await pb!.collection('sanabel_messages').delete(message.id);
			messages = messages.filter((m) => m.id !== message.id);
		} catch (e) {
			error = errorMessage(e, 'Eliminazione non riuscita.');
		}
	}

	$: unread = messages.filter((m) => !m.read).length;
</script>

<svelte:head>
	<title>Messaggi — Admin Sanabel</title>
</svelte:head>

<div class="max-w-4xl">
	<h1 class="text-2xl">Messaggi ricevuti</h1>
	<p class="mt-1 text-sm">
		Le richieste inviate dal modulo della pagina Contatti. Controlla qui periodicamente: i nuovi messaggi sono evidenziati in giallo.
		{#if unread}<strong class="text-helpo-heading">{unread} da leggere.</strong>{/if}
	</p>

	{#if error}
		<p class="mt-6 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</p>
	{/if}

	{#if loading}
		<p class="mt-8">Caricamento…</p>
	{:else if messages.length === 0 && !error}
		<div class="mt-8 rounded-sm border border-helpo-purple/10 bg-white p-12 text-center">
			<p class="text-lg font-bold text-helpo-heading">Nessun messaggio</p>
			<p class="mt-2 text-sm">Quando qualcuno compila il modulo Contatti, lo trovi qui.</p>
		</div>
	{:else}
		<ul class="mt-8 space-y-3">
			{#each messages as message (message.id)}
				<li class="rounded-sm border bg-white {message.read ? 'border-helpo-purple/10' : 'border-helpo-yellow'}">
					<button type="button" class="flex w-full flex-wrap items-center gap-x-4 gap-y-1 px-5 py-4 text-left" on:click={() => toggle(message)} aria-expanded={openId === message.id}>
						{#if !message.read}<span class="h-2.5 w-2.5 rounded-full bg-helpo-yellow" title="Da leggere"></span>{/if}
						<span class="font-bold text-helpo-heading">{message.name}</span>
						<span class="min-w-0 flex-1 truncate text-sm">{message.subject || message.message}</span>
						<span class="text-xs">{dayjs(message.created).format('D MMM YYYY, HH:mm')}</span>
					</button>
					{#if openId === message.id}
						<div class="border-t border-helpo-purple/10 px-5 py-5">
							<p class="text-sm"><strong class="text-helpo-heading">Email:</strong> <a href="mailto:{message.email}" class="text-helpo-purple">{message.email}</a></p>
							{#if message.subject}<p class="mt-1 text-sm"><strong class="text-helpo-heading">Oggetto:</strong> {message.subject}</p>{/if}
							<p class="mt-4 whitespace-pre-line leading-7 text-helpo-heading">{message.message}</p>
							<div class="mt-6 flex flex-wrap gap-4">
								<a
									href="mailto:{message.email}?subject={encodeURIComponent('Re: ' + (message.subject || 'la tua richiesta a Sanabel'))}"
									class="bg-helpo-purple px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white no-underline hover:bg-helpo-heading"
								>
									Rispondi via email
								</a>
								<button on:click={() => setRead(message, false)} class="text-xs font-bold uppercase tracking-wider text-helpo-purple hover:underline">Segna come da leggere</button>
								<button on:click={() => handleDelete(message)} class="text-xs font-bold uppercase tracking-wider text-red-600 hover:underline">Elimina</button>
							</div>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</div>
