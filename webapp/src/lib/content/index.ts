import type { RecordModel } from 'pocketbase';
import pb from '$lib/pocketbase';
import { defaults, IMAGE_FIELDS, JSON_FIELDS, type SiteContent } from './defaults';

export { defaults, IMAGE_FIELDS, JSON_FIELDS };
export type { SiteContent, Cluster, Card } from './defaults';

export const CONTENT_COLLECTION = 'sanabel_content';

/** Legge il record singleton; restituisce null se la collection non esiste o è vuota. */
export async function fetchContentRecord(
	fetchFn: typeof fetch = fetch,
	client = pb
): Promise<RecordModel | null> {
	try {
		const list = await client
			.collection(CONTENT_COLLECTION)
			.getList(1, 1, { fetch: fetchFn, requestKey: null });
		return list.items[0] ?? null;
	} catch {
		return null;
	}
}

function isFilled(value: unknown): boolean {
	if (value === null || value === undefined) return false;
	if (typeof value === 'string') return value.replace(/<[^>]*>/g, '').trim() !== '' || /<img/i.test(value);
	if (Array.isArray(value)) return value.length > 0;
	return true;
}

/** Unisce il record PocketBase ai default: i campi vuoti ricadono sul testo predefinito. */
export function mergeContent(record: RecordModel | null): SiteContent {
	const content: SiteContent = structuredClone(defaults);
	if (!record) return content;

	for (const key of Object.keys(defaults) as (keyof SiteContent)[]) {
		const value = record[key];
		if (!isFilled(value)) continue;

		if ((IMAGE_FIELDS as readonly string[]).includes(key)) {
			(content as Record<string, unknown>)[key] = pb.files.getURL(record, value);
		} else {
			(content as Record<string, unknown>)[key] = value;
		}
	}
	return content;
}

export async function loadContent(fetchFn: typeof fetch = fetch): Promise<SiteContent> {
	return mergeContent(await fetchContentRecord(fetchFn));
}

/** Trasforma testo semplice con righe vuote in paragrafi HTML (per i campi textarea). */
export function paragraphs(text: string): string[] {
	return text
		.split(/\n\s*\n/)
		.map((p) => p.trim())
		.filter(Boolean);
}
