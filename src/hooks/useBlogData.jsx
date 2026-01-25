import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/posts");

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