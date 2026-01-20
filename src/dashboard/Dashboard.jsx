import React from 'react';
import { CgCloseR } from 'react-icons/cg';
import { GoCommentDiscussion } from 'react-icons/go';
import { LuListTodo } from 'react-icons/lu';
import { RiPassPendingLine } from 'react-icons/ri';
import { Link } from 'react-router';
import LastPost from '../Componenets/LatestPosts';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-5 h-full'>
            <div className='col-span-1 bg-amber-100'>
                <p>This is for admin router</p>
            </div>
            <div className='col-span-4 bg-[#F6FAFE] p-10 '>
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

                    <Link>
                        <div className='shadow rounded p-8 flex items-center justify-center gap-5' id='Total_Post'>
                            <GoCommentDiscussion className='text-3xl text-[#5F6FFF]' />
                            <div>
                                <p>12</p>
                                <button className='text-gray-400'>Comments</button>
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




                    <Link>
                        <div className='shadow rounded p-8 flex items-center justify-center gap-5' id='Total_Post'>
                            <RiPassPendingLine className='text-3xl text-[#5F6FFF]' />
                            <div>
                                <p>12</p>
                                <button className='text-gray-400'>New Request</button>
                            </div>
                        </div>
                    </Link>
                </div>
                <LastPost />
            </div>

        </div>
    );
};

export default Dashboard;