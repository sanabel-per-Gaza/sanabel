<!-- src/lib/blocks/Footer.svelte -->
<script lang="ts">
	import Logo from '$lib/components/ui/Logo.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<footer class="bg-helpo-dark text-gray-400 py-16">
	<div class="max-w-5xl mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Column 1: Logo & Contacts -->
			<div class="mb-8 lg:mb-0">
				<div class="mb-6">
					<Logo theme="dark" />
				</div>
				<div class="text-sm space-y-2">
					<p>Phone: <a href="tel:+31859644725" class="no-underline hover:text-white"></a></p>
					<p>Email: <a href="mailto:support@helpo.org" class="no-underline hover:text-white"></a></p>
				</div>
				<ul class="flex space-x-8 mt-6 text-white text-lg">
					<li><a href="#" class="hover:opacity-75"><i class="fa fa-facebook" /></a></li>
					<li><a href="#" class="hover:opacity-75"><i class="fa fa-twitter" /></a></li>
					<li><a href="#" class="hover:opacity-75"><i class="fa fa-google-plus" /></a></li>
					<li><a href="#" class="hover:opacity-75"><i class="fa fa-instagram" /></a></li>
				</ul>
			</div>

			<!-- Column 2: Menu -->
			<div class="offset-xl-1 mb-8 lg:mb-0">
				<h6 class="text-white text-xl font-bold mb-5">Menu & Links</h6>
				<nav>
					<ul class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
						<li><a href="#" class="no-underline hover:text-white">Home Page</a></li>
						<li><a href="#" class="no-underline hover:text-white">Blog & News</a></li>
						<li><a href="#" class="no-underline hover:text-white">About Us</a></li>
						<li><a href="#" class="no-underline hover:text-white">Contact Us</a></li>
						<li><a href="#" class="no-underline hover:text-white">Pages</a></li>
						<li><a href="#" class="no-underline hover:text-white">Elements</a></li>
						<li><a href="#" class="no-underline hover:text-white">Causes</a></li>
						<li><a href="#" class="no-underline hover:text-white">Documentation</a></li>
					</ul>
				</nav>
			</div>

			<!-- Column 3: Newsletter -->
			<div class="offset-xl-1">
				<h6 class="text-white text-xl font-bold mb-5">Newsletter</h6>
				<form class="flex flex-col items-start">
					<input
						class="bg-transparent border-b-2 border-gray-700 w-full py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-helpo-yellow"
						type="email"
						placeholder="Enter your E-mail"
					/>
					<div class="mt-6 w-full">
						<Button variant="filled">Subscribe</Button>
					</div>
				</form>
			</div>
		</div>

		<!-- Copyright -->
		<div class="items-baseline mt-16 text-sm text-gray-600">
			<div class="text-center md:text-right">
				<a href="#" class="no-underline hover:text-white">Privacy Policy</a>
		</div>
	</div>
</footer>