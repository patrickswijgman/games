import { active, destroyed, isActive, zeroDestroyed } from "@/data.ts";

export function addEntity(i: number) {
  active.push(i);
}

export function destroyEntity(i: number) {
  if (isActive[i]) {
    isActive[i] = 0;
    destroyed.push(i);
  }
}

export function cleanupDestroyedEntities() {
  if (!destroyed.length) {
    return;
  }

  for (const index of destroyed) {
    const lastIndex = active.length - 1;

    if (index !== lastIndex) {
      active[index] = active[lastIndex];
    }

    active.pop();
  }

  zeroDestroyed();
}
