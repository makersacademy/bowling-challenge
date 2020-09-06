'use strict'

class Frame {

  constructor() {
    this.frame = [];
    this.score = 0;
  }

  bowl(score) {
    this.frame.push(score);
    this.score += score;
  }

  firstBowl() {
    return this.frame[0];
  }

  secondBowl() {
    return this.frame[1];
  }

  isComplete() {
    return this.frame.length === 2 || this.isAStrike();
  }

  isAStrike() {
    return this.firstBowl() === 10;
  }

  isASpare() {
    return this.frame.length === 2 && (this.firstBowl() + this.secondBowl() === 10)
  }

  getScore() {
    return this.score
  }

}
