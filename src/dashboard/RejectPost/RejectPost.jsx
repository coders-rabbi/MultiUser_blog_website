import React from 'react';
import usePosts from '../../hooks/useBlogData';
import SingleTableData from '../../Componenets/SingleTableData';

const RejectPost = () => {
    const { data: posts, isLoading, isError, error, refetch } = usePosts();

    if (isLoading) return <p className="text-xl text-center mt-10">Reject Loading...</p>;

    const reject_posts = posts.filter(post => post.status === "reject") || [];
    console.log(reject_posts)

    return (
        <div className='py-10'>
            <h1 className='text-2xl font-semibold'>Rejected Post</h1>

            {/* Tabel Data */}
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Post Title</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reject_posts.map((post, index) => (
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
    );
};

export default RejectPost;