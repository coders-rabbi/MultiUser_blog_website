import React from 'react';
import { IoMdClose } from 'react-icons/io';
import Swal from 'sweetalert2';

const SingleTableData = ({ post, refetch }) => {
    const { id, category, title, thumbnail, excerpt, status } = post;


    const handlePostStatus = (status) => {
        const selectedPastId = selectedParcels.map((id) => id);
        const updateData = {
            ids: selectedPastId,
            status: status,
        };
        fetch(`http://localhost:5000/posts`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Done!",
                        text: "Status update successfully",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                    // Clear the selected parcels after successful status update
                    setSelectedParcels([]);
                }
                refetch();
            })
            .catch((error) => {
                console.error(error);
                // Handle error if any
            });
    };

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
                <td className='bg-red-100 rounded-full border text-xs' handlePost><IoMdClose /></td>
            </div>
        </tr>
    );
};

export default SingleTableData;