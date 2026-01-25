import React from 'react';
import LatestPosts from '../../Componenets/LatestPosts';
import { Link } from 'react-router';
import { LuListTodo } from 'react-icons/lu';
import { GoCommentDiscussion } from 'react-icons/go';
import { CgCloseR } from 'react-icons/cg';
import { RiPassPendingLine } from 'react-icons/ri';

const AdminOverView = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-5'>

                <Link>
                    <div className='shadow rounded p-8 flex items-center justify-center gap-5' id='Total_Post'>
                        <LuListTodo className='text-3xl text-[#5F6FFF]' />
                        <div>

                            <p>12</p>
                            <button className='text-gray-400'>Posts</button>
                        </div>
                    </div>
                </Link>


                <Link to="pending_post">
                    <div className='shadow rounded p-8 flex items-center justify-center gap-5' id='Total_Post'>
                        <RiPassPendingLine className='text-3xl text-[#5F6FFF]' />
                        <div>
                            <p>12</p>
                            <button className='text-gray-400'>Pending Post</button>
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className='shadow rounded p-8 flex items-center justify-center gap-5' id='Total_Post'>
                        <CgCloseR className='text-3xl text-[#5F6FFF]' />
                        <div>
                            <p>12</p>
                            <button className='text-gray-400'>Post Reject</button>
                        </div>
                    </div>
                </Link>


                <Link to="comments">
                    <div className='shadow rounded p-8 flex items-center justify-center gap-5' id='Total_Post'>
                        <GoCommentDiscussion className='text-3xl text-[#5F6FFF]' />
                        <div>
                            <p>12</p>
                            <button className='text-gray-400'>Comments</button>
                        </div>
                    </div>
                </Link>
            </div>
            <LatestPosts />
        </div>
    );
};

export default AdminOverView;