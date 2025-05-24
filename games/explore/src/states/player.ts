import { Input } from "@/consts.ts";
import { seek } from "@/lib/steering.ts";
import { Anim, setAnimation } from "@/lib/animation";
import { isInputDown, updateCamera } from "snuggy";
import { isFlipped, posX, posY } from "@/data.ts";

export function updatePlayerState(i: number) {
  let x = posX[i];
  let y = posY[i];

  if (isInputDown(Input.UP)) {
    y -= 1;
  }
  if (isInputDown(Input.DOWN)) {
    y += 1;
  }
  if (isInputDown(Input.LEFT)) {
    x -= 1;
    isFlipped[i] = 1;
  }
  if (isInputDown(Input.RIGHT)) {
    x += 1;
    isFlipped[i] = 0;
  }

  if (seek(i, x, y, 0.75)) {
    setAnimation(i, Anim.WALK);
  } else {
    setAnimation(i, Anim.BREATH);
  }

  updateCamera(x, y);
}
