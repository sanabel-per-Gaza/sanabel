/** Utilità condivise dai form del pannello di amministrazione. */

export function slugify(text: string): string {
	return text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 120);
}

/** Traduce gli errori di PocketBase in un messaggio leggibile. */
export function errorMessage(e: unknown, fallback = 'Salvataggio non riuscito. Riprova.'): string {
	const err = e as { status?: number; response?: { data?: Record<string, { message?: string }> }; message?: string };
	const fields = err?.response?.data;
	if (fields && Object.keys(fields).length) {
		return Object.entries(fields)
			.map(([field, detail]) => `${field}: ${detail?.message ?? 'valore non valido'}`)
			.join(' · ');
	}
	if (err?.status === 404) return 'Collection non trovata: va prima creata su PocketBase (vedi pb_schema/README.md).';
	if (err?.status === 403 || err?.status === 401) return 'Sessione scaduta o permessi insufficienti: esci e accedi di nuovo.';
	return err?.message || fallback;
}

/** "2025-06-03 00:00:00.000Z" → "2025-06-03" per gli input di tipo date */
export function toDateInput(value?: string): string {
	return value ? value.slice(0, 10) : '';
}

/** I primi articoli sono stati scritti come testo semplice: li converte in paragrafi per l'editor. */
export function ensureHtml(text = ''): string {
	if (!text || /<\/?(p|h[1-6]|ul|ol|div|br)\b/i.test(text)) return text;
	const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	return text
		.replace(/\r\n/g, '\n')
		.split(/\n\s*\n/)
		.map((p) => p.trim())
		.filter(Boolean)
		.map((p) => `<p>${escape(p).replace(/\n/g, '<br>')}</p>`)
		.join('');
}
