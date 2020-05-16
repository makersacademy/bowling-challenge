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
    // if this is finished, spare, or strike
    if(this.rolls[0].getScore() >= 0 && this.rolls[1].getScore() >= 0) {
      return true;
    } else if(this.rolls[0].getScore() >= 10) {
      return true;
    } else {
      return false;
    }
  }

  rollReportText() {
    if(this.currentRollIndex == 0) {
      if(this.getCurrentRoll().getScore() == 10) {
        return 'X';
      }
    }
    if(this.currentRollIndex == 1) {
      if(this.getCurrentRoll().getScore() + this.rolls[0].getScore() == 10) {
        return '/';
      }
    }
  }

  basicTotalScore() {
    return this.rolls[0].getScore() + this.rolls[1].getScore();
  }

  setFinishState(finishState) {
    this.finishState = finishState;
  }

  calculateFinishState() {
    if(this._checkForFinished) return this.finishStates.finished;
  }

  _checkForFinished() {
    if(this.rolls[0].isScored() && this.rolls[1].isScored()) return true;
  }
}