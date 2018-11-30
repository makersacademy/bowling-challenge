"use strict"

function Scorecard() {
  this._scoresList = [];
  this.currentFrame = 1;
  this.currentRoll = 1;
}
Scorecard.prototype.recordScore = function (score) {
  if(this._scoresList[this.currentFrame] === undefined) {
    this._scoresList[this.currentFrame] = [];
  }
  this._scoresList[this.currentFrame][this.currentRoll] = score;
  if(this.currentRoll === 2 || score === 10) {
    this.currentRoll = 1;
    this.currentFrame ++;
  } else {
    this.currentRoll ++;
  }
};
Scorecard.prototype.readScores = function (frame, roll) {
  return this._scoresList[frame][roll];
};
