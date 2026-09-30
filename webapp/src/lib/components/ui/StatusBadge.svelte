<script lang="ts">
	import { STATUS_COLORS } from '$lib/data';

	export let status: string;
</script>

<span
	class="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
	style="background-color: {STATUS_COLORS[status] || '#6b6b73'};"
>
	{status}
</span>
