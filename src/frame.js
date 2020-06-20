'use strict';
class Frame {
  constructor() {
    this.scores = [];
    this.frameScore = 0;
  }

  add(num) {
    this.scores.push(num);
    this.frameScore += num;
  }

  total() {
    return this.frameScore
  }

  isStrike() {
    if (this.scores[0] === 10 && this.frameLength() < 3) {
      return true;
    };
  }

  isSpare() {
    const scoreCheck = this.scores[0] + this.scores[1] === 10
    if (this.frameLength() === 2 && scoreCheck) {
      return true;
    } else {
      return false;
    }
  }

  frameLength() {
    return this.scores.length;
  }

}