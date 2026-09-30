import type { RecordModel } from 'pocketbase';
import pb from '$lib/pocketbase';
import dayjs from 'dayjs';
import 'dayjs/locale/it';

dayjs.locale('it');

export const STATUS_COLORS: Record<string, string> = {
	'In corso': '#1f9d5b',
	Sospeso: '#d6456b',
	Raggiunto: '#1f8fae'
};

/** Data mostrata per un articolo: il campo `date` (se presente) altrimenti la data di creazione. */
export function postDate(post: RecordModel): string {
	return post.date || post.created;
}

export function formatDate(value: string): string {
	return dayjs(value).format('D MMMM YYYY');
}

export function imageUrl(record: RecordModel, field = 'image', thumb?: string): string | null {
	const file = record[field];
	if (!file) return null;
	return pb.files.getURL(record, file, thumb ? { thumb } : undefined);
}

/** Articoli pubblicati, dal più recente (ordinati per data dell'evento se impostata). */
export async function getPosts(fetchFn: typeof fetch, limit?: number): Promise<RecordModel[]> {
	const posts = await pb.collection('sanabel_posts').getFullList({
		filter: 'published = true',
		sort: '-created',
		fetch: fetchFn,
		requestKey: null
	});
	posts.sort((a, b) => postDate(b).localeCompare(postDate(a)));
	return limit ? posts.slice(0, limit) : posts;
}

export async function getActivities(fetchFn: typeof fetch): Promise<RecordModel[]> {
	return pb.collection('sanabel_projects').getFullList({
		filter: 'published = true',
		sort: '-created',
		fetch: fetchFn,
		requestKey: null
	});
}

/** Esegue il caricamento senza far cadere la pagina se PocketBase non risponde. */
export async function safe<T>(promise: Promise<T>, fallback: T): Promise<T> {
	try {
		return await promise;
	} catch (e) {
		console.error(e);
		return fallback;
	}
}
