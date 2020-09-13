'use strict'

class FinalFrame {

  constructor() {
    this.frame = [];
    this.score = 0;
  }

  bowl(score) {
    if(this.isValidBowl(score)) {
      this.frame.push(score);
      this.score += score;
    }
  }

  isValidBowl(score) {
    if(this.frame.length === 1 && this.firstBowl() < 10) {
      return this.score + score <= 10;
    } else {
      return score >= 0 && score <= 10
    }
  }

  firstBowl() {
    return this.frame[0];
  }

  secondBowl() {
    return this.frame[1];
  }

  thirdBowl() {
    return this.frame[2];
  }

  getScore()  {
    return this.score
  }

  isThirdBowlAllowed() {
    return this.firstBowl() === 10 || this.firstBowl() + this.secondBowl() === 10;
  }

  isComplete() {
    return this.isThirdBowlAllowed() === true && this.frame.length === 3 ||
    this.isThirdBowlAllowed() === false && this.frame.length === 2
  }

}
