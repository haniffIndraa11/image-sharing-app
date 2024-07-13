"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <div className="navbar shadow-lg bg-gray-100 ">
      <div className="flex-1 px-2 mx-2">
        <Link href="/">
          <span className="text-lg font-bold text-primary cursor-pointer hover:text-secondary">Image Sharing App</span>
        </Link>
      </div>
      <div className="flex-none">
        {isLoggedIn ? (
          <>
            <div className="flex gap-4">
              <button className="btn-primary rounded font-bold bg-red-500 p-2 hover:bg-red-900" onClick={handleLogout}>Logout</button>
              <button className="btn-success rounded font-bold bg-gray-300 p-2 hover:bg-gray-400" onClick={() => router.push('/profile')}>
                Profile
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-4">
              <button className="btn-primary rounded font-bold text-black bg-gray-300 p-2 hover:bg-gray-400" onClick={() => router.push('/login')}>
                Login
              </button>
              <button className="btn-success rounded font-bold bg-gray-300 p-2 hover:bg-gray-400" onClick={() => router.push('/register')}>
                Register
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar


