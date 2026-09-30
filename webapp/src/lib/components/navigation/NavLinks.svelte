<script lang="ts">
	import { page } from '$app/stores';
	import { navLinks, isActive } from '$lib/links';
</script>

<nav aria-label="Menu principale">
	<ul class="flex items-center gap-6 xl:gap-9">
		{#each navLinks as link}
			{@const active = isActive(link.href, $page.url.pathname)}
			<li>
				<a
					href={link.href}
					aria-current={active ? 'page' : undefined}
					class="nav-link relative inline-block py-8 text-sm font-medium uppercase tracking-wide no-underline transition-colors hover:text-helpo-purple {active
						? 'text-helpo-purple'
						: 'text-helpo-heading/80'}"
					class:nav-link--active={active}
				>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav-link::before {
		content: '';
		position: absolute;
		top: 0.125rem;
		left: 0;
		height: 2px;
		width: 0;
		background: var(--color-helpo-yellow);
		transition: width 0.3s ease;
	}

	.nav-link:hover::before,
	.nav-link--active::before {
		width: 100%;
	}
</style>
