import { animTime, animScaleX, animScaleY } from "@/data.ts";
import { tick } from "@/lib/timer.ts";
import { ease } from "snuggy";

export function updateBreathAnimation(i: number) {
  tick(i, animTime, Infinity);
  animScaleX[i] = 1 + 0.1 * ease(animTime[i] / 2000);
  animScaleY[i] = 1 + 0.1 * ease(animTime[i] / 2000);
}
