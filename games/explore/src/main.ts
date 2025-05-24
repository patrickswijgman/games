import { updateBreathAnimation } from "@/anims/breath.ts";
import { updateWalkAnimation } from "@/anims/walk.ts";
import { Color, Font, Texture } from "@/consts.ts";
import { addPlayer, renderPlayer } from "@/entities/player.ts";
import { updatePlayerState } from "@/states/player.ts";
import { drawText, fps, loadFont, loadTexture, resetTransform, run, scaleTransform, setAlpha, setCameraPosition, setCameraSmoothing, setFont, translateTransform } from "snuggy";
import { active, anim, isActive, state, stateNext, type } from "@/data.ts";
import { State, transitionState } from "@/lib/state.ts";
import { Anim } from "@/lib/animation.ts";
import { Type } from "@/lib/entity.ts";
import { cleanupDestroyedEntities } from "@/lib/game.ts";

async function setup() {
  await Promise.all([
    // Textures
    loadTexture(Texture.ATLAS, "textures/atlas.png"),

    // Fonts
    loadFont(Font.DEFAULT, "fonts/pixelmix.ttf", "Pixelmix", 8),

    // Sounds
  ]);

  addPlayer(20, 20);

  setCameraPosition(20, 20);
  setCameraSmoothing(0.1);
  setFont(Font.DEFAULT);
}

function update() {
  for (const i of active) {
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
