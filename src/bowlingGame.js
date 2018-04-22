'use strict';

function BowlingGame() {
  this.rolls = [];
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);

};

BowlingGame.prototype.score = function() {
	var score = 0;
  var rollIndex = 0
  var game = this

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isSpare()) {
    score += this.rolls[rollIndex] + this.rolls[rollIndex + 1] +this.rolls[rollIndex + 2];
  } else {
    score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }
    rollIndex += 2;
  }
	return score;

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
  }
};
