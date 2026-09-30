import type { PageLoad } from './$types';
import { getPosts, safe } from '$lib/data';

export const load: PageLoad = async ({ fetch }) => {
	return { posts: await safe(getPosts(fetch), []) };
};
