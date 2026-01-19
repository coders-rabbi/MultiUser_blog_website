import React from 'react';
import logo from '../assets/logo/logo.webp'
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='flex justify-around py-6'>
            <div className='flex items-center gap-2'>
                <img className='w-16 ' src={logo} alt="" />
                <h3 className='text-black'>MN_Blog</h3>
            </div>
            <div>
                <button className='btn bg-[#5044E5] text-white rounded-full font-normal' >Dashboard
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Navbar;