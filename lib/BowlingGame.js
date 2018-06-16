'use strict';

function BowlingGame() {
  this.currentFrame = 1;
  this.previousFrame = 0;
  this.rollNumber = 1;
  this.scoreCard = {};
}

BowlingGame.prototype.getCurrentFrame = function () {
  return this.currentFrame;
};

BowlingGame.prototype.getPreviousFrame = function () {
  return this.previousFrame;
};

BowlingGame.prototype.nextFrame = function () {
  this.currentFrame += 1;
  this.previousFrame += 1;
};

BowlingGame.prototype.getRollNumber = function () {
  return this.rollNumber;
};

BowlingGame.prototype.changeRollNumber = function () {
  this.rollNumber === 1 ? this.rollNumber = 2 : this.rollNumber = 1;
};

BowlingGame.prototype.getScoreCard = function () {
  return this.scoreCard;
};

BowlingGame.prototype.addRoll = function (roll) {
    var frame = this.getCurrentFrame();
    if (this.getRollNumber() === 1) {
      this.scoreCard[frame] = [roll, undefined];
    }
    else {
      this.scoreCard[frame][1] = roll;
    }
};

module.exports = BowlingGame;
