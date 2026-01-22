import React from 'react';
import { IoMdClose } from 'react-icons/io';

const SingleTableData = ({ post }) => {
    const { id, category, title, thumbnail, excerpt, status } = post;

    return (
        <tr className="text-gray-500">
            <td>{id}</td>
            <td>{title}</td>
            <td>12-05-2026</td>
            <td className='text-green-600 text-[16px]'>{status}</td>
            <div>
                <td>
                    <span className='border py-1 px-2 rounded text-gray-500'>Unpublished</span>
                </td>
                <td className='bg-red-100 rounded-full border text-xs'><IoMdClose /></td>
            </div>
        </tr>
    );
};

export default SingleTableData;