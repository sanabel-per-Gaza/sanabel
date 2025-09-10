<!-- src/lib/components/navigation/NavLinks.svelte -->
<script lang="ts">
	type Link = {
		href: string;
		label: string;
		hasChildren?: boolean;
		isActive?: boolean;
	};

	// Mock data for the navigation links. In a real app, this would come from a data source.
	const links: Link[] = [
		{ href: '#', label: 'Home', hasChildren: false, isActive: true },
		{ href: '#nodi', label: 'Nodi', hasChildren: false },
		{ href: '#', label: 'Progetti', hasChildren: false },
		{ href: '#', label: 'Posts', hasChildren: false },
		{ href: '/events', label: 'Eventi', hasChildren: false },
		{ href: '#', label: 'Foto', hasChildren: false },
		{ href: '#', label: 'Contatti' }
	];
</script>

<nav>
	<ul class="main-menu hidden lg:flex items-center space-x-6 xl:space-x-10">
		{#each links as link}
			<li class="main-menu__item relative group {link.isActive ? 'main-menu__item--active' : ''}">
				<a
					class="main-menu__link relative inline-block text-sm font-medium py-8 uppercase no-underline transition-opacity duration-300 hover:opacity-75
                           before:content-[''] before:block before:h-0.5 before:w-0 before:bg-helpo-yellow before:absolute before:top-0.5 before:left-0 before:transition-all before:duration-300
                           group-hover:before:w-full {link.isActive ? 'before:w-full' : ''}"
					href={link.href}
				>
					<span class="relative">
						{link.label}
						{#if link.hasChildren}
							<span
								class="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white transition-opacity duration-300 group-hover:opacity-75 {link.isActive
									? 'opacity-75'
									: ''}"
							></span>
						{/if}
					</span>
				</a>
				<!-- Sub-menu would go here in a full implementation -->
			</li>
		{/each}
	</ul>
</nav>