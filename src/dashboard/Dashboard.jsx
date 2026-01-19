import React from 'react';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-5 h-full'>
            <div className='col-span-1 bg-amber-100'>
                <p>This is for admin router</p>
            </div>
            <div className='col-span-4'>
                <p>This is for content</p>
            </div>
        </div>
    );
};

export default Dashboard;