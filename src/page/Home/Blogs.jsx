import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SingleBlog from "./SingleBlog";



const Blogs = () => {
    const [activeTab, setActiveTab] = useState("All");

    const categories = ["All", "Technology", "Robotics", "Science", "Health"];

    const { data, isLoading } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const res = await fetch("/fake.json");
            return res.json();
        }
    });


    if (isLoading) return <p className="text-xl">Loading...</p>;

    const blogs = data.blogs;

    const filteredBlogs =
        activeTab === "All"
            ? blogs
            : blogs.filter((blog) => blog.category === activeTab);

    return (
        <div className="max-w-7xl mx-auto px-4">
            {/* Tabs */}
            <div className="flex gap-6 justify-center mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${activeTab === cat
                                ? "bg-indigo-500 text-white"
                                : "text-gray-500 hover:text-indigo-500"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredBlogs.map((blog, index) => (
                    <SingleBlog
                        key={index}
                        blogs={blog}
                    ></SingleBlog>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
