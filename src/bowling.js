'use strict';

class Bowling {
  constructor() {
    this.currentRound = 1;
    this.currentBall = 1;
    this.scorecard = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-', '-']]
    this.gameOver = false;
    this.totalScore = 0
  }

  getCurrentRound() {
    return this.currentRound
  }

  getCurrentBall() {
    return this.currentBall
  }

  inputPins(current_pins) {
    let last_pins = this.scorecard[this.currentRound - 1][this.currentBall - 2];

    if (this.gameOver === true) {
      throw new Error('You have no more throws!')
    }
    if ((this.currentRound !== 10) && (current_pins > 10 || this.scorecard[this.currentRound - 1][this.currentBall - 2] + current_pins >= 10)) {
      throw new Error('Invalid input. Please check your pins.')
    }

    if ((last_pins + current_pins) < 10) {
      this.totalScore += (last_pins + current_pins)
      this.scorecard[this.currentRound - 1][this.scorecard[this.currentRound - 1].length - 1] = this.totalScore
    }
    
    this.scorecard[this.currentRound - 1][this.currentBall - 1] = current_pins;
    this.currentBall += 1;
    
    if (this.currentBall === 3 && this.currentRound < 10) {
      this.currentBall = 1;
      this.currentRound += 1;
    }

    if (this.currentBall === 4) {
      this.gameOver = true;
    }

    if (this.currentRound === 10 && this.currentBall === 3
      && ((last_pins + current_pins) < 10)) {
        this.gameOver = true;
    }

    
  }

  showScorecard() {
    return this.scorecard
  }
}