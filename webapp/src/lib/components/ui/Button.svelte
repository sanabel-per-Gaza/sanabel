<script lang="ts">
	export let href: string | undefined = undefined;
	export let target: string | undefined = undefined;
	export let rel: string | undefined = undefined;
	export let type: 'button' | 'submit' = 'button';
	export let disabled = false;
	export let variant: 'primary' | 'filled' | 'squared' | 'reverted' = 'primary';

	$: safeRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);

	const base =
		'inline-flex items-center justify-center text-xs font-bold uppercase text-center tracking-wider no-underline transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60';

	const variants = {
		primary:
			'min-w-[160px] rounded-full px-10 py-4 text-white border-2 border-helpo-yellow hover:bg-helpo-yellow hover:text-helpo-heading',
		reverted:
			'min-w-[160px] rounded-full px-10 py-4 border-2 border-helpo-yellow text-helpo-heading hover:bg-helpo-yellow',
		filled:
			'min-w-[160px] rounded-full px-10 py-4 bg-helpo-yellow text-helpo-heading border-2 border-helpo-yellow hover:bg-[#e2b92a] hover:border-[#e2b92a]',
		squared: 'h-full min-w-[170px] px-8 bg-helpo-yellow text-helpo-purple hover:bg-[#f4d565]'
	};
</script>

{#if href}
	<a {href} target={target || undefined} rel={safeRel} class="{base} {variants[variant]}">
		<slot />
	</a>
{:else}
	<button {type} {disabled} class="{base} {variants[variant]}" on:click>
		<slot />
	</button>
{/if}
