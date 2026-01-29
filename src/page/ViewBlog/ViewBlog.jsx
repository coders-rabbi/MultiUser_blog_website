import React from 'react';
import usePosts from '../../hooks/useBlogData';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewBlog = () => {
    const { data: blog, isLoading } = usePosts();
    const { id } = useParams();

    const postId = Number(id);


    const filteredBlog = blog?.find(post => post.id === Number(id));


    if (isLoading) {
        return <p className="text-xl text-center mt-10">Loading...</p>;
    }



    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData();
        formData.append("id", postId);
        formData.append("comment", form.comment.value);
        fetch("http://localhost:5000/comments", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Comment added successfully",
                    });
                    form.reset();
                }
            });
    }


    return (
        <div className='mx-auto max-w-7xl px-4 pt-10'>
            <h3 className='text-center text-xl font-semibold'>Publish on: {filteredBlog?.publishedDate}</h3>
            <h1 className='text-3xl font-bold mb-5 text-center mt-5'>{filteredBlog?.title}</h1>

            <img cla src={filteredBlog?.thumbnail} alt={filteredBlog?.title} className='w-[600px] h-[400px] object-cover rounded-lg mb-8 m-auto' />

            <p className='text-center'>{filteredBlog?.content}</p>

            {/* comments section */}
            <div className='flex justify-center mx-auto mt-8'>
                <form onSubmit={handleCommentSubmit}>
                    <fieldset className="fieldset">
                        <textarea className="textarea w-[600px] h-[200px]" placeholder="Typing Here" required></textarea>


                        <button type="submit" name='comment' className="btn btn-neutral mt-4 w-full">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ViewBlog;