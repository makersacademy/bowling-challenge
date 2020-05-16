'use strict';

class Game {
  constructor(frameClass, rollClass) {
    this.frames = [new frameClass(new rollClass(-1), new rollClass(-1))];
    this.currentFrameIndex = 0;
  }

  getCurrentFrame() {
    return this.frames[this.currentFrameIndex];
  }

  nextFrame() {
    this.currentFrameIndex += 1;
  }

  update() {
    if(!this.getCurrentFrame().finished()) {
      this.getCurrentFrame().nextRoll();
    }
  }
}