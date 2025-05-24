/*
 * Generated with game-data-gen on 5/21/2025, 9:23:44 PM. DO NOT MODIFY THIS FILE!
 */

/*
 * --------------------------------------------------
 * Game (group)
 * --------------------------------------------------
 */

export const active = new Array<number>()
export const destroyed = new Array<number>()

/** Zero the active field within the Game group. */
export function zeroActive() {
  active.length = 0
}

/** Zero the destroyed field within the Game group. */
export function zeroDestroyed() {
  destroyed.length = 0
}

/** Zero all fields within the Game group. */
export function zeroGameData() {
  active.length = 0
  destroyed.length = 0
}

/*
 * --------------------------------------------------
 * Entity (Structure of Arrays)
 * --------------------------------------------------
 */

export const MAX_ENTITY_COUNT = 2048

export const type = new Uint8Array(2048)
export const posX = new Float32Array(2048)
export const posY = new Float32Array(2048)
export const state = new Uint8Array(2048)
export const stateNext = new Uint8Array(2048)
export const stateTime = new Uint32Array(2048)
export const anim = new Uint8Array(2048)
export const animX = new Float32Array(2048)
export const animY = new Float32Array(2048)
export const animScaleX = new Float32Array(2048)
export const animScaleY = new Float32Array(2048)
export const animTime = new Uint32Array(2048)
export const isActive = new Uint8Array(2048)
export const isFlipped = new Uint8Array(2048)

/** Zero an index within the Entity Structure of Arrays. */
export function zeroEntity(idx: number) {
  type[idx] = 0
  posX[idx] = 0
  posY[idx] = 0
  state[idx] = 0
  stateNext[idx] = 0
  stateTime[idx] = 0
  anim[idx] = 0
  animX[idx] = 0
  animY[idx] = 0
  animScaleX[idx] = 0
  animScaleY[idx] = 0
  animTime[idx] = 0
  isActive[idx] = 0
  isFlipped[idx] = 0
}

/** Zero the type field within the Entity Structure of Arrays. */
export function zeroType() {
  type.fill(0)
}

/** Zero the posX field within the Entity Structure of Arrays. */
export function zeroPosX() {
  posX.fill(0)
}

/** Zero the posY field within the Entity Structure of Arrays. */
export function zeroPosY() {
  posY.fill(0)
}

/** Zero the state field within the Entity Structure of Arrays. */
export function zeroState() {
  state.fill(0)
}

/** Zero the stateNext field within the Entity Structure of Arrays. */
export function zeroStateNext() {
  stateNext.fill(0)
}

/** Zero the stateTime field within the Entity Structure of Arrays. */
export function zeroStateTime() {
  stateTime.fill(0)
}

/** Zero the anim field within the Entity Structure of Arrays. */
export function zeroAnim() {
  anim.fill(0)
}

/** Zero the animX field within the Entity Structure of Arrays. */
export function zeroAnimX() {
  animX.fill(0)
}

/** Zero the animY field within the Entity Structure of Arrays. */
export function zeroAnimY() {
  animY.fill(0)
}

/** Zero the animScaleX field within the Entity Structure of Arrays. */
export function zeroAnimScaleX() {
  animScaleX.fill(0)
}

/** Zero the animScaleY field within the Entity Structure of Arrays. */
export function zeroAnimScaleY() {
  animScaleY.fill(0)
}

/** Zero the animTime field within the Entity Structure of Arrays. */
export function zeroAnimTime() {
  animTime.fill(0)
}

/** Zero the isActive field within the Entity Structure of Arrays. */
export function zeroIsActive() {
  isActive.fill(0)
}

/** Zero the isFlipped field within the Entity Structure of Arrays. */
export function zeroIsFlipped() {
  isFlipped.fill(0)
}

/** Zero all fields within the Entity Structure of Arrays. */
export function zeroEntityData() {
  type.fill(0)
  posX.fill(0)
  posY.fill(0)
  state.fill(0)
  stateNext.fill(0)
  stateTime.fill(0)
  anim.fill(0)
  animX.fill(0)
  animY.fill(0)
  animScaleX.fill(0)
  animScaleY.fill(0)
  animTime.fill(0)
  isActive.fill(0)
  isFlipped.fill(0)
}