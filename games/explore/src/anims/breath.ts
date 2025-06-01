import { animTime, animScaleX, animScaleY } from "@/data";
import { tick } from "@/lib/timer";
import { ease } from "snuggy";

export function updateBreathAnimation(i: number) {
  tick(i, animTime, Number.POSITIVE_INFINITY);
  animScaleX[i] = 1 + 0.1 * ease(animTime[i] / 2000);
  animScaleY[i] = 1 + 0.1 * ease(animTime[i] / 2000);
}
