'use strict';

class CalculateScore {

  constructor() {
    this._score = 0;
    this._frames = []
  }

  addFrame(frameArr) {
    this._frames.push(frameArr)
  }

  total() {
    this._frames.forEach(frame => {
      frame.reduce((a, b) => this._score += a + b)
    })
  }

}