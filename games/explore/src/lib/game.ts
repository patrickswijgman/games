import { destroyed, entities, isActive, posY, zeroDestroyed } from "@/data";

export function addEntity(i: number) {
  entities.push(i);
}

export function destroyEntity(i: number) {
  if (isActive[i]) {
    isActive[i] = 0;
    destroyed.push(i);
  }
}

export function sortEntities() {
  entities.sort(sortEntitiesOnDepth);
}

function sortEntitiesOnDepth(a: number, b: number) {
  return posY[a] - posY[b];
}

export function cleanupDestroyedEntities() {
  if (!destroyed.length) {
    return;
  }

  for (const index of destroyed) {
    const lastIndex = entities.length - 1;

    if (index !== lastIndex) {
      entities[index] = entities[lastIndex];
    }

    entities.pop();
  }

  zeroDestroyed();
}
