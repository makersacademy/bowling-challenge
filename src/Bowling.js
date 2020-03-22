'use strict'

class Scoreboard {

  constructor(round, roll1, roll2) {
    this.INITIAL_SCORE = 0;
    this.score = this.INITIAL_SCORE;
    this.round = round;
    this.roll1 = roll1; // pins from 1st roll
    this.roll2 = roll2; // pins from 2nd roll

  }

  totalScore() {
    return this.score;
  }

}
