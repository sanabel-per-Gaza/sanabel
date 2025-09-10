<script>
	import { setContext } from "svelte"
	export let modalId
	setContext("modalId", modalId)
</script>

<div>
	<slot />
</div>