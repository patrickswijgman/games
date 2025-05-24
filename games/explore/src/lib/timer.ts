import { time } from "snuggy";

export function tick(i: number, timer: Uint32Array, duration: number) {
  if (timer[i] >= duration) {
    return false;
  }

  timer[i] += time;

  return timer[i] >= duration;
}
