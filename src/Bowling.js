'use strict';

function Bowling () {
  this.frame = [];
};

Bowling.prototype.roll = function (pins) {
  this.frame.push(pins);
};

Bowling.prototype.score = function () {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isSpare()) {
      result += spareScore();
    } else {
      result += normalScore();
    }
    rollIndex += 2;
  }
  return result;

  function isSpare() {
    return game.frame[rollIndex] + game.frame[rollIndex + 1] === 10
  }

  function spareScore() {
    return game.frame[rollIndex] + game.frame[rollIndex + 1] + game.frame[rollIndex + 2]
  }

  function normalScore() {
    return game.frame[rollIndex] + game.frame[rollIndex + 1]
  }

};
