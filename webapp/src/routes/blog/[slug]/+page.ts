import type { PageLoad } from './$types';
import pb from '$lib/pocketbase';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await pb.collection('sanabel_posts').getFirstListItem(`slug = "${params.slug}"`);
		return { post };
	} catch {
		throw error(404, 'Post non trovato');
	}
};
