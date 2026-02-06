'use client';

import { useState } from 'react';
import Link from 'next/link';
import DropdownLink from './DropdownLink';
import { menuItems } from '@/utils/menuData';
import MobileNavItem from './MobileNav';
import Logo from '../Logo';

export default function Header() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

   return (
      <header className="shadow bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center h-20 px-4">

               {/* Logo */}
               <Logo />

               {/* Desktop Navigation */}
               <nav className="hidden md:flex space-x-8 text-black text-xl items-center">
                  {menuItems.map((item, idx) =>
                     item.dropdown ? (
                        <DropdownLink
                           key={idx}
                           item={item}
                           index={idx}
                           activeIndex={activeDropdown}
                           setActiveIndex={setActiveDropdown}
                        />
                     ) : (
                        <Link key={idx} href={item.href} className="hover:text-green-600">
                           {item.label}
                        </Link>
                     )
                  )}
               </nav>


               {/* Mobile Hamburger */}
               <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden"
                  aria-expanded={mobileMenuOpen}
                  aria-label="Toggle menu"
               >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     {mobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                     )}
                  </svg>
               </button>
            </div>
         </div>

         {/* Mobile Menu */}
         <div className={`md:hidden bg-white shadow-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col py-4">
               {menuItems.map((item, idx) => (
                  <MobileNavItem
                     key={idx}
                     item={item}
                     closeMenu={() => setMobileMenuOpen(false)}
                  />
               ))}
            </div>
         </div>

      </header>
   );
}
