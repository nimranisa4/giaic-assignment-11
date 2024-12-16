import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        
      <div className="bg-pink-200 m-4 flex justify-center items-center rounded-full text-mint-600 mt-6 ml-4 mr-4 p-3 lg:ml-80 lg:mr-80 ring-4 ring-lavender-300 ring-opacity-50 shadow-md">
      <div className="space-x-4">
        <Link
          className="hover:underline hover:text-peach-300 transition-all duration-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:underline hover:text-peach-300 transition-all duration-300"
          href="/fetchposts"
        >
          Posts
        </Link>

      </div>
    </div>
    
       
    )
}

export default Navbar