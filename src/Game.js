'use strict'

var Game = function() {
  this.rolls = [];
};

Game.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function () {
  var result = 0;
  var rollNumber = 0;

  for (var frameNumber = 0; frameNumber < 10; frameNumber++) {
    result += this.rolls[rollNumber] + this.rolls[rollNumber + 1];
    console.log(this.rolls[rollNumber])
    rollNumber += 2;
  }
return result;
};
