import type { PageLoad } from './$types';
import pb from '$lib/pocketbase';

export const load: PageLoad = async () => {
    const events = await pb.collection('events').getFullList()
    return {
        events
    };
};
