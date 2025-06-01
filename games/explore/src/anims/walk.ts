import { animTime, animY } from "@/data";
import { tick } from "@/lib/timer";
import { ease } from "snuggy";

export function updateWalkAnimation(i: number) {
  tick(i, animTime, Number.POSITIVE_INFINITY);
  animY[i] = -1 * ease(animTime[i] / 100);
}
