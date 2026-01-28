import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const res = await fetch("https://multi-user-blog-website-server.vercel.app/posts");

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return res.json();
};

const usePosts = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });
};

export default usePosts;