import { addAnimationTransform } from "@/lib/animation";
import { setState, State } from "@/lib/state";
import { SHADOW_ALPHA, Texture } from "@/consts.ts";
import { newEntity, setEntityTransform, Type } from "@/lib/entity.ts";
import { drawSprite, setAlpha } from "snuggy";
import { addEntity } from "@/lib/game.ts";

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
