'use strict';

function Scorecard(){
  this.pins = 0
  this.frameCount = 1
  this.rollCount = 1
  this.totalScore = 0
  this.currentRoll = 0
  this.rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

Scorecard.prototype.roll = function (pins) {
  this.rolls[this.currentRoll++] = pins;
};

Scorecard.prototype.score = function () {
  var gameScore = 0;
  var rollIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
// if a Strike
    if (this.rolls[rollIndex] == 10) {
      gameScore += 10;
      gameScore += this.rolls[rollIndex + 1];
      gameScore += this.rolls[rollIndex + 2];
      rollIndex += 1;
    }
// if a Spare
    else if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10) {
      gameScore += 10 + this.rolls[rollIndex + 2];
      rollIndex += 2;
    } else { gameScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      rollIndex += 2;
    }
  }
  return this.totalScore = Number(gameScore);
};

Scorecard.prototype.addPins = function (pins) {
  this.pins = Number(pins);
};

Scorecard.prototype.incrementFrame = function () {
  if (this.frameCount === 10 && this.rollCount != 3 ) { this.rollCount += 1; }
  else if (this.rolls[this.currentRoll - 1] === 10) { this.frameCount += 1; }
  else if (this.rollCount === 1) { this.rollCount += 1; }
  else if (this.rollCount === 2) {
    this.rollCount -= 1;
    this.frameCount += 1;
  }
};
