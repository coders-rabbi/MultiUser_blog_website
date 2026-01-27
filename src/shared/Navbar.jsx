import React, { useContext } from 'react';
import logo from '../assets/logo/logo.svg'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../authProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='flex justify-around py-6'>
            <div className='flex items-center gap-2'>
                <Link to="/"><img className='w-44' src={logo} alt="" /></Link>
            </div>
            <div>
                {
                    user ?
                        <Link to="/dashboard">
                            <button className='btn bg-[#5044E5] text-white rounded-full font-normal' >Dashboard
                                <FaArrowRight />
                            </button>
                        </Link>
                        :
                        <Link to="/login">
                            <button className='btn bg-[#5044E5] text-white rounded-full font-normal' >Login
                                <FaArrowRight />
                            </button>
                        </Link>

                }

            </div>
        </div>
    );
};

export default Navbar;