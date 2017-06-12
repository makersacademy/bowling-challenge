'use strict'

var Game = function() {
  this.rolls = [];
  this.currentScore = 0;
};

Game.prototype.roll = function (pins) {
  this.rolls.push(pins);
  this.currentScore += pins;
  console.log(this.currentScore);
};

Game.prototype.frame = function () {
  return this.frame;
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
