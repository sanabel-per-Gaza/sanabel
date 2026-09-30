import type { PageLoad } from './$types';
import pb from '$lib/pocketbase';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	try {
		const activity = await pb
			.collection('sanabel_projects')
			.getFirstListItem(pb.filter('slug = {:slug} && published = true', { slug: params.slug }), {
				fetch,
				requestKey: null
			});
		return { activity };
	} catch {
		error(404, 'Attività non trovata');
	}
};
