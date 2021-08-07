'use strict';

class Game{
  constructor() {
    this.score = 0
    this.rolls = 0
    this.pins = 0
  }

  hit(pins) {
    this.score += pins
    this.rolls += 1

    if (this.pins === 10) {
      return this.rollsReset
    }
  }

  rollsReset() {
    return this.rolls = 0
  };

  totalScore() {
    return this.score
  }

  // isStrike() {
  //   if (this.pins === 10) {
  //     return this.rolls = 0;
  //   }
  // }
};
