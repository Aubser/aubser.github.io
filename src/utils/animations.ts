export type Direction = "left" | "right" | "up" | "down";

export interface TransformOptions {
  distance?: number;
}

export function getTransform(
  isVisible: boolean,
  direction: Direction,
  distance = 24
): string {
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