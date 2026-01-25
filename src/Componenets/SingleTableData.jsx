import Swal from 'sweetalert2';

const SingleTableData = ({ post, refetch }) => {
    const { _id, category, title, thumbnail, excerpt, status, id } = post;


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

    return (
        <tr className="text-gray-500">
            <td>{id}</td>
            <td>{title}</td>
            <td>12-05-2026</td>
            <td className='text-green-600 text-[16px]'>{status}</td>
            <div>
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
            </div>
        </tr>
    );
};

export default SingleTableData;