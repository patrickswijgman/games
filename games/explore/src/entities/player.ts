import { SHADOW_ALPHA, Texture } from "@/consts";
import { addAnimationTransform } from "@/lib/anim";
import { Type, newEntity, setEntityTransform } from "@/lib/entity";
import { addEntity } from "@/lib/game";
import { State, setState } from "@/lib/state";
import { drawSprite, setAlpha } from "snuggy";

export function addPlayer(x: number, y: number) {
  const i = newEntity(Type.PLAYER, x, y);
  setState(i, State.PLAYER);
  addEntity(i);
  return i;
}

export function renderPlayer(i: number) {
  setEntityTransform(i, true);
  setAlpha(SHADOW_ALPHA);
  drawSprite(Texture.ATLAS, 0, 32, 16, 16, 8, 13);
  setAlpha(1);
  addAnimationTransform(i);
  drawSprite(Texture.ATLAS, 0, 16, 16, 16, 8, 15);
}
