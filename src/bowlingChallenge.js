'use strict';

'use strict';

function BowlingGame() {
  this.rolls = [];
};

BowlingGame.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function () {
  var game = this;
  var rollIndex = 0;
  var totalScore = 0;

  for (var frame = 0; frame < 10; frame++) {
    if (isStrike()) {
      totalScore += strikeScore();
      rollIndex += 1;
    } else if (isSpare()) {
      totalScore += spareScore();
      rollIndex += 2;
    } else {
      totalScore += normalScore();
      rollIndex += 2;
    }
  }

  return totalScore

  function isStrike() {
    return game.rolls[rollIndex] == 10;
  }
  function strikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }
  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
  }
  function spareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }
  function normalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
};
