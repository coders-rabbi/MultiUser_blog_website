import { useQuery } from "@tanstack/react-query";

const fetchBlog = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const UseBlogData = () => {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: fetchBlog
    });
};

export default UseBlogData;

