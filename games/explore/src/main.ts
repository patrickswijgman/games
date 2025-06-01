import { updateBreathAnimation } from "@/anims/breath";
import { updateWalkAnimation } from "@/anims/walk";
import { Color, Font, Texture } from "@/consts";
import { anim, entities, isActive, state, stateNext, type } from "@/data";
import { addPlayer, renderPlayer } from "@/entities/player";
import { Anim } from "@/lib/anim";
import { Type } from "@/lib/entity";
import { cleanupDestroyedEntities, sortEntities } from "@/lib/game";
import { State, transitionState } from "@/lib/state";
import { loadFloorTexture, loadOutlineTexture } from "@/lib/textures";
import { updatePlayerState } from "@/states/player";
import { addCameraTransform, drawText, drawTexture, fps, loadFont, loadTexture, resetTransform, run, scaleTransform, setAlpha, setCameraPosition, setCameraSmoothing, setFont, translateTransform } from "snuggy";

async function setup() {
  await Promise.all([
    // Textures
    loadTexture(Texture.ATLAS, "textures/atlas.png"),

    // Fonts
    loadFont(Font.DEFAULT, "fonts/pixelmix.ttf", "Pixelmix", 8),

    // Sounds
  ]);

  loadFloorTexture();
  loadOutlineTexture(Texture.ATLAS_OUTLINE, Texture.ATLAS, "white");

  const x = 1024;
  const y = 1024;

  addPlayer(x, y);

  setCameraPosition(x, y);
  setCameraSmoothing(0.1);
  setFont(Font.DEFAULT);
}

function update() {
  addCameraTransform();
  drawTexture(Texture.FLOOR, 0, 0);

  sortEntities();

  for (const i of entities) {
    if (!isActive[i]) {
      continue;
    }

    if (stateNext[i] !== state[i]) {
      transitionState(i);
    }

    switch (state[i]) {
      case State.PLAYER:
        updatePlayerState(i);
        break;
    }

    switch (anim[i]) {
      case Anim.BREATH:
        updateBreathAnimation(i);
        break;
      case Anim.WALK:
        updateWalkAnimation(i);
        break;
    }

    switch (type[i]) {
      case Type.PLAYER:
        renderPlayer(i);
        break;
    }
  }

  cleanupDestroyedEntities();

  resetTransform();
  translateTransform(1, 1);
  scaleTransform(0.25);
  setAlpha(0.5);
  drawText(fps.toString(), 0, 0, Color.TEXT, "left", "top");
  setAlpha(1);
}

run(320, setup, update);
