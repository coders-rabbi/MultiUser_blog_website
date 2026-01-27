import React from 'react';
import useUserData from '../../hooks/useUserData';

const All_Member = () => {
    const { data: userInfo } = useUserData();
    return (
        <div className='p-5'>
            <h1 className='text-2xl font-bold'>Memeber Lists</h1>
            <div>
                <table className='table-auto w-full mt-5 border border-gray-300'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='border border-gray-300 px-4 py-2'>#</th>
                            <th className='border border-gray-300 px-4 py-2'>Name</th>
                            <th className='border border-gray-300 px-4 py-2'>Email</th>
                            <th className='border border-gray-300 px-4 py-2'>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userInfo?.map((user, index) => (
                                <tr key={user._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                    <td className='border border-gray-300 px-4 py-2 text-center'>{index + 1}</td>
                                    <td className='border border-gray-300 px-4 py-2'>{user.name}</td>
                                    <td className='border border-gray-300 px-4 py-2'>{user.email}</td>
                                    <td className='border border-gray-300 px-4 py-2'>{user.role}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default All_Member;