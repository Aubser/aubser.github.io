// components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <header className="shadow" style={{backgroundColor: '#FFFFFF'}}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
               <div className="text-2xl font-bold">
                  <Link href="/">
                     <img src="/logoHorizontal-removebg-preview.png" alt="Explore Our Drones" className='h-auto sm:h-24'/>
                  </Link>
               </div>
               <nav className="hidden md:flex space-x-8 text-black text-xl">
                  <Link href="/" className = "hover:text-[#199a48]">Home</Link>
                  <Link href="/contact" className = "hover:text-[#199a48]">Contact</Link>
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
               <Link href="/contact" className="block text-gray-700">Contact</Link>
            </div>
         )}
      </header>
   );
}
