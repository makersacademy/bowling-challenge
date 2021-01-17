'use strict';

class Scorecard {
  constructor() {
    this.frames = [];
    this.currentFrame = [];
  }

  getFrames() {
    return this.frames;
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  roll(pins) {
    this.currentFrame.push(pins)
    if (this.currentFrame.length == 1) {
      return;
    }
    this.frames.push(this.currentFrame)
    this.currentFrame = []
  }
};
