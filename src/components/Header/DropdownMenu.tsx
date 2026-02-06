// DropdownMenu.tsx
'use client';

import Link from 'next/link';

interface DropdownMenuProps {
  items: { label: string; href: string }[];
  isOpen: boolean;
  className?: string;
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
}

export default function DropdownMenu({
  items,
  isOpen,
  className = '',
  variant = 'desktop',
  onNavigate,
}: DropdownMenuProps) {
  const isMobile = variant === 'mobile';

  return (
    <div
      className={`
        ${isMobile ? 'relative w-full ml-6' : 'absolute top-full left-0 w-64'}
        bg-white
        ${isMobile ? '' : 'border border-gray-300 rounded-tr-md rounded-b shadow-lg'}
        z-20
        transition-all duration-300 ease-out origin-top
        ${isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}
        ${className}
      `}
    >
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          onClick={onNavigate}
          className="block px-4 py-2 text-gray-700 hover:text-green-500 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
