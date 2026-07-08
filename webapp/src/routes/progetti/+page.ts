import type { PageLoad } from './$types';
import pb from '$lib/pocketbase';

export const load: PageLoad = async () => {
	const projects = await pb.collection('sanabel_projects').getFullList({
		filter: 'published = true',
		sort: '-created'
	});
	return { projects };
};
