import React from 'react';
import logo from '../assets/logo/logo.webp'
  
const Footer = () => {
    return (
        <div>
            <div>
                <div className='flex gap-2 items-center'>
                    <img className='w-20' src={logo} alt="" />
                    <p className='text-2xl'>MN_Blog</p>
                </div>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Rerum unde quaerat eveniet cumque accusamus atque qui <br /> error quo enim fugiat?</p>
            </div>
        </div>
    );
};

export default Footer;