/*jshint esversion: 6 */
'use strict';

class CalculateScore {

  #maxPins = 10;

  constructor() {
    this._score = 0;
    this._frames = [];
  }

  addFrame(frameArr) {
    this._frames.push(frameArr);
  }

  total() {
    let currentFrame = 0;

    this._frames.forEach((frame, index, frames) => {

      if (this.#strike(frame)) {
        if (currentFrame <= 7) {
          this.#addSumToScore(frames[index].concat(frames[index + 1][0], frames[index + 2][0]));
        } else if (currentFrame === 8) {
          this.#addSumToScore(frames[index].concat(frames[index + 1][0], frames[index + 1][1]));
        } else {
          this.#addSumToScore(frame);
        }
      } else if (this.#spare(frame)) {
        if (currentFrame <= 8) {
          this.#addSumToScore(frames[index].concat(frames[index + 1][0]));
        } else {
          this.#addSumToScore(frame);
        }
      } else {
        this.#addSumToScore(frame);
      }
      currentFrame += 1;
    });
    currentFrame = 0;
  }

  #strike(frame) {
    return frame[0] === this.#maxPins;
  }

  #spare(frame) {
    return (frame[0] + frame[1]) === this.#maxPins;
  }

  #addSumToScore(array) {
    this._score += array.reduce((a, b) => a + b);
  }

}