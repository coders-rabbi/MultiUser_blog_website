import React from 'react';

const SingleTableData = ({ post }) => {
    const { id, category, title, thumbnail, excerpt } = post;

    return (
        <tr className="text-gray-500">
            <td>{id}</td>
            <td>{title}</td>
            <td>12-05-2026</td>
            <td>Published</td>
            <td>Delete</td>
        </tr>
    );
};

export default SingleTableData;