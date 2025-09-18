import type { PageLoad } from './$types';
import pb from '$lib/pocketbase';

export const load: PageLoad = async ({params}) => {
    const { id } = params;
    const post = await pb.collection('posts').getOne(id);
    return {
        post 
    };
   
};