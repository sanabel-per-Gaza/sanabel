<script lang="ts">
	import PostForm from '$lib/components/admin/PostForm.svelte';
</script>

<svelte:head>
	<title>Nuovo articolo — Admin Sanabel</title>
</svelte:head>

<div class="max-w-3xl">
	<div class="mb-8">
		<a href="/admin/blog" class="text-sm text-helpo-purple no-underline hover:underline">‹ Torna agli articoli</a>
		<h1 class="mt-2 text-2xl">Nuovo articolo</h1>
	</div>
	<PostForm />
</div>
