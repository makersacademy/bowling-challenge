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
    this.spareCheck(num);
    this.strikeCheckOne(num);
    this.strikeCheckTwo(num);
  }

  spareCheck(num) {
    let i = this.frameNum;
    if (this.frameCheck() > 1 && this.gameFrames[i-1].spare()) {
      this.gameFrames[i-1].add(num);
    }
  }

  strikeCheckOne(num) {
    let i = this.frameNum;
    if (this.frameCheck() > 1 && this.gameFrames[i-1].strike()) {
      this.gameFrames[i-1].add(num);
    }
  }

  strikeCheckTwo(num) {
    let i = this.frameNum;
    if (this.frameCheck() > 2 && this.gameFrames[i-2].strike()) {
      this.gameFrames[i-2].add(num);
    }
  }

  frameCheck() {
    return this.gameFrames.length
  } 
}
