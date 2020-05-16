'use strict';

class FrameFactory {
  constructor(frameClass, rollClass) {
    this.frameClass = frameClass
    this.rollClass = rollClass
  }

  instance() {
    return new this.frameClass(new this.rollClass(-1), new this.rollClass(-1))
  }
}