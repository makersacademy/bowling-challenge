'use strict';

class Scorecard{
  constructor() {
    this.game = [];
    this.frameNum = 0;
  }

  moveToNextFrame() {
    this.frameNum ++;
  }
};