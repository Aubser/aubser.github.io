"use client";

import { ReactNode, useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

type Direction = "up" | "down" | "left" | "right";

interface FadeInBlockProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  distance?: number;
  direction?: Direction;
}

export default function FadeInBlock({
  children,
  className = "",
  delayMs = 0,
  distance = 24,
  direction = "up",
}: FadeInBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0)";

    switch (direction) {
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "up":
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transform: getTransform(),
        transitionDelay: `${delayMs}ms`,
      }}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
