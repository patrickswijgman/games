import { posX, posY } from "@/data";
import { delta, getDistance } from "snuggy";

export function seek(i: number, x: number, y: number, speed: number) {
  const dx = x - posX[i];
  const dy = y - posY[i];
  const d = getDistance(0, 0, dx, dy);

  if (d) {
    const vx = (dx / d) * speed;
    const vy = (dy / d) * speed;
    const v = getDistance(0, 0, vx, vy);

    if (v) {
      posX[i] += vx * delta;
      posY[i] += vy * delta;
      return v;
    }
  }

  return 0;
}
