import { Texture } from "@/consts";
import { getTexture, loadRenderTexture } from "snuggy";

export function loadFloorTexture() {
  const size = 2048;
  loadRenderTexture(Texture.FLOOR, size, size, (ctx) => {
    for (let x = 0; x < size; x += 16) {
      for (let y = 0; y < size; y += 16) {
        ctx.drawImage(getTexture(Texture.ATLAS), 0, 112, 16, 16, x, y, 16, 16);
      }
    }
  });
}

export function loadOutlineTexture(id: string, refId: string, color: string) {
  const ref = getTexture(refId);
  loadRenderTexture(id, ref.width, ref.height, (ctx) => {
    ctx.drawImage(ref, 0, -1);
    ctx.drawImage(ref, 1, 0);
    ctx.drawImage(ref, 0, 1);
    ctx.drawImage(ref, -1, 0);
    ctx.globalCompositeOperation = "source-in";
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, ref.width, ref.height);
    ctx.globalCompositeOperation = "destination-out";
    ctx.drawImage(ref, 0, 0);
  });
}
