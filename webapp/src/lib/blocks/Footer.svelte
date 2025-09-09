<!-- src/lib/blocks/Footer.svelte -->
<script lang="ts">
	import Logo from '$lib/components/ui/Logo.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<footer class="bg-helpo-dark text-gray-400 py-16">
	<div class="max-w-5xl mx-auto">
		<div class="row">
			<!-- Column 1: Logo & Contacts -->
			<div class="col-sm-6 col-lg-4 mb-8 lg:mb-0">
				<div class="mb-6">
					<Logo theme="dark" />
				</div>
				<div class="text-sm space-y-2">
					<p>Elliott Ave, Parkville VIC 3052, Melbourne Canada</p>
					<p>Phone: <a href="tel:+31859644725" class="no-underline hover:text-white">+31 85 964 47 25</a></p>
					<p>Email: <a href="mailto:support@helpo.org" class="no-underline hover:text-white">support@helpo.org</a></p>
				</div>
				<ul class="flex space-x-8 mt-6 text-white text-lg">
					<li><a href="#" class="hover:opacity-75"><i class="fa fa-facebook" /></a></li>
					<li><a href="#" class="hover:opacity-75"><i class="fa fa-twitter" /></a></li>
					<li><a href="#" class="hover:opacity-75"><i class="fa fa-google-plus" /></a></li>
					<li><a href="#" class="hover:opacity-75"><i class="fa fa-instagram" /></a></li>
				</ul>
			</div>

			<!-- Column 2: Menu -->
			<div class="col-sm-6 col-lg-4 col-xl-3 offset-xl-1 mb-8 lg:mb-0">
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
			<div class="col-lg-4 col-xl-3 offset-xl-1">
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
		<div class="row items-baseline mt-16 text-sm text-gray-600">
			<div class="col-md-6 text-center md:text-left mb-4 md:mb-0">
				<p>© 2024 Sanabel Template by You</p>
			</div>
			<div class="col-md-6 text-center md:text-right">
				<a href="#" class="no-underline hover:text-white">Privacy Policy</a>
				<span class="mx-2">|</span>
				<a href="#" class="no-underline hover:text-white">Term and Condition</a>
			</div>
		</div>
	</div>
</footer>