"use strict";

class Game {
  constructor() {
    this.frame = [];
    this.gameFrames = [];
    this.finalScore = 0;
    this.round = 1;
    this.spareBonus = false;
  }

  roll(score) {
    this._addRoll(score);
    this._isSpare();
    if (this.frame.length == 2) {
      this.addFrame();
      this.round++;
    }
  }

  addFrame() {
    this.gameFrames.push(this.frame);
    this.frame = [];
  }

  calculateScore() {
    for (let index = 0; index < this.gameFrames.length; index++) {
      const element = this.gameFrames[index];
      this.finalScore += this._sumArray(element);
    }
  }

  _sumArray(arr) {
    return arr.reduce(function (a, b) {
      return a + b;
    }, 0);
  }

  _addRoll(score) {
    if (score <= 10 && score >= 0) {
      this.frame.push(score);
    }
  }

  _isSpare() {
    if (this._sumArray(this.frame) === 10) {
      this.spareBonus = true;
    } else {
      this.spareBonus = false;
    }
  }
}
