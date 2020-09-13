'use strict'

class Frame {

  constructor() {
    this.frame = [];
    this.score = 0;
    this.bonusesAdded = 0
  }

  bowl(score) {
    if(this.isValidBowl(score)) {
      this.frame.push(score);
      this.score += score;
    }
  }

  isValidBowl(score) {
    return score <= 10 && this.score + score <= 10;
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
    return this.frame.length === 2 && (this.score === 10);
  }

  isNeedingABonus() {
    return this.isASpare() && this.bonusesAdded !== 1 || this.isAStrike() && this.bonusesAdded !== 2;
  }

  getScore() {
    return this.score;
  }

  updateScore(amount) {
    this.score += amount;
    this.bonusesAdded ++
  }

}
