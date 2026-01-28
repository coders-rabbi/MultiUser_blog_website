import Swal from 'sweetalert2';
import useUserData from '../hooks/useUserData';
import { AuthContext } from '../authProvider/AuthProvider';
import { useContext } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';

const SingleTableData = ({ post, refetch }) => {
    const { _id, category, title, thumbnail, excerpt, status, id } = post;
    const { data: userInfo } = useUserData();
    const { user } = useContext(AuthContext);


    const loggedUserData = userInfo?.find(u => u.email === user?.email);
    const loggedUserRole = loggedUserData?.role;
    // console.log(loggedUserRole);

    //post status update handler
    const handlePostStatus = (status, _id) => {
        console.log(status, _id);
        const statusUpdate = { status };
        fetch(`http://localhost:5000/posts/update_status/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(statusUpdate)
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
                }
                refetch();
            });
    };

    //post delete handler
    const handleDeletePost = (_id) => {
        console.log("Delete post with id:", _id);
        fetch(`http://localhost:5000/posts/delete/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your post has been deleted.",
                        icon: "success",
                    });
                }
                refetch();
            });
    }

    return (
        <tr className="text-gray-500">
            <td>{id}</td>
            <td>{title}</td>
            <td>12-05-2026</td>
            <td className='text-green-600 text-[16px]'>{status}</td>
            <div>
                {
                    loggedUserRole === 'admin' ?
                        <td>
                            <fieldset className="fieldset">
                                <select defaultValue="Pick a browser" className="select">

                                    <option className='text-warning'>{status}</option>
                                    <option onClick={() => handlePostStatus('published', _id)}>published</option>
                                    <option onClick={() => handlePostStatus('pending', _id)}>Pending</option>
                                    <option onClick={() => handlePostStatus('reject', _id)}>Reject</option>
                                </select>
                            </fieldset>
                        </td>
                        :
                        <td className='text-[16px]'>
                            <TiDelete onClick={() => handleDeletePost(_id)} className='text-red-400 w-10 h-10 rounded-full ' />
                        </td>

                }

            </div>
        </tr>
    );
};

export default SingleTableData;