'use strict';

class Game {
  constructor(frameFactory) {
    this.frames = [];
    let i = 0;
    for(i = 0; i < 10; i++) {
      this.frames.push(frameFactory.instance());
    }
    this.currentFrameIndex = 0;
  }

  getCurrentFrame() {
    return this.frames[this.currentFrameIndex];
  }

  nextFrame() {
    this.currentFrameIndex += 1;
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