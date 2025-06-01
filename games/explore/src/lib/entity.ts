import { MAX_ENTITY_COUNT, animScaleX, animScaleY, isActive, isFlipped, posX, posY, type, zeroEntity } from "@/data";
import { addCameraTransform, resetTransform, scaleTransform, translateTransform } from "snuggy";

export const enum Type {
  PLAYER,
}

export function newEntity(t: Type, x: number, y: number) {
  const i = nextEntity();
  zeroEntity(i);
  type[i] = t;
  posX[i] = x;
  posY[i] = y;
  animScaleX[i] = 1;
  animScaleY[i] = 1;
  isActive[i] = 1;
  return i;
}

function nextEntity() {
  for (let i = 0; i < MAX_ENTITY_COUNT; i++) {
    if (isActive[i] === 0) {
      return i;
    }
  }

  throw new Error("Out of entities :(");
}

export function setEntityTransform(i: number, inWorld: boolean) {
  resetTransform();
  if (inWorld) {
    addCameraTransform();
  }
  translateTransform(posX[i], posY[i]);
  if (isFlipped[i]) {
    scaleTransform(-1, 1);
  }
}
