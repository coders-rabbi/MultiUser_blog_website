import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaSignsPost } from 'react-icons/fa6';
import SingleTableData from './SingleTableData';

const LatestPosts = () => {

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/posts");
            return res.json();
        }
    });


    if (isLoading) return <p className="text-xl text-center mt-10">Loading...</p>;

    const posts = data;

    return (
        <div className='py-5'>
            <div className='flex items-center gap-3 text-xl text-gray-600'>
                <FaSignsPost />
                <h4>Latest post</h4>
            </div>

            {/* post table */}
            <div className='bg-white p-8 shadow rounded mt-10'>
                <table className='table'>
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
                            posts.map((post, index) => (
                                <SingleTableData
                                    key={index}
                                    post={post}
                                    refetch={refetch}
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