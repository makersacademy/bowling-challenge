'use strict'

class FinalFrame {

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

  getScore()  {
    return this.score
  }

  isThirdBowlAllowed() {
    return this.firstBowl() === 10 || this.firstBowl() + this.secondBowl() === 10;
  }

  isComplete() {
    if(this.isThirdBowlAllowed() === true && this.frame.length === 3 ||
    this.isThirdBowlAllowed() === false && this.frame.length === 2) {
      return true
    }
    return false
  }

}
