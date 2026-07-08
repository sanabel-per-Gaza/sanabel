<script lang="ts">
	export let state: 'loading' | 'empty' | 'error' = 'loading';
	export let title: string = '';
	export let message: string = '';
	export let actionLabel: string = '';
	export let actionHref: string = '#';
</script>

<div class="flex flex-col items-center justify-center py-16 px-4 text-center" role="status">
	{#if state === 'loading'}
		<div class="mb-6 flex items-center gap-1.5" aria-hidden="true">
			<span class="block h-2.5 w-2.5 rounded-full bg-helpo-yellow animate-pulse" style="animation-delay: 0ms;"></span>
			<span class="block h-2.5 w-2.5 rounded-full bg-helpo-yellow animate-pulse" style="animation-delay: 150ms;"></span>
			<span class="block h-2.5 w-2.5 rounded-full bg-helpo-yellow animate-pulse" style="animation-delay: 300ms;"></span>
		</div>
		<h2 class="text-lg font-bold text-helpo-heading">{title || 'Caricamento in corso…'}</h2>
		{#if message}
			<p class="mt-2 text-sm leading-6 text-helpo-gray-text max-w-sm">{message}</p>
		{/if}

	{:else if state === 'empty'}
		<div class="mb-6 text-4xl" aria-hidden="true">
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="mx-auto">
				<rect x="4" y="8" width="40" height="32" rx="3" stroke="#343877" stroke-width="2" stroke-dasharray="4 4" opacity="0.4"/>
				<path d="M4 16h40" stroke="#343877" stroke-width="2" opacity="0.4"/>
			</svg>
		</div>
		<h2 class="text-lg font-bold text-helpo-heading">{title || 'Nessun contenuto'}</h2>
		{#if message}
			<p class="mt-2 text-sm leading-6 text-helpo-gray-text max-w-sm">{message}</p>
		{/if}

	{:else if state === 'error'}
		<div class="mb-6 text-4xl" aria-hidden="true">
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="mx-auto">
				<circle cx="24" cy="24" r="20" stroke="#efc940" stroke-width="2" opacity="0.6"/>
				<path d="M24 14v12m0 4v2" stroke="#efc940" stroke-width="2.5" stroke-linecap="round"/>
			</svg>
		</div>
		<h2 class="text-lg font-bold text-helpo-heading">{title || 'Qualcosa è andato storto'}</h2>
		{#if message}
			<p class="mt-2 text-sm leading-6 text-helpo-gray-text max-w-sm">{message}</p>
		{/if}
		{#if actionLabel && actionHref}
			<a href={actionHref} class="mt-6 inline-block text-sm font-bold uppercase tracking-wider text-helpo-purple no-underline hover:underline">
				{actionLabel} →
			</a>
		{/if}
	{/if}
</div>
