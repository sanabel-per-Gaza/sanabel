<!-- src/lib/components/navigation/LanguageSwitcher.svelte -->
<script lang="ts">
	// For demonstration. In a real app, this would be dynamic.
</script>

<ul class="lang-select relative group mr-4 md:mr-8 xl:mr-16">
	<li class="lang-select__item--active cursor-pointer">
		<span
			class="relative text-sm font-medium uppercase py-8 px-5
                   after:content-[''] after:block after:w-1.5 after:h-0.5 after:bg-helpo-purple after:absolute after:top-1/2 after:right-[-10px] after:rotate-[-45deg] after:transition-transform after:duration-300
                   before:content-[''] before:block before:w-1.5 before:h-0.5 before:bg-helpo-purple before:absolute before:top-1/2 before:right-[-13px] before:rotate-45 before:transition-transform before:duration-300
                   group-hover:after:rotate-45 group-hover:before:rotate-[-45deg]"
		>
			En
		</span>
		<ul
			class="lang-select__sub-list absolute top-full left-[-10px] w-32 p-4 bg-helpo-purple text-white list-none transform-gpu translate-y-4 opacity-0 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300"
		>
			<li><a href="#" class="no-underline hover:text-helpo-yellow">French</a></li>
			<li><a href="#" class="no-underline hover:text-helpo-yellow">Spanish</a></li>
			<li><a href="#" class="no-underline hover:text-helpo-yellow">Deutsch</a></li>
		</ul>
	</li>
</ul>