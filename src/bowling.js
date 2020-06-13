'use strict';

class Bowling {
  constructor() {
    this.gameFrames = [];
    this.frameNum = 0;
  };

  nextFrame() {
    this.frameNum ++;
  };

  addFrame(frame = new Frame()) {
    this.gameFrames.push(frame);
  }

  add(num) {
    let i = this.frameNum
    this.gameFrames[i].add(num)
  }
}
