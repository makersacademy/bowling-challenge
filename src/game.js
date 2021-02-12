"use strict";

const NUMBER_OF_FRAMES = 10;

class Game {

  constructor(frameClass = Frame, frameTenClass = FrameTen) {
    this._frameCounter = 0;
    this._frames = [];
    for(let i = 1; i <NUMBER_OF_FRAMES; i++) {
      this._frames.push(new frameClass());
    }
    this._frames.push(new frameTenClass());
  }

  bowl(score) {
    this.currentFrame().update(score);
  }

  currentFrame() {
    return this._frames[this._frameCounter]
  }

}