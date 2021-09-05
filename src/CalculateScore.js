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
    let currentFrame = 0;
    this._frames.forEach((frame, index, frames) => {
      if (this.#spare(frame)) {
        if (currentFrame <= 8) {
          let arr = frames[index].concat(frames[index + 1][0]);
          this._score += arr.reduce((a, b) =>   a + b );
        } else {
          this._score += frame.reduce((a, b) => a + b );
        }
      } else {
        frame.reduce((a, b) => { this._score += a + b })
      }
      currentFrame += 1;
    })
    currentFrame = 0;
  }  

  #spare(frame) {
    return (frame[0] + frame[1]) === 10;
  }
}