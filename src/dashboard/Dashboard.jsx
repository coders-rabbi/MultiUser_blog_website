import React from 'react';
import { CgCloseR } from 'react-icons/cg';
import { GoCommentDiscussion } from 'react-icons/go';
import { LuListTodo } from 'react-icons/lu';
import { RiPassPendingLine } from 'react-icons/ri';
import { Link, Outlet } from 'react-router';
import LastPost from '../Componenets/LatestPosts';
import { FaBars } from 'react-icons/fa6';
import { MdOutlineAttachMoney, MdOutlineDashboard, MdVerified } from 'react-icons/md';
import { AiFillShopping } from 'react-icons/ai';
import { FaHistory } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Dashboard = () => {

    const userInfo = null;
    const profile = null;
    return (
        <div>
            <div className="drawer lg:drawer-open md:gap-10 px-4 md:px-0 bg-[#F6FAFE]">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content overflow-hidden">

                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary lg:drawer-open lg:hidden 10"
                    >
                        <FaBars />
                    </label>

                    {/* Page content here */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full rounded-md bg-white">
                        <div className="mb-10">
                            {
                                userInfo?.image ?
                                    <>
                                        <img className="w-20 h-20 rounded-full border-2 border-white mx-auto" src={userInfo?.image} alt="" />
                                    </>
                                    :
                                    <>
                                        <img className="w-20 h-20 rounded-full border-2 border-white mx-auto" src={profile} alt="" />
                                    </>
                            }
                            <h1 className="text-3xl text-center mt-3 font-semibold">{userInfo?.name}</h1>
                            <h4 className="text-xl font-semibold mt-4 flex gap-2 items-center justify-center">{userInfo?.role}<MdVerified className="text-success" /></h4>
                        </div>
                        <div className="h-100vh font-pppins px-5 text-xl">
                            <div className="flex flex-col gap-2">
                                <li>
                                    <Link to="">
                                        <MdOutlineDashboard />
                                        Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="create_post">
                                        <AiFillShopping />
                                        Create Post</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/all_members">
                                        <FaHistory />
                                        All Memebers</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/comments">
                                        <MdOutlineAttachMoney />
                                        Comments</Link>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;