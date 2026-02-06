// MobileNavItem.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface MobileNavItemProps {
  item: {
    label: string;
    href: string;
    dropdown?: { label: string; href: string }[];
  };
  closeMenu: () => void;
}

export default function MobileNavItem({ item, closeMenu }: MobileNavItemProps) {
  const [open, setOpen] = useState(false);

  if (!item.dropdown) {
    return (
      <Link
        key={item.label}
        href={item.href}
        onClick={closeMenu}
        className="px-6 py-3 text-lg"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 px-6 py-3 text-lg text-left"
      >
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? 'rotate-90' : ''
          }`}
        />
        {item.label}
      </button>

      {/* Dropdown (NO RESERVED SPACE) */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col pl-12">
          {item.dropdown.map((sub, idx) => (
            <Link
              key={idx}
              href={sub.href}
              onClick={closeMenu}
              className="py-2 text-base text-gray-700"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
