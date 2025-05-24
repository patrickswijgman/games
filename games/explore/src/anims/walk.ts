import { animTime, animY } from "@/data.ts";
import { tick } from "@/lib/timer.ts";
import { ease } from "snuggy";

export function updateWalkAnimation(i: number) {
  tick(i, animTime, Infinity);
  animY[i] = -1 * ease(animTime[i] / 100);
}
