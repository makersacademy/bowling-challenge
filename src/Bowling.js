var BowlingGame = function() {
  this.rolls = [];
  this.scoresArray = [];
};

BowlingGame.prototype.roll = function (pins) {
  this.rolls.push(pins);
  this.score(pins);
};

BowlingGame.prototype.score = function (frameNumber) {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var i = 0; i < frameNumber; i++) {
    if (isStrike()) {
      result += getStrikeScore();
      rollIndex ++;
    } else if (isSpare()) {
      result += getSpareScore();
      rollIndex += 2;
    } else {
      result += getNormalScore();
      rollIndex += 2;
    }
  }
  return result;

  function isStrike() {
    return game.rolls[rollIndex] === 10;
  }
  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
  }

  function getStrikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getSpareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getNormalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
};
