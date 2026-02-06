'use client';

import Image from 'next/image';

type Props = {
  image: string;
  leftTitle: string;
  rightTitle: string;
};

export default function ImageRevealOverlay({ image, leftTitle, rightTitle }: Props) {
  return (
    <section className="relative h-[75vh] w-full flex md:justify-center items-start pt-20 md:items-center ">
      {/* Full-screen fixed background image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
          style={{ objectPosition: '50% 80%' }}
        />
      </div>

      {/* Sticky container for the overlay section */}
      <div>
        {/* Content grid */}
        <div className="relative z-20 grid h-full grid-cols-1 md:grid-cols-2 px-6 md:px-20 md:gap-40">
          <div className="flex items-center">
            <div className="max-w-md text-white">
              <h3 className="text-4xl font-bold mb-4 italic">{leftTitle}</h3>
            </div>
          </div>

          <div className="flex items-center justify-end text-right">
            <div className="max-w-md text-white">
              <h3 className="text-4xl font-bold mb-4 italic">{rightTitle}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
