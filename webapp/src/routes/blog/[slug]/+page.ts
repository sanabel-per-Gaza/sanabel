import type { PageLoad } from './$types';
import pb from '$lib/pocketbase';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	try {
		const post = await pb
			.collection('sanabel_posts')
			.getFirstListItem(pb.filter('slug = {:slug} && published = true', { slug: params.slug }), {
				fetch,
				requestKey: null
			});
		return { post };
	} catch {
		error(404, 'Articolo non trovato');
	}
};
