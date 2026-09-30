<script lang="ts">
	import Logo from '$lib/components/ui/Logo.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { navLinks } from '$lib/links';
	import type { SiteContent } from '$lib/content';

	export let content: SiteContent;

	const year = new Date().getFullYear();
</script>

<footer class="bg-helpo-dark py-16 text-gray-300">
	<div class="container mx-auto">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_1.2fr]">
			<div>
				<div class="mb-6">
					<Logo size="lg" />
				</div>
				<p class="max-w-xs text-lg leading-8 text-white">{content.footer_tagline}</p>
				<div class="mt-6 space-y-1 text-sm leading-6 text-gray-400">
					<p class="font-bold text-gray-300">{content.contact_org_name}</p>
					<p>{content.contact_address}</p>
					<p>
						<a href="mailto:{content.contact_email}" class="text-gray-300 underline decoration-white/20 underline-offset-4 hover:text-white">
							{content.contact_email}
						</a>
					</p>
				</div>
			</div>

			<div>
				<h2 class="mb-5 text-lg font-bold text-white">Naviga</h2>
				<nav aria-label="Menu del footer">
					<ul class="space-y-3 text-sm font-bold uppercase tracking-[0.16em]">
						{#each navLinks as link}
							<li><a href={link.href} class="no-underline transition-colors hover:text-helpo-yellow">{link.label}</a></li>
						{/each}
					</ul>
				</nav>
			</div>

			<div>
				<h2 class="mb-5 text-lg font-bold text-white">Sostieni Sanabel</h2>
				<div class="space-y-5 leading-7">
					<div>
						<p class="mb-1 text-sm text-gray-400">Bonifico bancario</p>
						<p class="text-sm tracking-wide text-gray-200 [overflow-wrap:anywhere]">IBAN: <span class="select-all font-semibold">{content.bank_iban}</span></p>
						<p class="mt-1 text-sm text-gray-400">Causale: {content.bank_reason}</p>
					</div>
					<div>
						<p class="mb-1 text-sm text-gray-400">PayPal</p>
						<p class="text-sm text-gray-200 [overflow-wrap:anywhere]">{content.paypal_email}</p>
					</div>
					<div class="pt-1">
						<Button variant="filled" href={content.donation_url} target="_blank">Dona ora</Button>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
			<p>© {year} {content.footer_bottom}</p>
			<a href="/privacy" class="text-gray-400 underline decoration-white/20 underline-offset-4 hover:text-white">Privacy e Cookie Policy</a>
		</div>
	</div>
</footer>
