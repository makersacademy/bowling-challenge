'use strict';

class Bowling {
  constructor() {
    this.currentRound = 1;
    this.currentBall = 1;
    this.scorecard = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null, null]]
    this.game_over = false;
  }

  getCurrentRound() {
    return this.currentRound
  }

  getCurrentBall() {
    return this.currentBall
  }

  inputPins(pins) {
    if (this.game_over === true) {
      throw new Error('You have no more throws!')
    }
    if ((this.currentRound !== 10) && (pins > 10 || this.scorecard[this.currentRound - 1][this.currentBall - 2] + pins >= 10)) {
      throw new Error('Invalid input. Please check your pins.')
    }

    if (this.currentRound === 10 && this.currentBall === 3
      && (this.scorecard[this.currentRound - 1][this.currentBall - 3] + pins < 10)) {
        this.game_over = true;
      }

    this.scorecard[this.currentRound - 1][this.currentBall - 1] = pins;
    this.currentBall += 1;
    if (this.currentBall === 3 && this.currentRound < 10) {
      this.currentBall = 1;
      this.currentRound += 1;
    }
  }

  showScorecard() {
    return this.scorecard
  }
}