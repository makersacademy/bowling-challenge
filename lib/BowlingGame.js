'use strict';

function BowlingGame() {
  this.currentFrame = 1;
  this.previousFrame = 0;
  this.rollNumber = 1;
  this.scoreCard = {0: [0, 0, 0]};
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
      if (this.previousFrameIsSpare()) {
        var previousFrame = this.getPreviousFrame();
        this.scoreCard[previousFrame][2] = roll;
      }
      if (roll === 10) {
        this.nextFrame();
      }
      this.scoreCard[frame] = [roll, undefined];
    }
    else {
      this.scoreCard[frame][1] = roll;
      this.scoreCard[frame][2] = 0;
      this.nextFrame();
    }
    this.changeRollNumber();
};

BowlingGame.prototype.previousFrameIsSpare = function () {
  var previousFrame = this.getPreviousFrame();
  return this.scoreForFrame(previousFrame) === 10;
};

BowlingGame.prototype.scoreForFrame = function(frameNumber) {
  return this.scoreCard[frameNumber].reduce(function(acc, val) { return acc + val; })
};

// module.exports = BowlingGame;
