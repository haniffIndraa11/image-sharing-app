"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/libs/fetch/fetchAuth';

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi sisi klien
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    try {
      const data = await register(formData);
      if (data === undefined) {
        throw new Error('Failed to register or Email already exists. Please try again.');
      }
      console.log('Registration successful:', data);
      alert('Registration successful');
      // Redirect to login page or homepage
      router.push('/login');
    } catch (error) {
      console.error('Error during registration:', error);
      setError(error.response?.data?.error || 'Failed to register or Email already exists. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <aside className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <h1 className="text-center font-light text-4xl mb-6">Sign Up</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <div className="flex justify-between items-center mt-4">
            <Link className="link" href="/login">Already Registered?</Link>
            <button
              type="submit"
              className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </aside>
    </div>
  );
};

export default Register;
