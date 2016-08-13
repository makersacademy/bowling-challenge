var BowlingGame = function() {
  this.rollsArray = [];
  this.scoresArray = [];
};

BowlingGame.prototype.roll = function (pins) {
  this.rollsArray.push(pins);
  this.score(pins);
};

BowlingGame.prototype.score = function (frameIndex) {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
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
    return game.rollsArray[rollIndex] === 10;
  }
  function isSpare() {
    return game.rollsArray[rollIndex] + game.rollsArray[rollIndex + 1] === 10;
  }

  function getStrikeScore() {
    return game.rollsArray[rollIndex] + game.rollsArray[rollIndex + 1] + game.rollsArray[rollIndex + 2];
  }

  function getSpareScore() {
    return game.rollsArray[rollIndex] + game.rollsArray[rollIndex + 1] + game.rollsArray[rollIndex + 2];
  }

  function getNormalScore() {
    return game.rollsArray[rollIndex] + game.rollsArray[rollIndex + 1];
  }
};
