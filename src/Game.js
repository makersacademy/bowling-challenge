'use strict';

function Game(currentFrame = new Frame()) {
  this.frames = [];
  this.currentFrame = currentFrame;
  this.addFrame();
};

Game.prototype.score = function () {
  var result = 0;
  var rollIndex = 0;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      result += getStrikeScore();
      rollIndex++;
    } else if (isSpare()) {
      result += getSpareScore();
      rollIndex += 2;
    } else {
      result += getNormalGame();
      rollIndex += 2;
    }
  }
  return result;
};

Game.prototype.addFrame = function () {
  this.frames.push(this.currentFrame);
};
