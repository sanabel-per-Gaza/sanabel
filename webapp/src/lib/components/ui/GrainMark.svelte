<script lang="ts">
	/** Tre/quattro spighe stilizzate, segno grafico ricorrente di Sanabel */
	export let variant: 'hero' | 'line' = 'hero';
</script>

<div class="grain grain--{variant}" aria-hidden="true">
	<span></span>
	<span></span>
	<span></span>
	{#if variant === 'line'}<span></span>{/if}
</div>

<style>
	.grain {
		display: flex;
		align-items: flex-end;
		gap: 0.45rem;
	}

	.grain span {
		display: block;
		width: 0.28rem;
		border-radius: 999px;
		background: var(--color-helpo-yellow);
		transform-origin: bottom center;
	}

	.grain--hero {
		height: 4.5rem;
	}
	.grain--hero span:nth-child(1) {
		height: 3.2rem;
		transform: rotate(-11deg);
	}
	.grain--hero span:nth-child(2) {
		height: 4.5rem;
	}
	.grain--hero span:nth-child(3) {
		height: 3.7rem;
		transform: rotate(11deg);
	}

	.grain--line {
		gap: 0.6rem;
		height: 5rem;
	}
	.grain--line span {
		width: 0.24rem;
	}
	.grain--line span:nth-child(1) {
		height: 2.6rem;
		transform: rotate(-14deg);
	}
	.grain--line span:nth-child(2) {
		height: 4.7rem;
		transform: rotate(-4deg);
	}
	.grain--line span:nth-child(3) {
		height: 3.8rem;
		transform: rotate(7deg);
	}
	.grain--line span:nth-child(4) {
		height: 2.9rem;
		transform: rotate(15deg);
	}
</style>
