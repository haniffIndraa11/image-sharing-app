"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createImage } from '@/libs/fetch/fetchImage'; 

const AddImage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    caption: '',
    image: null,
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi sisi klien
    if (!formData.caption || !formData.image) {
      setError('All fields are required');
      return;
    }

    const uploadData = new FormData();
    uploadData.append('caption', formData.caption);
    uploadData.append('image_url', formData.image);

    try {
      const newImage = await createImage(uploadData);
      if (!newImage) {
        throw new Error('Failed to upload image. Please try again.');
      }
      console.log('Image uploaded successfully:', newImage);
      alert('Image uploaded successfully');
      // Redirect or update the state as needed
      router.push('/profile'); // Replace with the appropriate route
    } catch (error) {
      console.error('Error uploading image:', error);
      setError(error.response?.data?.error || 'Failed to upload image. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Image</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Caption</label>
          <input
            type="text"
            name="caption"
            value={formData.caption}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
};

export default AddImage;
