<script lang="ts">
	import PageHero from '$lib/components/ui/PageHero.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import pb from '$lib/pocketbase';

	export let data;
	$: c = data.content;

	let name = '';
	let email = '';
	let subject = '';
	let message = '';
	let consent = false;
	let website = ''; // campo trappola per i bot: gli utenti non lo vedono
	let status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';

	async function handleSubmit() {
		if (website) {
			status = 'sent';
			return;
		}
		status = 'sending';
		try {
			await pb.collection('sanabel_messages').create({ name, email, subject, message, consent });
			status = 'sent';
			name = email = subject = message = '';
			consent = false;
		} catch (e) {
			console.error(e);
			status = 'error';
		}
	}
</script>

<svelte:head>
	<title>Contatti — Sanabel</title>
	<meta property="og:title" content="Contatti — Sanabel" />
</svelte:head>

<PageHero eyebrow="Scrivici" title={c.contact_title}>
	<p class="mx-auto mt-6 max-w-2xl text-lg leading-8">{c.contact_intro}</p>
</PageHero>

<section class="pb-20 lg:pb-28">
	<div class="container">
		<div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
			<aside class="self-start rounded-sm bg-helpo-purple p-8 text-white/85 md:p-10">
				<h2 class="text-2xl text-white">{c.contact_org_name}</h2>
				<dl class="mt-8 space-y-6">
					<div>
						<dt class="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-helpo-yellow">Sede</dt>
						<dd class="text-lg leading-7">{c.contact_address}</dd>
					</div>
					<div>
						<dt class="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-helpo-yellow">Email</dt>
						<dd class="text-lg leading-7 [overflow-wrap:anywhere]">
							<a href="mailto:{c.contact_email}" class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-helpo-yellow">
								{c.contact_email}
							</a>
						</dd>
					</div>
				</dl>
				<div class="mt-10 border-t border-white/15 pt-8">
					<p class="mb-5 leading-7">Vuoi sostenere le attività di Sanabel a Gaza?</p>
					<Button variant="filled" href={c.donation_url} target="_blank">Dona ora</Button>
				</div>
			</aside>

			<div class="rounded-sm bg-helpo-light-gray p-8 md:p-10">
				{#if status === 'sent'}
					<div class="flex h-full flex-col items-start justify-center py-10" role="status">
						<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-helpo-yellow/20 text-helpo-purple">
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
						</div>
						<h2 class="text-2xl">Messaggio inviato</h2>
						<p class="mt-3 max-w-md text-lg leading-8">{c.contact_success}</p>
						<button type="button" class="mt-8 text-sm font-bold uppercase tracking-wider text-helpo-purple underline-offset-4 hover:underline" on:click={() => (status = 'idle')}>
							Scrivi un altro messaggio
						</button>
					</div>
				{:else}
					<h2 class="mb-8 text-2xl">Richiedi informazioni</h2>
					<form on:submit|preventDefault={handleSubmit} class="space-y-6">
						<div class="grid gap-6 sm:grid-cols-2">
							<div>
								<label for="name" class="field-label">Nome e cognome *</label>
								<input id="name" type="text" bind:value={name} required autocomplete="name" class="field-input" />
							</div>
							<div>
								<label for="email" class="field-label">Email *</label>
								<input id="email" type="email" bind:value={email} required autocomplete="email" class="field-input" />
							</div>
						</div>
						<div>
							<label for="subject" class="field-label">Oggetto</label>
							<input id="subject" type="text" bind:value={subject} class="field-input" />
						</div>
						<div>
							<label for="message" class="field-label">Messaggio *</label>
							<textarea id="message" bind:value={message} required rows="6" class="field-input"></textarea>
						</div>
						<div class="hidden" aria-hidden="true">
							<label for="website">Sito web</label>
							<input id="website" type="text" bind:value={website} tabindex="-1" autocomplete="off" />
						</div>
						<label class="flex items-start gap-3 text-sm leading-6">
							<input type="checkbox" bind:checked={consent} required class="mt-1 h-4 w-4 shrink-0 accent-helpo-purple" />
							<span>
								Ho letto la <a href="/privacy" target="_blank" class="font-bold text-helpo-purple underline-offset-4 hover:underline">Privacy e Cookie Policy</a>
								e acconsento al trattamento dei miei dati per ricevere una risposta. *
							</span>
						</label>

						{#if status === 'error'}
							<p class="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
								Il messaggio non è stato inviato. Riprova tra qualche minuto oppure scrivici direttamente a
								<a href="mailto:{c.contact_email}" class="font-bold underline">{c.contact_email}</a>.
							</p>
						{/if}

						<Button type="submit" variant="filled" disabled={status === 'sending'}>
							{status === 'sending' ? 'Invio in corso…' : 'Invia messaggio'}
						</Button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
