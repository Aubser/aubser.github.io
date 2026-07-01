'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/">
      {/* Light mode logo */}
      <Image
        src="/logoHorizontal-removebg-preview.png"
        alt="Explore Our Drones"
        width={350}
        height={60}
        className="h-auto sm:h-24 dark:hidden"
        priority
      />

      {/* Dark mode logo */}
      <Image
        src="/logo-with-text-white-3.png"
        alt="Explore Our Drones"
        width={350}
        height={60}
        className="h-auto sm:h-24 hidden dark:block"
        priority
      />
    </Link>
  );
}
