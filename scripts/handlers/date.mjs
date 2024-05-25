import { getPosts } from "../api/posts/index.mjs";

async function fetchPosts() {
    try {
        const postList = await getPosts();
        return postList.data;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
}

