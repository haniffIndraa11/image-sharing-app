"use client"

import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
    const [isLogin,setIsLogin] = useState(false)

  return (
    <div className="navbar bg-base-100 shadow-lg bg-gray-100 ">
      <div className="flex-1 px-2 mx-2">
        <Link href="/">
         <span className="text-lg font-bold text-primary cursor-pointer hover:text-secondary">Image Sharing App</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/login" className="text-base hover:text-secondary">Login</Link></li>
          <li><Link href="/register" className="text-base hover:text-secondary">Register</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar


