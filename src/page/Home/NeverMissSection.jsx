import React from 'react';

const NeverMissSection = () => {
    return (
        <div className='text-center my-32'>
            <h1 className='text-4xl text-black font-semibold mb-3'>Never Miss a Blog!</h1>
            <p className='text-gray-600'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
            <div className='flex px-4 mt-8 justify-center'>
                <input className='text-gray-600 border focus:outline-none w-full xl:w-[40%] py-2 pl-3 rounded rounded-r-none' type="text" name="Search" id="" placeholder='Enter Your Email id' />
                <input className='text-black bg-[#5044E5] text-white px-5 rounded rounded-l-none' type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default NeverMissSection;