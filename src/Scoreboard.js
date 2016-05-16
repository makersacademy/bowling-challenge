'use strict';

function Scoreboard (calculator) {
  this.frames =[{roll1: null, roll2: null}];
  this.calculator = calculator || new ScoreCalculator();
}

Scoreboard.prototype.nextFrame = function () {
  this.frames.push({roll1: null, roll2: null});
};

Scoreboard.prototype.currentFrame = function () {
  return this.frames[this.frames.length-1];
};

Scoreboard.prototype.saveFirstRoll = function (hits) {
  this.currentFrame().roll1 = hits;

  if (hits === 10) {
    this.checkFramesAndRegisterStrikes(hits);
  }
};

Scoreboard.prototype.saveSecondRoll = function (hits) {
  if (this.currentFrame().roll1 === null) {
    throw new Error('Must roll first ball silly');
  }
  this.currentFrame().roll2 = hits;
  this.checkFramesAndGetResults(hits);
};

Scoreboard.prototype.lastFrame = function (roll1, roll2) {
  this.frames[9] = ({roll1: roll1, roll2: roll2, roll3: null});
};

Scoreboard.prototype.saveThirdRoll = function (hits) {
  if (this.frames.length !== 10 ) {
    throw new Error('Nope, no can do!');
  }
  this.currentFrame().roll3 = hits;
  this.calculator.calculateScore(this.currentFrame().roll1,
  this.currentFrame().roll2, hits);
};

Scoreboard.prototype.checkFramesAndRegisterStrikes = function (hits) {
  if (this.frames.length === 10) {
    return this.lastFrame(hits);
  }
  this.calculator.registerStrike(hits);
  this.nextFrame();
};

Scoreboard.prototype.checkFramesAndGetResults = function (hits) {
  if (this.frames.length === 10) {
    return this.lastFrame(this.currentFrame().roll1, hits);
  }
  this.finishAndCreateNewFrame();
};

Scoreboard.prototype.finishAndCreateNewFrame = function () {
  this.calculator.calculateScore(this.currentFrame().roll1,
  this.currentFrame().roll2);
  this.calculator.registerSpare(this.currentFrame().roll1 +
  this.currentFrame().roll2);
  this.nextFrame();
};
