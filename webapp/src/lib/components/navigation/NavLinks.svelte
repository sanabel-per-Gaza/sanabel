<script lang="ts">
	type Link = {
		href?: string;
		label: string;
		hasChildren?: boolean;
		isActive?: boolean;
		childrens?: Link[];
	};

	const links: Link[] = [
		{ href: '/', label: 'Home', hasChildren: false, isActive: true },
		{  label: 'Nodi', hasChildren: true, childrens: [
			{ href: '/nodes/torino', label: 'Torino', hasChildren: false },
			{ href: '/nodes/napoli', label: 'Napoli', hasChildren: false },
			{ href: '/nodes/matera', label: 'Matera', hasChildren: false },
			{ href: '/nodes/brescia', label: 'Brescia', hasChildren: false },
		]},
		{ href: '/', label: 'Progetti', hasChildren: false },
		{ href: '/posts', label: 'Posts', hasChildren: false },
		{ href: '/events', label: 'Eventi', hasChildren: false },
		{ href: '/', label: 'Foto', hasChildren: false },
		{ href: '/', label: 'Contatti' }
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
					href={link.href ? link.href : undefined}
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
				{#if link.hasChildren && link.childrens}
					<ul class="sub-menu">
						{#each link.childrens as child}
							<li class="sub-menu__item">
								<a class="sub-menu__link" href={child.href ? child.href : undefined}>
									{child.label}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<style>
	/* Basic styles for the navigation */
	nav {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	.main-menu__item {
		position: relative;
	}

	.sub-menu {
		position: absolute;
		top: 100%;
		left: 0;
		background-color: white;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border-radius: 0.25rem;
		padding: 0.5rem 0;
		min-width: 10rem;
		z-index: 10;
		display: none;
	}

	.main-menu__item:hover .sub-menu {
		display: block;
	}

	.sub-menu__item {
		padding: 0.5rem 1rem;
	}

	.sub-menu__link {
		color: #333;
		text-decoration: none;
		font-size: 0.875rem;
		display: block;
	}

	.sub-menu__link:hover {
		background-color: #f9f9f9;
	}

</style>