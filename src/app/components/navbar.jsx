'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [modelsOpen, setModelsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black shadow-sm">
      {/* Logo */}
      <Link href="/" className="mr-16">
        <Image src="/logo.svg" alt="Logo" width={100} height={42} />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <Link href="/about" className="text-white font-medium hover:text-gray-300">About</Link>
        <Link href="/members" className="text-white font-medium hover:text-gray-300">Members</Link>
        <Link href="/technicians" className="text-white font-medium hover:text-gray-300">Technicians</Link>
        <Link href="/partners" className="text-white font-medium hover:text-gray-300">Partners</Link>
        
        {/* Models Dropdown */}
        <div className="relative">
          <button 
            className="text-white font-medium hover:text-gray-300 flex items-center gap-1"
            onClick={() => setModelsOpen(!modelsOpen)}
          >
            Models
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {modelsOpen && (
            <div className="absolute top-full mt-2 w-48 bg-black rounded-md shadow-lg py-1">
              {/* Add dropdown items here */}
            </div>
          )}
        </div>

        <Link href="/subscription" className="text-white font-medium hover:text-gray-300">Subscriptions</Link>

        {/* More Dropdown */}
        <div className="relative">
          <button 
            className="text-white font-medium hover:text-gray-300 flex items-center gap-1"
            onClick={() => setMoreOpen(!moreOpen)}
          >
            More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {moreOpen && (
            <div className="absolute top-full mt-2 w-48 bg-black rounded-md shadow-lg py-1">
              {/* Add dropdown items here */}
            </div>
          )}
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-6">
        <Link 
          href="/signin" 
          className="text-yellow-400 font-medium hover:text-yellow-500"
        >
          Sign In
        </Link>
        <Link 
          href="/join" 
          className="bg-yellow-400 text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-500"
        >
          Join
        </Link>
      </div>
    </nav>
  );
}
