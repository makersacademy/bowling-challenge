'use strict';

function Scoreboard (calculator = new ScoreCalculator()) {
  this.frames =[{roll1: null, roll2: null}];
  this.calculator = calculator;
}

Scoreboard.prototype.nextFrame = function () {
  this.frames.push({roll1: null, roll2: null});
};

Scoreboard.prototype.saveFirstRoll = function (hits) {
  this.currentFrame().roll1 = hits;

  if (hits === 10) {
    if (this.frames.length === 10) {
      this.lastFrame(hits);
    }
    else {
      this.calculator.registerStrike(hits)
      this.nextFrame();
    }
  }
};

Scoreboard.prototype.saveSecondRoll = function (hits) {
  if (this.frames.length === 0 || this.currentFrame().roll1 === null) {
    throw new Error('Must roll first ball silly');
  }
  this.currentFrame().roll2 = hits;

  if (this.frames.length == 10) {
    this.lastFrame(this.currentFrame().roll1, hits);
  }
  else {
    this.finishAndCreateNewFrame();
  }
};

Scoreboard.prototype.finishAndCreateNewFrame = function () {
  this.calculator.calculateScore(this.currentFrame().roll1, this.currentFrame().roll2);
  this.calculator.registerSpare(this.currentFrame().roll1 + this.currentFrame().roll2);
  this.nextFrame();
};

Scoreboard.prototype.lastFrame = function (roll1, roll2) {
  this.frames[9] = ({roll1: roll1, roll2: roll2, roll3: null});
};

Scoreboard.prototype.saveThirdRoll = function (hits) {
  if (this.frames.length !== 10 ) {
    throw new Error('Nope, no can do!');
  }
  this.currentFrame().roll3 = hits;
  this.calculator.calculateScore(this.currentFrame().roll1, this.currentFrame().roll2, hits);
};

Scoreboard.prototype.currentFrame = function () {
  return this.frames[this.frames.length-1];
};
