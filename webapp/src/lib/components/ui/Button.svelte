<!-- src/lib/components/ui/Button.svelte -->
<script>
  export let href = '#';
  export let target = undefined;
  export let rel = undefined;
  /** @type {'primary' | 'filled' | 'squared' | 'reverted'} */
  export let variant = 'primary';

  $: safeRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);

  const baseClasses = 'inline-block text-xs font-bold uppercase text-center py-4 px-10 rounded-full min-w-[160px] tracking-wider transition-all duration-300 no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-helpo-yellow';
  
  const variantClasses = {
    primary: 'text-white border-2 border-helpo-yellow hover:bg-helpo-yellow hover:text-helpo-heading',
    reverted:  'border-2 border-helpo-yellow text-helpo-heading hover:bg-helpo-yellow',
    filled: 'bg-helpo-yellow text-helpo-heading border-2 border-helpo-yellow hover:bg-yellow-500',
    squared: 'bg-helpo-yellow text-helpo-purple rounded-none h-full flex items-center justify-center hover:bg-yellow-300 py-8 font-bold'
  };
</script>

<a {href} target={target || undefined} rel={safeRel} class="{baseClasses} {variantClasses[variant]}">
  <span class={variant === 'squared' ? 'transition-transform duration-300 group-hover:scale-110' : ''}>
    <slot />
  </span>
</a>