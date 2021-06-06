'use strict';

class Bowling {
  constructor() {
    this.currentRound = 1;
    this.currentBall = 1;
    this.scorecard = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-', '-']];
    this.isGameOver = false;
    this.totalScore = 0;
    this.isStrikeBonus = false;
    this.strikeBonusAmount = 0;
    this.bonusThrows = 0;
    this.strikeBonusRound = 0
  }

  getCurrentRound() {
    return this.currentRound
  }

  getCurrentBall() {
    return this.currentBall
  }

  inputPins(current_pins) {
    let last_pins = this.scorecard[this.currentRound - 1][this.currentBall - 2];

    // Scorecard full error message
    if (this.isGameOver === true) {
      throw new Error('You have no more throws!')
    }

    // Invalid pin input
    if ((this.currentRound !== 10) && (current_pins > 10 || this.scorecard[this.currentRound - 1][this.currentBall - 2] + current_pins >= 10)) {
      throw new Error('Invalid input. Please check your pins.')
    }

    // Strike Bonus
    if (this.isStrikeBonus) {
      this.bonusThrows -= 1
      this.strikeBonusAmount += current_pins
      if (this.bonusThrows === 0) {
        this.scorecard[this.strikeBonusRound - 1][this.scorecard[this.strikeBonusRound - 1].length - 1] = (this.strikeBonusAmount + 10)
      }
    }

    // Adds the score to total score if no strike no spare
    if ((last_pins + current_pins) < 10) {
      this.totalScore += (last_pins + current_pins)
      this.scorecard[this.currentRound - 1][this.scorecard[this.currentRound - 1].length - 1] = this.totalScore
    }
    
    this.scorecard[this.currentRound - 1][this.currentBall - 1] = current_pins;
    this.currentBall += 1;
    
    // Reset round
    if (this.currentBall === 3 && this.currentRound < 10) {
      this.currentBall = 1;
      this.currentRound += 1;
    }

    // Game over if three balls in the 10th round
    if (this.currentBall === 4) {
      this.scorecard[9][3] = (this.scorecard[9][2] + this.scorecard[9][1] + this.scorecard[9][0] + this.scorecard[8][2])
      this.isGameOver = true;
    }

    // Game over if two balls no strike or spare in 10th round
    if (this.currentRound === 10 && this.currentBall === 3
      && ((last_pins + current_pins) < 10)) {
        this.isGameOver = true;
    }

    // Strike
    if (current_pins === 10 && this.currentBall === 2 && this.currentRound < 10) {
      this.strikeBonusRound = this.currentRound;
      this.isStrikeBonus = true;
      this.bonusThrows = 2;
      this.currentBall = 1;
      this.currentRound += 1;
    }

    
  }

  showScorecard() {
    return this.scorecard
  }
}