import React from 'react';

const Comments = () => {
    return (
        <div className='m-10'>
            <div className='flex justify-between'>
                <h3 className='font-semibold mb-5'>Comments</h3>
                <div className='flex gap-4'>
                    <button className='btn btn-xs rounded-full'>Approved</button>
                    <button className='btn btn-xs rounded-full'>Not Approved</button>
                </div>
            </div>
            <div>
                <div className='bg-white p-8 rounded'>
                    <table className='table'>
                        <thead className='text-xs'>
                            <th>BlogTitle&Comment</th>
                            <th>Date</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rabbi</td>
                                <td>Rabbi</td>
                                <td>Rabbi</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Comments;