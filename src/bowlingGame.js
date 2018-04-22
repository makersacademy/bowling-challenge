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
    if (isStrike()) {
      score += strikeScore();
      rollIndex++
    } else if (isSpare()) {
        score += spareScore();
        rollIndex += 2
    } else {
        score += normalScore();
        rollIndex += 2;
    }
  }
	return score;

  function isStrike() {
    return game.rolls[rollIndex] === 10;
  }
  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
  }
  function spareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] +game.rolls[rollIndex + 2];
  }
  function strikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] +game.rolls[rollIndex + 2];
  }
  function normalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
};
