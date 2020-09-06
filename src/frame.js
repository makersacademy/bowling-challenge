'use strict'

class Frame {

  constructor() {
    this.frame = []
  }

  bowl(score) {
    this.frame.push(score);
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

  isASpare()  {
    return this.frame.length === 2 && (this.firstBowl() + this.secondBowl() === 10)
  }

  score() {
    if(this.isAStrike() === true) {
      return 10;
    } else  {
      return this.firstBowl() + this.secondBowl();
    }
  }
}
