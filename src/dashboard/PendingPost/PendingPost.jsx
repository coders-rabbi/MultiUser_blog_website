import React from 'react';
import usePosts from '../../hooks/useBlogData';
import SingleTableData from '../../Componenets/SingleTableData';

const PendingPost = () => {
    const { data: posts, isLoading, isError, error, refetch } = usePosts();

    if (isLoading) return <p className="text-xl text-center mt-10">Loading...</p>;




    return (
        <div>
            <h1 className='text-xl font-semibold mt-8'>Pending Posts</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Blog Title</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
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
        </div>
    );
};

export default PendingPost;