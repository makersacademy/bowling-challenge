'use strict';

function BowlingGame() {
  this.currentFrame = 1;
  this.previousFrame = 0;
  this.rollNumber = 1;
  this.scoreCard = {0: [0, 0, 0]};
  this.MAX_FRAME_SCORE = 10;
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

BowlingGame.prototype.isFirstRoll = function () {
  return this.rollNumber === 1;
};

BowlingGame.prototype.changeRollNumber = function () {
  this.rollNumber === 1 ? this.rollNumber = 2 : this.rollNumber = 1;
};

BowlingGame.prototype.getScoreCard = function () {
  return this.scoreCard;
};

BowlingGame.prototype.addRoll = function (roll) {
    var frame = this.getCurrentFrame();
    var previousFrame = this.getPreviousFrame();
    var previousButOneFrame = this.getPreviousFrame() - 1;
    var scoreCard = this.getScoreCard();
    if (roll > this.MAX_FRAME_SCORE) throw new Error('That is not a valid roll.');
    if (this.isFirstRoll()) {
      if (this.previousFrameIsStrike() && !this.isStrike()) {
        if (scoreCard[previousButOneFrame][0] === this.MAX_FRAME_SCORE) {
          this.scoreCard[previousButOneFrame][2] = (roll + 10);
        }
      }
      else if (this.previousFrameIsSpare()) {
        this.scoreCard[previousFrame][2] = roll;
      }
      if (this.isStrike(roll)) {
        this.nextFrame();
        this.changeRollNumber();
      }
      this.scoreCard[frame] = [roll, 0, 0];
    }
    else {
      this.scoreCard[frame][1] = roll;
      this.scoreCard[frame][2] = 0;
      if (this.scoreCard[frame][0] + this.scoreCard[frame][1] > 10) {
        throw new Error('That is not a valid roll.')
      }
      if (this.previousFrameIsStrike()) {
        var roll1 = this.scoreCard[frame][0]
        var roll2 = this.scoreCard[frame][1]
        this.scoreCard[previousFrame][2] = roll1 + roll2
      }
      this.nextFrame();
    }
    this.changeRollNumber();
};

BowlingGame.prototype.previousFrameIsSpare = function () {
  var previousFrame = this.getPreviousFrame();
  return this.scoreForFrame(previousFrame) === this.MAX_FRAME_SCORE;
};

BowlingGame.prototype.previousFrameIsStrike = function () {
  var previousFrame = this.getPreviousFrame();
  var scoreCard = this.getScoreCard();
  return scoreCard[previousFrame][0] === this.MAX_FRAME_SCORE;
};

BowlingGame.prototype.scoreForFrame = function(frameNumber) {
  var frameScore = this.scoreCard[frameNumber]
  return this.add(frameScore);
};

BowlingGame.prototype.add = function (frameScore) {
  return frameScore.reduce(function(acc, val) { return acc + val; });
};

BowlingGame.prototype.isStrike = function (roll) {
  return (this.rollNumber === 1 && roll === this.MAX_FRAME_SCORE);
};

BowlingGame.prototype.calculateFinalScore = function () {
  var flattenedScores = Object.values(this.getScoreCard()).reduce((acc, val) => acc.concat(val), []);
  return this.add(flattenedScores)
};

module.exports = BowlingGame;
