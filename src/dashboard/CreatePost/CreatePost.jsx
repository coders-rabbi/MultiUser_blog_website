import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import usePosts from '../../hooks/useBlogData';

const CreatePost = () => {
    const { data: posts } = usePosts();


    const HandleCreatePost = event => {
        event.preventDefault();
        const form = event.target;

        const totalPosts = posts?.length || 0;
        const newId = totalPosts + 1;

        const formData = new FormData();
        formData.append("id", newId);
        formData.append("blogImage", form.blogImage.files[0]);
        formData.append("title", form.blogTitle.value);
        formData.append("subTitle", form.subTitle.value);
        formData.append("excerpt", form.blogContent.value);
        formData.append("category", form.category.value);

        fetch("http://localhost:5000/posts", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Post created successfully",
                    });
                    form.reset();
                }
            });
    };

    return (
        <div className='text-black'>
            <h2>This is Post Create Page</h2>
            <form onSubmit={HandleCreatePost} action="">
                <input type="file" name="blogImage" className="file-input file-input-primary" />
                <div>
                    <fieldset className="fieldset">
                        <label className="fieldset-legend">Blog Title</label>
                        <input type="text" className="input xl:w-[40%]" name="blogTitle" placeholder="Type here" />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="fieldset">
                        <label className="fieldset-legend">Sub Title</label>
                        <input type="text" className="input xl:w-[40%]" name="subTitle" placeholder="Type here" />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Description</legend>
                        <textarea className="textarea h-24 xl:w-[40%]" name="blogContent" placeholder="Bio"></textarea>
                    </fieldset>
                </div>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Blog category</legend>
                        <select defaultValue="Pick a browser" name="category" className="select xl:w-[40%]">
                            <option disabled={true}>Pick a Category</option>
                            <option>Technology</option>
                            <option>Robotices</option>
                            <option>Science</option>
                            <option>Health</option>
                        </select>
                    </fieldset>
                </div>
                <input type="submit" className='btn bg-[#5044E5] text-white px-8 mt-3' value="Submit" />
            </form>

        </div>
    );
};

export default CreatePost;