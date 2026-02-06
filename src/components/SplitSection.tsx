"use client";

import Image from "next/image";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

type Direction = "up" | "down" | "left" | "right";

interface SplitSectionProps {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  bgClassName?: string;
}

function getTransform(
  isVisible: boolean,
  direction: Direction,
  distance = 24
) {
  if (isVisible) return "translate3d(0,0,0)";

  switch (direction) {
    case "left":
      return `translate3d(${distance}px, 0, 0)`;
    case "right":
      return `translate3d(-${distance}px, 0, 0)`;
    case "down":
      return `translate3d(0, -${distance}px, 0)`;
    case "up":
    default:
      return `translate3d(0, ${distance}px, 0)`;
  }
}

export default function SplitSection({
  title,
  body,
  imageSrc,
  imageAlt,
  reverse = false,
  bgClassName = "",
}: SplitSectionProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const imageVisible = useIsVisible(imageRef);
  const textVisible = useIsVisible(textRef);

  return (
    <section className={`max-w-8xl mx-auto px-6 lg:px-50 py-40 ${bgClassName}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Image */}
        <div
          ref={imageRef}
          style={{
            transform: getTransform(
              imageVisible,
              reverse ? "right" : "left"
            ),
            transitionDelay: "0ms",
          }}
          className={`
            relative w-full h-[260px] sm:h-[320px] lg:h-[400px]
            transition-all duration-700 ease-out
            ${imageVisible ? "opacity-100" : "opacity-0"}
            ${reverse ? "lg:order-2" : ""}
          `}
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
          style={{
            transform: getTransform(textVisible, "up"),
            transitionDelay: "150ms",
          }}
          className={`
            transition-all duration-700 ease-out
            ${textVisible ? "opacity-100" : "opacity-0"}
            ${reverse ? "lg:order-1" : ""}
          `}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            {title}
          </h2>
          <p className="text-base lg:text-lg text-black/80 leading-relaxed">
            {body}
          </p>
        </div>

      </div>
    </section>
  );
}
