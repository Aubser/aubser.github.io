import { useEffect, useState, RefObject } from "react";

export function useIsVisible<T extends Element>(
  ref: RefObject<T | null>,
  options: IntersectionObserverInit = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  }
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
}
