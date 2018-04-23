'use strict';

function BowlingGame() {
  this.rolls = [];
  this.totalScore = 0;
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);

};

BowlingGame.prototype.score = function() {
  var rollIndex = 0
  var game = this

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      this.totalScore += spareAndStrikeScore();
      rollIndex++
    } else if (isSpare()) {
        this.totalScore += spareAndStrikeScore();
        rollIndex += 2
    } else {
        this.totalScore += normalScore();
        rollIndex += 2;
    }
  }
	return this.totalScore;

  function isStrike() {
    return game.rolls[rollIndex] === 10;
  }
  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
  }
  function spareAndStrikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] +game.rolls[rollIndex + 2];
  }
  function normalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
};
