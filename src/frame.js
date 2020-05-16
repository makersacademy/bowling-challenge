'use strict';

class Frame {
  constructor(finishStates, roll1, roll2, frame1, frame2) {
    this.rolls = [roll1, roll2];
    this.currentRollIndex = 0;
    this.finishStates = finishStates;
    this.finishState = this.finishStates().unfinished;
    this.isBonus = false;
    this.adjacentFrames = [frame1, frame2];
  }

  getCurrentRoll() {
    return this.rolls[this.currentRollIndex];
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
    if(this.getFinishState() == this.finishStates().strike) return { firstRoll: 'X', secondRoll: ''};
    if(this.getFinishState() == this.finishStates().spare) return { firstRoll: this.rolls[0].getScore(), secondRoll: '/'};
    return { firstRoll: this.rolls[0].getScore(), secondRoll: this.rolls[1].getScore() }
  }

  basicTotalScore() {
    return this.rolls[0].getScore() + this.rolls[1].getScore();
  }

  totalScore() {
    if(this.getFinishState() == this.finishStates().finished) return this.basicTotalScore();
    if(this.getFinishState() == this.finishStates().spare) {
      return this.basicTotalScore() + this.adjacentFrames[0].rolls[0].getScore();
    }
  }

  reportTotalScore() {
    if(!this.finished()) return '';
    return this.totalScore();
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
    if(this._checkForStrike()) return this.finishStates().strike;
    if(this._checkForSpare()) return this.finishStates().spare;
    if(this._checkForFinished()) return this.finishStates().finished;
    return this.finishStates().unfinished;
  }
}