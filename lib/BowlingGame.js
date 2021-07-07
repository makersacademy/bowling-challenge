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
  this.isFirstRoll() ? this.rollNumber = 2 : this.rollNumber = 1;
};

BowlingGame.prototype.getScoreCard = function () {
  return this.scoreCard;
};

BowlingGame.prototype.addRoll = function (roll) {
    if (this.getCurrentFrame() === 10) { this.finalFrameScoring(roll); return; }
    if (this.getCurrentFrame() > 10) throw new Error('The game has finished.')
    if (roll > this.MAX_FRAME_SCORE) throw new Error('You cannot knock more than 10 pins in one roll.');
    this.isFirstRoll() ? this.firstRollScoring(roll) : this.secondRollScoring(roll);
    this.changeRollNumber();
};

BowlingGame.prototype.firstRollScoring = function (roll) {
  var scoreCard = this.getScoreCard();
  var frame = this.getCurrentFrame(); var previousFrame = this.getPreviousFrame();
  if (this.previousFrameIsStrike() && !this.isStrike()) {
    this.doubleStrikeScoring(roll);
  }
  else if (this.previousFrameIsSpare()) {
    this.scoreCard[previousFrame][2] = roll;
  }
  if (this.isStrike(roll)) { this.nextFrame(); this.changeRollNumber(); }
  this.scoreCard[frame] = [roll, 0, 0];
};

BowlingGame.prototype.secondRollScoring = function (roll) {
  var frame = this.getCurrentFrame(); var scoreCard = this.getScoreCard();
  this.scoreCard[frame][1] = roll; this.scoreCard[frame][2] = 0;
  if (this.scoreCard[frame][0] + this.scoreCard[frame][1] > 10) {
    throw new Error('You cannot knock more than 10 pins in one frame.')
  }
  if (this.previousFrameIsStrike()) { this.strikeScoring(roll); }
  this.nextFrame();
};

BowlingGame.prototype.finalFrameScoring = function (roll) {
  if (this.isFirstRoll()) {
    this.firstRollFinalFrameScoring(roll);
  }
  else if (this.rollNumber === 2) {
    this.secondRollFinalFrameScoring(roll);
  }
  else {
    this.thirdRollFinalFrameScoring(roll);
    return;
  }
  this.currentFrame = 10;
};

BowlingGame.prototype.firstRollFinalFrameScoring = function (roll) {
  var frame = this.getCurrentFrame(); var previousFrame = this.getPreviousFrame();
  var scoreCard = this.getScoreCard();
  if (this.previousFrameIsStrike() && !this.isStrike()) {
    this.doubleStrikeScoring(roll);
  }
  else if (this.previousFrameIsSpare()) {
    this.scoreCard[previousFrame][2] = roll;
  }
  this.scoreCard[frame] = [roll, 0, 0];
  this.changeRollNumber();
};

BowlingGame.prototype.secondRollFinalFrameScoring = function (roll) {
  var frame = this.getCurrentFrame(); var scoreCard = this.getScoreCard();
  this.scoreCard[frame][1] = roll; this.scoreCard[frame][2] = 0;
  if (this.previousFrameIsStrike()) { this.strikeScoring(roll); }
  if (this.scoreCard[frame][0] === this.MAX_FRAME_SCORE || this.scoreForFrame(this.currentFrame) === this.MAX_FRAME_SCORE) {
    this.rollNumber = 3;
  }
};

BowlingGame.prototype.thirdRollFinalFrameScoring = function (roll) {
  var frame = this.getCurrentFrame(); var scoreCard = this.getScoreCard();
  if (this.scoreForFrame(frame) <= this.MAX_FRAME_SCORE) {
    this.scoreCard[frame][2] = this.scoreCard[frame][0] + this.scoreCard[frame][1];
  }
  else if (this.scoreCard[frame][1] === this.MAX_FRAME_SCORE) {
    this.scoreCard[frame][2] = this.MAX_FRAME_SCORE;
  }
  else {
    this.scoreCard[frame][2] = roll;
  }
  this.nextFrame();
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


BowlingGame.prototype.isStrike = function (roll) {
  return (this.rollNumber === 1 && roll === this.MAX_FRAME_SCORE);
};

BowlingGame.prototype.strikeScoring = function (roll) {
  var scoreCard = this.getScoreCard();
  var frame = this.getCurrentFrame(); var previousFrame = this.getPreviousFrame();
  var roll1 = this.scoreCard[frame][0]; var roll2 = this.scoreCard[frame][1];
  this.scoreCard[previousFrame][2] = roll1 + roll2
};

BowlingGame.prototype.doubleStrikeScoring = function (roll) {
  var scoreCard = this.getScoreCard();
  var previousButOneFrame = this.getPreviousFrame() - 1;
  if (scoreCard[previousButOneFrame][0] === this.MAX_FRAME_SCORE) {
    this.scoreCard[previousButOneFrame][2] = (roll + 10);
  }
};

BowlingGame.prototype.scoreForFrame = function(frameNumber) {
  var frameScore = this.scoreCard[frameNumber]
  return this.add(frameScore);
};

BowlingGame.prototype.add = function (frameScore) {
  return frameScore.reduce(function(acc, val) { return acc + val; });
};

BowlingGame.prototype.calculateFinalScore = function () {
  var flattenedScores = Object.values(this.getScoreCard()).reduce((acc, val) => acc.concat(val), []);
  return this.add(flattenedScores)
};

module.exports = BowlingGame;
