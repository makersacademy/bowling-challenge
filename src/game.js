'use strict';

class Game {
  constructor(frameFactory) {
    this.frames = [frameFactory.instance()];
    this.currentFrameIndex = 0;
  }

  getCurrentFrame() {
    return this.frames[this.currentFrameIndex];
  }

  nextFrame() {
    this.currentFrameIndex += 1;
    this.frames.push(frameFactory.instance());
  }

  getCurrentRoll() {
    return this.getCurrentFrame().getCurrentRoll();
  }

  update() {
    if(!this.getCurrentFrame().finished()) {
      this.getCurrentFrame().nextRoll();
    } else {
      this.nextFrame();
    }
  }
}