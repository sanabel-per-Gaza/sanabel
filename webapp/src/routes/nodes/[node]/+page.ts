import type { PageLoad } from './$types';
import pb from '$lib/pocketbase';

export const load: PageLoad = async ({params}) => {
    const { node } = params;
    const nodes = await pb.collection('nodes').getFullList({
        filter: `name="${node.charAt(0).toUpperCase()
        + node.slice(1)}"`,
                expand: 'posts_via_node'
        }) 
    const posts = nodes[0].expand?.posts_via_node || [] as Array<{ id: string; title: string; content: string; image: string }>;
    console.log(node, posts);
    return {
        posts, 
        node
    };
};