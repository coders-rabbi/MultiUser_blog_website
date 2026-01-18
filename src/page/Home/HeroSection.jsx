import React from 'react';

const HeroSection = () => {
    return (
        <div className='text-center mt-20'>
            <h4 className='text-[#5044E5] bg-gradient-to-r from-blue-100 to-blue-200 border inline-block  text-[14px] px-12 rounded-full py-2 mb-8'>New: AI feature integrated</h4>

            <h1 className='text-6xl font-semibold leading-16 text-gray-700 mb-10'>Your own <span className='text-[#5044E5]'>blogging</span> <br />platform.</h1>
            <p className='text-gray-500 mb-8'>This is your space to think out loud, to share what matters, and to write without filters. Whether <br /> it's one word or a thousand, your story starts right here.</p>

            <div className="join">
                <input className='border focus:outline-none px-4 rounded' type="text" placeholder='Search for blogs' />
                <button className="btn btn-neutral join-item bg-[#5044E5] border-none">Search</button>
            </div>
        </div>
    );
};

export default HeroSection;