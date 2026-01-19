import React from 'react';
import logo from '../assets/logo/logo.svg'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-around py-6'>
            <div className='flex items-center gap-2'>
                <img className='w-44' src={logo} alt="" />
            </div>
            <div>
                <Link to="/dashboard">
                    <button className='btn bg-[#5044E5] text-white rounded-full font-normal' >Dashboard
                        <FaArrowRight />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;