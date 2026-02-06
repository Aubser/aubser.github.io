'use client';
import { useState, useRef, useEffect, RefObject } from 'react';

/**
 * Hook to track hover state on an element.
 * Returns [ref, isHovered]
 */
export default function useHover<T extends HTMLElement>(): [RefObject<T | null>, boolean] {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T | null>(null); // note the T | null

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);

  return [ref, isHovered];
}
