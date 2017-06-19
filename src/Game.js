'use strict'

var Game = function() {
  this.rolls = [];
};

Game.prototype.roll = function (pins) {
  if (pins > 10) {
    throw('Cheater!');
  }
  this.rolls.push(pins);
};

Game.prototype.currentScore = function (frame) {
  var score = 0;
  var rollNumber = 0;

  for (var frameNumber = 0; frameNumber < frame; frameNumber++) {
    if (this.rolls[rollNumber] === 10) {
      score += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2];
      rollNumber ++;
    } else if (this.rolls[rollNumber] + this.rolls[rollNumber + 1] === 10) {
      score += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2];
      rollNumber += 2;
    } else {
      score += this.rolls[rollNumber] + this.rolls[rollNumber + 1];
      rollNumber += 2;
    };
  };
  return score;
};

Game.prototype.score = function () {
  var result = 0;
  var rollNumber = 0;

  for (var frameNumber = 0; frameNumber < 10; frameNumber++) {
    if (this.rolls[rollNumber] === 10) {
      result += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2];
      rollNumber ++;
    } else if (this.rolls[rollNumber] + this.rolls[rollNumber + 1] === 10) {
      result += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2];
      rollNumber += 2;
    } else {
      result += this.rolls[rollNumber] + this.rolls[rollNumber + 1];
      rollNumber += 2;
    };
  };
  return result;
};
