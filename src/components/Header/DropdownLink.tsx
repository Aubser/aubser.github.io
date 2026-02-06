// DropdownLink.tsx
'use client';

import Link from 'next/link';
import DropdownMenu from './DropdownMenu';
import useHover from '../../hooks/useHover';

interface DropdownLinkProps {
   item: { 
      label: string; 
      href: string; 
      dropdown?: { label: string; href: string }[]
   };
   index: number;
   activeIndex: number | null;
   setActiveIndex: (index: number | null) => void;
};


export default function DropdownLink({ item, index, activeIndex, setActiveIndex }: DropdownLinkProps) {
   const [hoverRef, isHovered] = useHover<HTMLDivElement>();
   const isActive = isHovered && activeIndex === index;

   return (
      <div className="relative inline-block" ref={hoverRef} onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}>
         {/* Button */}
         <Link
            href={item.href}
            className={`
               px-4 py-2 inline-flex items-center justify-center h-10
               rounded-t-md border border-b-0 bg-white relative
               transition-colors duration-500
               ${isHovered ? 'border-gray-300 text-green-600 z-30' : 'border-transparent text-black z-10'}
            `}
         >
            {item.label}
         </Link>

         {/* Dropdown */}
         {item.dropdown && <DropdownMenu items={item.dropdown} isOpen={isActive} />}
      </div>
   );
}
