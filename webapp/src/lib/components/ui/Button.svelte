<!-- src/lib/components/ui/Button.svelte -->
<script>
  export let href = '#';
  /** @type {'primary' | 'filled' | 'squared' | 'reverted'} */
  export let variant = 'primary';

  const baseClasses = 'inline-block text-xs font-bold uppercase text-center py-4 px-10 rounded-full min-w-[160px] tracking-wider transition-all duration-300 no-underline';
  
  const variantClasses = {
    primary: 'text-white border-2 border-helpo-yellow hover:bg-helpo-yellow hover:text-helpo-heading hover:-translate-y-1 hover:shadow-lg',
    reverted:  'border-2 border-helpo-yellow hover:bg-helpo-yellow hover:text-helpo-heading hover:-translate-y-1 hover:shadow-lg',
    filled: 'bg-helpo-yellow text-helpo-heading border-2 border-helpo-yellow hover:bg-yellow-500',
    squared: 'bg-helpo-yellow text-helpo-purple rounded-none h-full flex items-center justify-center hover:scale-90 py-8 font-bold'
  };
</script>

<a {href} class="{baseClasses} {variantClasses[variant]}">
  <span class={variant === 'squared' ? 'transition-transform duration-300 group-hover:scale-110' : ''}>
    <slot />
  </span>
</a>