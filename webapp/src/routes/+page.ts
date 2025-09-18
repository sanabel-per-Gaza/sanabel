import type { PageLoad } from './$types';
import pb from '$lib/pocketbase';

export const load: PageLoad = async () => {
    const events = await pb.collection('events').getFullList()
    const nodes = await pb.collection('nodes').getFullList() as Array<{ id: string; name: string; description: string; image: string }>;
    return {
        events,
        nodes
    };
};
