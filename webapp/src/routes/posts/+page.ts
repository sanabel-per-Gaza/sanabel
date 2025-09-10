import type { PageLoad } from './$types';
import pb from '$lib/pocketbase';

export const load: PageLoad = async () => {
    const posts = await pb.collection('posts').getFullList()
    return {
        posts
    };
};
