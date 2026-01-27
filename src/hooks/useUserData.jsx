import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
    const res = await fetch("http://localhost:5000/users");

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