import { anim, animScaleX, animScaleY, animTime, animX, animY } from "@/data";
import { scaleTransform, translateTransform } from "snuggy";

export const enum Anim {
  NONE,
  BREATH,
  WALK,
}

export function setAnimation(i: number, a: Anim) {
  if (a !== anim[i]) {
    anim[i] = a;
    animX[i] = 0;
    animY[i] = 0;
    animScaleX[i] = 1;
    animScaleY[i] = 1;
    animTime[i] = 0;
  }
}

export function addAnimationTransform(i: number) {
  if (anim[i]) {
    translateTransform(animX[i], animY[i]);
    scaleTransform(animScaleX[i], animScaleY[i]);
  }
}
