"use client"

import Image from 'next/image'
import React from 'react'
import { getUserImages, createImage, updateImage, deleteImage } from '@/libs/fetch/fetchImage'
import { useEffect, useState } from "react";
import UserImage from '../components/UserImage';
import ConfirmDelete from '../components/action/ConfirmDelete';
import AddImage from '../components/AddImage';

const Profile = () => {
  const [imageData, setImageData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserImages();
        console.log(`Images Data: `, data);
        setImageData(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchData();
  }, []);

 
  const handleUpdate = async (id, newCaption) => {
    try {
      const updatedImage = await updateImage(id, { caption: newCaption });
      setImageData(imageData.map(img => img.id === id ? updatedImage : img));
    } catch (error) {
      console.error("Error updating image:", error);
    }
  };

  const handleDelete = async (id) => {
    setImageToDelete(id);
    setIsConfirming(true);
  };

  const handleConfirmDelete = async () => {
    try {
      console.log(`image to delete: `, imageToDelete);
      await deleteImage(imageToDelete);
      // setImageData(imageData.filter((img) => img.id !== imageToDelete));
      alert("Image deleted successfully.");
      setIsConfirming(false);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  console.log(`Data: `, imageData);

  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="flex justify-center border p-3 font-extrabold text-3xl mt-5 w-1/2 rounded" >
            <h1>Profile Page</h1>
          </div>
        </div>
        <div className="flex justify-center mt-5 gap-4">
        <AddImage />
        </div>
        <div className="mx-auto flex flex-col justify-center items-center min-h-[80vh]">
          <UserImage api={imageData} onUpdate={handleUpdate} onDelete={handleDelete} />
        </div>
      </div>
      {isConfirming && (
        <ConfirmDelete
          onClose={() => setIsConfirming(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  )
}

export default Profile;
