"use client";

import Image from "next/image";
import { useAnimatedTransform } from "../hooks/useAnimatedTransform";

interface SplitSectionProps {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  bgClassName?: string;
  darkMode?: string;
}

export default function SplitSection({
  title,
  body,
  imageSrc,
  imageAlt,
  reverse = false,
  bgClassName = "",
  darkMode = "",
}: SplitSectionProps) {
  const { ref: imageRef, style: imageStyle } = useAnimatedTransform({
    direction: reverse ? "right" : "left",
  });

  const { ref: textRef, style: textStyle } = useAnimatedTransform({
    direction: "up",
  });

  return (
    <section className={`max-w-8xl mx-auto px-6 lg:px-50 py-40 ${bgClassName} ${darkMode}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Image */}
        <div
          ref={imageRef}
          style={{ ...imageStyle, transitionDelay: "0ms" }}
          className={`relative w-full h-[260px] sm:h-[320px] lg:h-[400px] ${reverse ? "lg:order-2" : ""}`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Text */}
        <div
          ref={textRef}
          style={{ ...textStyle, transitionDelay: "150ms" }}
          className={reverse ? "lg:order-1" : ""}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            {title}
          </h2>
          <p className="text-base lg:text-lg leading-relaxed">
            {body}
          </p>
        </div>

      </div>
    </section>
  );
}