'use strict;'

var BowlingGame = function() {
  this.rollArray = [];
};

BowlingGame.prototype.roll = function(pins) {
  this.rollArray.push(pins);
};

BowlingGame.prototype.score = function() {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isSpare()) {
      result += getSpareScore();
    } else {
      result += getNormalScore();
    }
    rollIndex += 2;
  }
  return result;

  function isSpare() {
    return game.rollArray[rollIndex] + game.rollArray[rollIndex + 1] === 10;
  }

  function getSpareScore() {
    return game.rollArray[rollIndex] + game.rollArray[rollIndex + 1] + game.rollArray[rollIndex + 2];
  }

  function getNormalScore() {
    return game.rollArray[rollIndex] + game.rollArray[rollIndex + 1];
  }
};
