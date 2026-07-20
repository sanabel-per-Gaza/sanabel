import type { PageLoad } from './$types';
import pb from '$lib/pocketbase';

export const load: PageLoad = async () => {
	const posts = await pb.collection('sanabel_posts').getList(1, 3, {
		filter: 'published = true',
		sort: '-created'
	});
	return { posts: posts.items };
};
