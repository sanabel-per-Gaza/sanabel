<script lang="ts">
	export let href = '/';
	export let size: 'md' | 'lg' = 'md';
</script>

<a {href} class="inline-block shrink-0" aria-label="Sanabel — torna alla home">
	<img
		class={size === 'lg' ? 'h-20 w-20' : 'h-16 w-16'}
		src="/logo-sanabel.jpeg"
		alt="Logo Sanabel"
		width="80"
		height="80"
	/>
</a>
