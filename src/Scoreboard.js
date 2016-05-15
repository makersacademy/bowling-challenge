'use strict';

function Scoreboard () {
  this.frames = [];
  this.calculator = new ScoreCalculator();
};

Scoreboard.prototype.nextFrame = function () {
  this.frames.push({roll1: null, roll2: null});
};

Scoreboard.prototype.saveFirstRoll = function (hits) {
  this.frames[this.frames.length-1].roll1 = hits;
  if (this.calculator.registerStrike(hits)) {
    this.nextFrame();
  }
};

Scoreboard.prototype.saveSecondRoll = function (hits) {
  if (this.frames.length === 0 || this.frames[this.frames.length-1].roll1 === null) {
    throw new Error('Must roll first ball silly');
  }
  this.currentFrame().roll2 = hits;
  this.finishAndCreateNewFrame();
};

Scoreboard.prototype.getCurrentScore = function () { //Remove after refactoring tests
  return this.calculator.getCurrentScore();
};

Scoreboard.prototype.currentFrame = function () {
  return this.frames[this.frames.length-1];
};

Scoreboard.prototype.finishAndCreateNewFrame = function () {
  this.calculator.calculateScore(this.currentFrame().roll1, this.currentFrame().roll2);
  this.calculator.registerSpare(this.currentFrame().roll1 + this.currentFrame().roll2);
  this.nextFrame();
};
