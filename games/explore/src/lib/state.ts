import { state, stateNext, stateTime } from "@/data";
import { Anim, setAnimation } from "@/lib/anim";

export const enum State {
  NONE,
  PLAYER,
}

export function setState(i: number, s: State) {
  stateNext[i] = s;
}

export function transitionState(i: number) {
  state[i] = stateNext[i];
  stateTime[i] = 0;
  setAnimation(i, Anim.NONE);
}
