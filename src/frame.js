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
    return this.scores[0] === 10 && this.frameLength() < 3
  }

  isSpare() {
    const scoreCheck = this.scores[0] + this.scores[1] === 10
    return this.frameLength() === 2 && scoreCheck
  }

  frameLength() {
    return this.scores.length;
  }

}