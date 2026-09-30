import type { PageLoad } from './$types';
import { getActivities, getPosts, safe } from '$lib/data';

export const load: PageLoad = async ({ fetch }) => {
	const [posts, activities] = await Promise.all([
		safe(getPosts(fetch, 3), []),
		safe(getActivities(fetch), [])
	]);
	return { posts, activities };
};
