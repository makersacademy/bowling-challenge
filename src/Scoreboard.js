'use strict';

function Scoreboard () {
  this.frames = [];
  this._currentScore = 0;
}

Scoreboard.prototype.nextFrame = function () {
  this.frames.push({roll1: null, roll2: null});
};

Scoreboard.prototype.saveFirstRoll = function (hits) {
  this.frames[this.frames.length-1].roll1 = hits;
};

Scoreboard.prototype.saveSecondRoll = function (hits) {
  if (this.frames.length === 0 || this.frames[this.frames.length-1].roll1 === null) {
    throw new Error('Must roll first ball silly');
  }
  this.frames[this.frames.length-1].roll2 = hits;
  this.calculateScore();
};

Scoreboard.prototype.calculateScore = function () {
  var thisFrame = this.frames[this.frames.length-1];
  this._currentScore += (thisFrame.roll1 + thisFrame.roll2);
};

Scoreboard.prototype.getCurrentScore = function () {
  return this._currentScore;
};
