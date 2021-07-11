'use strict';

class Game{
  constructor() {
    this.score = 0
    this.rolls = 0
  }

  hit(pins) {
    this.score += pins
    this.rolls += 1

    if (this.pins === 10 && this.rolls === 2) {
      return;
    }

  }

  totalScore() {
    return this.score;
  }

};