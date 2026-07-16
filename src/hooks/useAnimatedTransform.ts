import { useInView } from "react-intersection-observer";
import { getTransform, Direction } from "@/utils/animations";

interface UseAnimatedTransformProps {
  direction?: Direction;
  distance?: number;
  threshold?: number;   
} 

export function useAnimatedTransform({
  direction = "up",
  distance = 24,
  threshold = 0.2,
}: UseAnimatedTransformProps = {}) {
  const { ref, inView } = useInView({ threshold, triggerOnce: false });

  const transform = getTransform(inView, direction, distance);

  const style = {
    transform,
    opacity: inView ? 1 : 0,
    transition: "transform 0.6s ease, opacity 0.6s ease",
  };

  return { ref, style, inView };
}