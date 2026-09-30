export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/chi-siamo', label: 'Chi siamo' },
	{ href: '/attivita', label: 'Cosa facciamo' },
	{ href: '/gaza', label: 'Gaza' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/contatti', label: 'Contatti' }
];

export function isActive(href: string, pathname: string): boolean {
	return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');
}
