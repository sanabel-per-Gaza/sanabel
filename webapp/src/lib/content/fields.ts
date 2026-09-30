import type { SiteContent } from './defaults';

/** Descrizione dei campi del pannello "Testi e immagini", raggruppati per pagina. */

export type FieldType = 'text' | 'textarea' | 'rich' | 'image' | 'url' | 'email' | 'clusters' | 'cards';

export type FieldDef = {
	key: keyof SiteContent;
	label: string;
	type: FieldType;
	hint?: string;
};

export type FieldGroup = {
	id: string;
	title: string;
	description: string;
	page?: string;
	fields: FieldDef[];
};

export const fieldGroups: FieldGroup[] = [
	{
		id: 'home',
		title: 'Home',
		description: 'La pagina principale del sito.',
		page: '/',
		fields: [
			{ key: 'hero_eyebrow', label: 'Apertura — etichetta sopra il titolo', type: 'text' },
			{ key: 'hero_title', label: 'Apertura — titolo', type: 'text' },
			{ key: 'hero_text', label: 'Apertura — testo', type: 'textarea' },
			{ key: 'hero_button_label', label: 'Apertura — testo del secondo pulsante', type: 'text', hint: 'Il pulsante porta alla pagina Chi siamo.' },
			{ key: 'hero_image', label: 'Apertura — foto di sfondo', type: 'image', hint: 'Orizzontale, almeno 1920 px di larghezza.' },
			{ key: 'about_eyebrow', label: 'Chi siamo — etichetta', type: 'text' },
			{ key: 'about_title', label: 'Chi siamo — titolo', type: 'text' },
			{ key: 'about_image', label: 'Chi siamo — foto', type: 'image' },
			{ key: 'about_caption', label: 'Chi siamo — testo sotto la foto', type: 'textarea' },
			{ key: 'about_body', label: 'Chi siamo — descrizione', type: 'rich' },
			{ key: 'about_clusters_title', label: 'Cosa facciamo — titolo del riquadro', type: 'text' },
			{ key: 'about_clusters', label: 'Cosa facciamo — aree di intervento', type: 'clusters' },
			{ key: 'activities_title', label: 'Attività — titolo', type: 'text' },
			{ key: 'activities_intro', label: 'Attività — introduzione', type: 'textarea' },
			{ key: 'activities_subtitle', label: 'Attività — frase in evidenza', type: 'text' },
			{ key: 'blog_eyebrow', label: 'Blog — etichetta', type: 'text', hint: 'Usata anche nella pagina Blog.' },
			{ key: 'blog_title', label: 'Blog — titolo', type: 'text', hint: 'Usato anche nella pagina Blog.' }
		]
	},
	{
		id: 'chi-siamo',
		title: 'Chi siamo',
		description: 'La pagina /chi-siamo.',
		page: '/chi-siamo',
		fields: [
			{ key: 'chisiamo_eyebrow', label: 'Etichetta', type: 'text' },
			{ key: 'chisiamo_title', label: 'Titolo', type: 'text' },
			{ key: 'chisiamo_hero_image', label: 'Foto di apertura', type: 'image' },
			{ key: 'chisiamo_intro_title', label: 'Introduzione — titolo', type: 'text' },
			{ key: 'chisiamo_intro_body', label: 'Introduzione — testo', type: 'rich' },
			{ key: 'chisiamo_intro_image', label: 'Introduzione — foto', type: 'image' },
			{ key: 'chisiamo_values_eyebrow', label: 'Valori — etichetta', type: 'text' },
			{ key: 'chisiamo_values_title', label: 'Valori — titolo', type: 'text' },
			{ key: 'chisiamo_values', label: 'Valori', type: 'cards' },
			{ key: 'chisiamo_cta_title', label: 'Chiusura — titolo', type: 'text' },
			{ key: 'chisiamo_cta_text', label: 'Chiusura — testo', type: 'textarea' }
		]
	},
	{
		id: 'attivita',
		title: 'Cosa facciamo',
		description: "L'intestazione della pagina /attivita. Le singole attività si gestiscono dal menu Attività.",
		page: '/attivita',
		fields: [
			{ key: 'activities_page_eyebrow', label: 'Etichetta', type: 'text' },
			{ key: 'activities_page_title', label: 'Titolo', type: 'text' },
			{ key: 'activities_page_intro', label: 'Introduzione', type: 'textarea' }
		]
	},
	{
		id: 'gaza',
		title: 'Gaza',
		description: 'La pagina /gaza dedicata al Centro Al-Irada.',
		page: '/gaza',
		fields: [
			{ key: 'gaza_eyebrow', label: 'Etichetta', type: 'text' },
			{ key: 'gaza_title', label: 'Titolo', type: 'text' },
			{ key: 'gaza_hero_image', label: 'Foto di apertura', type: 'image' },
			{ key: 'gaza_section1_title', label: 'Prima sezione — titolo', type: 'text' },
			{ key: 'gaza_section1_body', label: 'Prima sezione — testo', type: 'rich' },
			{ key: 'gaza_image', label: 'Prima sezione — foto', type: 'image' },
			{ key: 'gaza_section2_title', label: 'Seconda sezione — titolo', type: 'text' },
			{ key: 'gaza_section2_body', label: 'Seconda sezione — testo', type: 'rich' },
			{ key: 'gaza_focus_title', label: 'Focus — titolo', type: 'text' },
			{ key: 'gaza_focus', label: 'Focus', type: 'cards' },
			{ key: 'gaza_cta_title', label: 'Chiusura — titolo', type: 'text' },
			{ key: 'gaza_cta_text', label: 'Chiusura — testo', type: 'textarea' }
		]
	},
	{
		id: 'contatti',
		title: 'Contatti',
		description: 'La pagina /contatti e i dati dell’associazione (mostrati anche nel footer).',
		page: '/contatti',
		fields: [
			{ key: 'contact_title', label: 'Titolo', type: 'text' },
			{ key: 'contact_intro', label: 'Introduzione', type: 'textarea' },
			{ key: 'contact_org_name', label: 'Nome dell’associazione', type: 'text' },
			{ key: 'contact_address', label: 'Indirizzo', type: 'text' },
			{ key: 'contact_email', label: 'Email', type: 'email', hint: 'Mostrata sul sito. I messaggi del modulo si leggono in Messaggi ricevuti.' },
			{ key: 'contact_success', label: 'Messaggio dopo l’invio del modulo', type: 'textarea' }
		]
	},
	{
		id: 'privacy',
		title: 'Privacy',
		description: 'La pagina /privacy, collegata dal footer e dal modulo Contatti.',
		page: '/privacy',
		fields: [
			{ key: 'privacy_title', label: 'Titolo', type: 'text' },
			{ key: 'privacy_body', label: 'Testo', type: 'rich' }
		]
	},
	{
		id: 'generali',
		title: 'Footer e donazioni',
		description: 'Dati che compaiono in tutte le pagine.',
		fields: [
			{ key: 'donation_url', label: 'Link dei pulsanti "Dona ora"', type: 'url' },
			{ key: 'footer_tagline', label: 'Footer — frase sotto il logo', type: 'text' },
			{ key: 'bank_iban', label: 'IBAN', type: 'text' },
			{ key: 'bank_reason', label: 'Causale del bonifico', type: 'text' },
			{ key: 'paypal_email', label: 'Email PayPal', type: 'email' },
			{ key: 'footer_bottom', label: 'Footer — riga in basso', type: 'text', hint: 'Preceduta automaticamente da © e anno.' },
			{ key: 'menu_blurb', label: 'Menu su smartphone — frase sopra "Dona ora"', type: 'textarea' },
			{ key: 'site_description', label: 'Descrizione per Google e per le anteprime social', type: 'textarea', hint: 'Una o due frasi, massimo 160 caratteri circa.' }
		]
	}
];
