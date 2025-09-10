<script>
	import { id } from "./Store"
	import { getContext } from "svelte"
	export let modalId = getContext("modalId")
</script>
<span on:click={() => $id = modalId}>
	<slot />
</span>

<style>
	span:hover	 {
		cursor: pointer;
	}
</style>