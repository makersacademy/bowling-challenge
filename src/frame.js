'use strict';

class Frame {
  constructor(roll1, roll2) {
    this.rolls = [roll1, roll2];
    this.currentRollIndex = 0;
    this.finishStates = {
      unfinished: 0,
      finished: 1,
      spare: 2,
      strike: 3
    }
    this.finishState = this.finishStates.unfinished;
  }

  getCurrentRoll() {
    return this.rolls[this.currentRollIndex]
  }

  nextRoll() {
    this.currentRollIndex += 1;
  }

  setCurrentRollScore(score) {
    this.getCurrentRoll().setScore(score);
  }

  finished() {
    if(this.finishState > 0) return true;
    return false;
  }

  rollText() {
    if(this.getFinishState() == this.finishStates.strike) return { firstRoll: 'X', secondRoll: ''};
    if(this.getFinishState() == this.finishStates.spare) return { firstRoll: this.rolls[0].getScore(), secondRoll: '/'};
    return { firstRoll: this.rolls[0].getScore(), secondRoll: this.rolls[1].getScore() }
  }

  basicTotalScore() {
    return this.rolls[0].getScore() + this.rolls[1].getScore();
  }

  // finish state calculation
  getFinishState() {
    return this.finishState;
  }

  setFinishState(finishState) {
    this.finishState = finishState;
  }

  updateFinishState() {
    this.setFinishState(this._calculateFinishState());
  }

  _checkForFinished() {
    if(this.rolls[0].isScored() && this.rolls[1].isScored()) return true;
  }

  _checkForSpare() {
    if((this.rolls[0].getScore() + this.rolls[1].getScore()) == 10) return true;
  }

  _checkForStrike() {
    if(this.rolls[0].getScore() == 10) return true;
  }

  _calculateFinishState() {
    if(this._checkForStrike()) return this.finishStates.strike;
    if(this._checkForSpare()) return this.finishStates.spare;
    if(this._checkForFinished()) return this.finishStates.finished;
    return this.finishStates.unfinished;
  }
}