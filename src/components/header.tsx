// components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <header className="bg-white shadow">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2">
               <div className="text-2xl font-bold text-blue-600">
                  <Link href="/">
                     <img src="/logoHorizontal-removebg-preview.png" alt="Explore Our Drones" className='h-16'/>
                  </Link>
               </div>
               <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
               </nav>
               <div className="md:hidden">
                  <button
                     onClick={() => setMenuOpen(!menuOpen)}
                     className="text-gray-700 focus:outline-none"
                  >
                     <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                     >
                        {menuOpen ? (
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                     </svg>
                  </button>
               </div>
            </div>
         </div>
         {menuOpen && (
            <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
               <Link href="/" className="block text-gray-700">Home</Link>
               <Link href="/about" className="block text-gray-700">About</Link>
               <Link href="/contact" className="block text-gray-700">Contact</Link>
            </div>
         )}
      </header>
   );
}
