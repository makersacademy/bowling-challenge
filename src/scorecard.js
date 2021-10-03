'use strict';

class Scorecard{
  constructor(frame = new Frame()) {
    this.frames = [frame];
    this.frameNum = 0;
  }

  addPins(num) {
    if (this.frames[this.frameNum].isComplete()) {
      console.log('check');
      this.moveToNextFrame();
      this.createFrame();
    }
    this.frames[this.frameNum].storePins(num);
  }

  moveToNextFrame() {
    this.frameNum ++;
  }

  createFrame(frame = new Frame()) {
    this.frames.push(frame);
  }
};