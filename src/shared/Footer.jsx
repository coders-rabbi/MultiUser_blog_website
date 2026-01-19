import React from 'react';
import logo from '../assets/logo/logo.svg'
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='mt-10 xl:grid grid-cols-5 px-5 xl:px-10'>
            <div className='col-span-2 xl:pr-5'>
                <div className='flex gap-2 items-center mb-4'>
                    <img className='w-44' src={logo} alt="" />
                </div>
                <p className='text-gray-700 text-[17px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?</p>
            </div>
            <div className='text-gray-700 mt-5 xl:mt-0'>
                <h2 className='text-xl font-semibold mb-4'>Quick Link</h2>
                <ul className='flex flex-col-reverse gap-1'>
                    <Link><li>Home</li></Link>
                    <Link><li>Blog</li></Link>
                    <Link><li>News</li></Link>
                    <Link><li>About Us</li></Link>
                    <Link><li>Gellary</li></Link>
                </ul>
            </div>
            <div className='text-gray-700 mt-5 xl:mt-0'>
                <h2 className='text-xl font-semibold mb-4'>Need Help?</h2>
                <ul className='flex flex-col-reverse gap-1'>
                    <Link><li>Home</li></Link>
                    <Link><li>Blog</li></Link>
                    <Link><li>News</li></Link>
                    <Link><li>About Us</li></Link>
                    <Link><li>Gellary</li></Link>
                </ul>
            </div>
            <div className='text-gray-700 mt-5 xl:mt-0'>
                <h2 className='text-xl font-semibold mb-4'>Follow Us?</h2>
                <ul className='flex flex-col-reverse gap-1'>
                    <Link><li>Instagram</li></Link>
                    <Link><li>Facebook</li></Link>
                    <Link><li>Twitter</li></Link>
                    <Link><li>Youtube</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default Footer;