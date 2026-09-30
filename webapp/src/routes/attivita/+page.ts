import type { PageLoad } from './$types';
import { getActivities, safe } from '$lib/data';

export const load: PageLoad = async ({ fetch }) => {
	return { activities: await safe(getActivities(fetch), []) };
};
