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
    this.getCurrentFrame().updateFinishState();
    if(!this.getCurrentFrame().finished()) {
      this.getCurrentFrame().nextRoll();
    } else {
      this.nextFrame();
    }
  }

  setUpAdjacencies() {
    this.frames[0].initializeAdjacentFrameManager(this.frames[1], this.frames[2]);
  }
}