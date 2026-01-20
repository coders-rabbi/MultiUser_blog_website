import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaSignsPost } from 'react-icons/fa6';
import SingleTableData from './SingleTableData';

const LatestPosts = () => {

    const { data, isLoading } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const res = await fetch("fake.json");
            return res.json();
        }
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const posts = data.blogs;
    console.log(posts)

    return (
        <div className='py-5'>
            <div className='flex items-center gap-3 text-xl text-gray-600'>
                <FaSignsPost />
                <h4>Latest post</h4>
            </div>

            {/* post table */}
            <div className='bg-white mt-5 shadow rounded'>
                <table className='table py-4'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Post Title</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.blogs.map((post, index) => (
                                <SingleTableData
                                    key={index}
                                    post={post}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>



        </div >
    );
};

export default LatestPosts;