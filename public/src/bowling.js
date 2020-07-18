//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class BowlingGame {
  constructor() {
    this.currScore = 0;
    this.frame = 1;
    this.rollNumber = 1;
    this.pinsRemaining = 10;
    this.strike1 = 0;
    this.strike2 = 0;
    this.spare = 0;
    this.complete = false;
    this.currRoll = -1;
    this.lastFrameMark = false;
  }

  handleCarryOvers() {
    if (this.strike1 > 0) {
      this.currScore += this.currRoll;
      this.strike1--;
    }
    if (this.strike2 > 0) {
      this.currScore += this.currRoll;
      this.strike2--;
    }
    if (this.spare > 0) {
      this.currScore += this.currRoll;
      this.spare--;
    }
  }

  updateScore() {
    this.handleCarryOvers();
    if (this.frame !== 10) {
      this.currScore += this.currRoll;
    } else if (this.rollNumber === 1 || (this.rollNumber === 2 && !this.lastFrameMark)) {
      this.currScore += this.currRoll;
    }
  }

  handleStrike() {
    if (this.currRoll === 10 && !this.lastFrameMark) {
      if (this.strike1 > 0) this.strike2 = 2;
      else this.strike1 = 2;
      if (this.frame === 10) this.lastFrameMark = true;
    }
  }

  handleSpare() {
    if (this.currRoll === this.pinsRemaining && this.currRoll !== 10) {
      this.spare = 1;
    }
  }

  updateGameState() {
    this.handleStrike();
    this.handleSpare();
    if (this.frame !== 10) {
      if (this.rollNumber === 2 || this.currRoll === 10) {
        this.rollNumber = 1;
        this.frame++;
        this.pinsRemaining = 10;
      } else {
        this.pinsRemaining -= this.currRoll;
        this.rollNumber = 2;
      }
    } else if (this.rollNumber === 1) { // 10th frame
      if (this.currRoll === 10) {
        this.pinsRemaining = 10;
      } else {
        this.pinsRemaining -= this.currRoll;
      }
      this.rollNumber = 2;
    } else if (this.rollNumber === 2) { // 10th frame
      if (this.currRoll === this.pinsRemaining) {
        this.pinsRemaining = 10;
        this.rollNumber = 3;
      } else if (this.lastFrameMark) {
        this.pinsRemaining -= this.currRoll;
        this.rollNumber = 3;
      } else {
        this.complete = true;
      }
    } else { // frame 10, roll 3
      this.complete = true;
    }
  }

  roll(pins) {
    if ((isNaN(pins)) || (pins == "")) throw new Error('Please enter a roll between 0 and ' + this.pinsRemaining);
    pins = parseInt(pins);    
    if (pins < 0) throw new Error('Negative roll is invalid');
    if (pins > this.pinsRemaining) throw new Error('Pin count exceeds pins on the lane');
    if (this.complete) throw new Error('Cannot roll after game is over');
    this.currRoll = pins;
    this.updateScore();
    this.updateGameState();
  }

  score() {
    if (!this.complete) throw new Error('Score cannot be taken until the end of the game');
    return this.currScore;
  }
}