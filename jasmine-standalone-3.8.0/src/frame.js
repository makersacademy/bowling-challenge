'use strict';

class Frame {
  constructor() {
    this.currentFrame = 1
  }

  increment() {
    this.currentFrame += 1;
  }

  endOfFrame() {
    this.increment();
  }

  isFinalFrame() {
    return (this.currentFrame >= 11);
  }
}