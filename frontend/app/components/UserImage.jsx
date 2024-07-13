"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const UserImage = ({ api, onUpdate, onDelete }) => {

    const [editingImageId, setEditingImageId] = useState(null);
    const [newCaption, setNewCaption] = useState('');

    const handleEdit = (id, currentCaption) => {
        setEditingImageId(id);
        setNewCaption(currentCaption);
    };

    const handleCancel = () => {
        setEditingImageId(null);
        setNewCaption('');
    };

    const handleUpdate = (id) => {
        onUpdate(id, newCaption);
        handleCancel();
    };

    return (
        <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 px-4">
            {api.images?.map((content) => {
                // Mengubah backslashes menjadi slashes dan menambahkan garis miring di depan path
                const correctedImageUrl = content.image_url.startsWith('/') ? content.image_url : `/${content.image_url.replace(/\\/g, '/')}`;
                console.log(`Corrected Image Url`, correctedImageUrl);
                console.log(`Image URL`, content.image_url);
                return (
                    <div key={content.id} className="card bg-base-100 shadow-xl hover:bg-slate-200">
                        <figure className="border p-2 shadow transition-all cursor-pointer transform group-hover:scale-105 duration-300">
                            <Image
                                src={correctedImageUrl}
                                width={400}
                                height={400}
                                alt={content.caption}
                                className="transition-transform transform group-hover:scale-105 duration-300"
                            />
                        </figure>
                        <div className="card-body border">
                            <p>{content.caption}</p>
                            <div className="card-actions justify-between">
                                {editingImageId === content.id ? (
                                    <div>
                                        <input
                                            type="text"
                                            value={newCaption}
                                            onChange={(e) => setNewCaption(e.target.value)}
                                        />
                                        <button onClick={() => handleUpdate(content.id)}>Update</button>
                                        <button onClick={handleCancel}>Cancel</button>
                                    </div>
                                ) : (
                                    <div className="card-actions justify-between">
                                        <button onClick={() => handleEdit(content.id, content.caption)} className="btn btn-success cursor-pointer">Edit</button>
                                        <button onClick={() => onDelete(content.id)} className="btn btn-error cursor-pointer">Delete</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default UserImage;
