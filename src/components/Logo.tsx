'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logoHorizontal-removebg-preview.png"
        alt="Explore Our Drones"
        width={350}
        height={60}
        className="h-auto sm:h-24"
        priority
      />
    </Link>
  );
}
