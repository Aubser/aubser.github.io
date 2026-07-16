'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-end gap-2">
      {/* Fan icon */}
      <Image
        src="/driftlessrobotics-logo3-white-nobg-fan.png"
        alt="Driftless Robotics"
        width={50}
        height={60}
        className="h-15 w-auto invert dark:invert-0"
        priority
      />

      {/* Text */}
      <Image
        src="/driftlessrobotics-logo3-white-nobg-text.png"
        alt="Driftless Robotics Inc."
        width={120}
        height={60}
        className="h-12 w-auto invert dark:invert-0"
        priority
      />
    </Link>
  );
}