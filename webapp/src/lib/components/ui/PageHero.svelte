<script lang="ts">
	/** Intestazione delle pagine interne: con foto di sfondo oppure su fondo chiaro. */
	export let eyebrow = '';
	export let title: string;
	export let image: string | null = null;
	export let imageAlt = '';
	export let breadcrumb: { href?: string; label: string }[] = [];
</script>

{#if image}
	<section class="relative flex min-h-[60vh] items-end overflow-hidden bg-helpo-dark lg:min-h-[70vh]">
		<img src={image} alt={imageAlt} class="absolute inset-0 h-full w-full object-cover object-[center_30%]" />
		<div class="absolute inset-0 bg-gradient-to-t from-helpo-dark/90 via-helpo-dark/45 to-helpo-dark/20"></div>
		<div class="container relative z-10 pt-32 pb-14 lg:pb-20">
			<div class="max-w-4xl">
				{#if eyebrow}<p class="mb-4 text-sm font-bold uppercase tracking-[0.26em] text-helpo-yellow">{eyebrow}</p>{/if}
				<h1 class="text-4xl leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] md:text-5xl lg:text-6xl">
					{title}
				</h1>
				<slot />
			</div>
		</div>
	</section>
{:else}
	<section class="bg-helpo-light-gray pt-20 pb-14 lg:pt-28 lg:pb-16">
		<div class="container text-center">
			{#if eyebrow}<p class="eyebrow mb-4">{eyebrow}</p>{/if}
			<h1 class="mx-auto max-w-4xl text-4xl leading-tight md:text-5xl">{title}</h1>
			<slot />
		</div>
	</section>
{/if}

{#if breadcrumb.length}
	<div class="border-b border-helpo-purple/10 bg-white">
		<div class="container py-3">
			<nav aria-label="Percorso">
				<ol class="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider">
					<li><a href="/" class="no-underline transition-colors hover:text-helpo-purple">Home</a></li>
					{#each breadcrumb as crumb, i}
						<li aria-hidden="true" class="text-helpo-purple/30">/</li>
						<li>
							{#if crumb.href && i < breadcrumb.length - 1}
								<a href={crumb.href} class="no-underline transition-colors hover:text-helpo-purple">{crumb.label}</a>
							{:else}
								<span class="font-bold text-helpo-purple" aria-current="page">{crumb.label}</span>
							{/if}
						</li>
					{/each}
				</ol>
			</nav>
		</div>
	</div>
{/if}
