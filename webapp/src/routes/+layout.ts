import type { LayoutLoad } from './$types';
import { loadContent } from '$lib/content';

export const load: LayoutLoad = async ({ fetch }) => {
	return { content: await loadContent(fetch) };
};
