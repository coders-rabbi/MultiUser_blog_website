import React, { useContext } from 'react';
import { CgCloseR } from 'react-icons/cg';
import { GoCommentDiscussion } from 'react-icons/go';
import { LuListTodo } from 'react-icons/lu';
import { RiPassPendingLine } from 'react-icons/ri';
import { Link, NavLink, Outlet } from 'react-router';
import LastPost from '../Componenets/LatestPosts';
import { FaBars, FaUser } from 'react-icons/fa6';
import { MdOutlineAttachMoney, MdOutlineDashboard, MdVerified } from 'react-icons/md';
import { AiFillShopping } from 'react-icons/ai';
import { FaHistory } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { AuthContext } from '../authProvider/AuthProvider';
import { GiExitDoor } from 'react-icons/gi';
import useUserData from '../hooks/useUserData';

const Dashboard = () => {

    const { user, logOut } = useContext(AuthContext);
    const { data: userInfo } = useUserData();

    const loggedUser = user?.email;

    const loggedUserData = userInfo?.find(u => u.email === loggedUser);

    const loggedUserRole = loggedUserData?.role;


    const menuClass = ({ isActive }) =>
        isActive
            ? "text-white bg-primary flex items-center gap-2 px-4 py-2 rounded"
            : "text-gray-500 flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded";


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
                                        <img className="w-20 h-20 rounded-full border-2 border-white mx-auto" src={user?.image} alt="" />
                                    </>
                                    :
                                    <>
                                        {/* <img src={profile} alt="" /> */}
                                        <FaUser className="w-20 h-20 rounded-full border-2 border-blue-500 mx-auto " />

                                    </>
                            }
                            <h1 className="text-3xl text-center mt-3 font-semibold">{loggedUserData?.name}</h1>
                            <h4 className="text-xl font-semibold mt-4 flex gap-2 items-center justify-center">{loggedUserData?.role}<MdVerified className="text-success" /></h4>
                        </div>
                        <div className="h-100vh font-pppins px-5 text-xl">
                            <div className="flex flex-col gap-2">


                                {
                                    loggedUserRole === 'admin' ?
                                        <>
                                            <li>
                                                <NavLink to="/dashboard" end className={menuClass}>
                                                    <MdOutlineDashboard />
                                                    Dashboard
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink to="/dashboard/create_post" className={menuClass}>
                                                    <AiFillShopping />
                                                    Create Post
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink to="/dashboard/all_members" className={menuClass}>
                                                    <FaHistory />
                                                    All Members
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink to="/dashboard/comments" className={menuClass}>
                                                    <MdOutlineAttachMoney />
                                                    Comments
                                                </NavLink>
                                            </li>

                                        </>
                                        :
                                        <>
                                            <li>
                                                <NavLink to="/dashboard" end className={menuClass}>
                                                    <MdOutlineDashboard />
                                                    Dashboard
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink to="/dashboard/create_post" className={menuClass}>
                                                    <AiFillShopping />
                                                    Create Post
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/comments" className={menuClass}>
                                                    <MdOutlineAttachMoney />
                                                    Comments
                                                </NavLink>
                                            </li>

                                        </>
                                }

                                <li>
                                    <button
                                        className="text-red-500 flex items-center gap-2 px-4 py-2 rounded hover:bg-red-50"
                                        onClick={logOut}
                                    >
                                        <GiExitDoor />
                                        Logout
                                    </button>
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