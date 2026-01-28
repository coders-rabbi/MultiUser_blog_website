import React from 'react';

const SingleBlog = ({ blogs }) => {
    const { id, category, title, thumbnail, excerpt } = blogs;


    const image = thumbnail
        ? thumbnail
        : "`https://multi-user-blog-website-server.vercel.app/uploads/${thumbnail}`";

    return (
        <div>
            <div
                key={id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
                <img
                    src={image}
                    alt={title}
                    className="rounded-t-xl h-48 w-full object-cover"
                />

                <div className="p-5">
                    <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600">
                        {category}
                    </span>

                    <h3 className="font-semibold text-lg leading-snug mb-2 text-black">
                        {title}
                    </h3>

                    <p className="text-sm text-gray-500">
                        {excerpt}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;