'use strict';

function BowlingGame() {
  this.currentFrame = 1;
  this.previousFrame = 0;
}

BowlingGame.prototype.getCurrentFrame = function () {
  return this.currentFrame;
};

BowlingGame.prototype.nextFrame = function () {
  this.currentFrame += 1;
  this.previousFrame += 1;
};

BowlingGame.prototype.getPreviousFrame = function () {
  return this.previousFrame;
};

module.exports = BowlingGame;
