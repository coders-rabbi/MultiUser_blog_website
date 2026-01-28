import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
    const res = await fetch("https://multi-user-blog-website-server.vercel.app/users");

    if (!res.ok) {
        throw new Error("Failed to fetch user");
    }

    return res.json();
};

const useUserData = () => {
    return useQuery({
        queryKey: ["userInfo"],
        queryFn: fetchUser,
    });
};

export default useUserData;