"use strict";

function Game () {
  this.totalScore = 0;
  this.frame = 1;
  this.currentFrame = new Frame();
  this.bonusFramePoints = [];
  this.pointsLog = [];
  this.NUM_FRAMES_IN_GAME = 10
};

Game.prototype.nextFrame = function() {
  if (this._onFinalFrame()) {
    this.checkBonusFrame();
  } else {
    this.frame ++;
  };
};

Game.prototype.addPoints = function(points) {
  this.currentFrame.performFrameActions(points);
  this._moveToNextFrame();
  this.sumPoints();
};

Game.prototype._moveToNextFrame = function() {
  if (this.currentFrame.roll === 2) {
    this.saveFrame(this.currentFrame);
    this.nextFrame();
    this.calculateBonuses();
    this.currentFrame = new Frame();
  };
};

Game.prototype.checkBonusFrame = function() {
  if (this.frame == this.NUM_FRAMES_IN_GAME) {
    if (this._finalFrameIsStrike()) {
      this.bonusFrame = new BonusFrame("strike");
    } else if (this._finalFrameIsSpare()) {
      this.bonusFrame = new BonusFrame("spare");
    };
  };
};

Game.prototype.addFinalBonusPoints = function(points) {
  this.bonusFrame.addPoints(points);
  this.bonusFrame.nextRoll();
  if (this.bonusFrame.endGame === true) {
    this.sumFinalBonusPoints(this.bonusFrame.score);
  };
  this.sumPoints();
};

Game.prototype.sumFinalBonusPoints = function(points) {
  this.addPenultimateFrameStrikeBonus();
  this.pointsLog[9].totalScore += points;
};

Game.prototype.addPenultimateFrameStrikeBonus = function() {
  if (this.pointsLog[8].strike) {
    this.pointsLog[8].totalScore += this.bonusFrame.scores[0];
  };
};

Game.prototype.sumPoints = function() {
  this.totalScore = this.pointsLog.reduce(function(total, frame) {
    return total + frame.totalScore;
  }, 0);
};

Game.prototype.calculateBonuses = function() {
  if (this.frame > 2) {
    this.addStrikeBonus();
    this.addDoubleStrikeBonus();
    this.addSpareBonus();
  };
};

Game.prototype.addStrikeBonus = function() {
  var index = this._getPreviousFrameIndex();
  if (this._previousFrameIsStrike()) {
    return this.pointsLog[index].totalScore += this.pointsLog[index + 1].totalScore;
  };
};

Game.prototype.addDoubleStrikeBonus = function() {
  if (this.pointsLog.length > 2) {
    var index = this._getPreviousFrameIndex() - 1;
    if (this._previousTwoFramesAreStrikes()) {
      return this.pointsLog[index].totalScore += this.currentFrame.score[0];
    };
  };
};

Game.prototype.addSpareBonus = function() {
  var index = this._getPreviousFrameIndex();
  if (this._previousFrameIsSpare()) {
    return this.pointsLog[index].totalScore += this.currentFrame.score[0];
  };
};

Game.prototype._getPreviousFrameIndex = function () {
  return (this.pointsLog.length - 2);
};

Game.prototype._previousFrameIsStrike = function() {
  var index = this._getPreviousFrameIndex();
  return this.pointsLog[index].strike;
};

Game.prototype._previousTwoFramesAreStrikes = function() {
  var index = this._getPreviousFrameIndex() - 1;
  return this._previousFrameIsStrike() && this.pointsLog[index].strike;
};

Game.prototype._previousFrameIsSpare = function() {
  var index = this._getPreviousFrameIndex();
  return this.pointsLog[index].spare;
};

Game.prototype.saveFrame = function(frame) {
  this.pointsLog.push(frame);
};

Game.prototype._onFinalFrame = function() {
  return this.frame === this.NUM_FRAMES_IN_GAME;
};

Game.prototype._finalFrameIsSpare = function() {
  if (this._onFinalFrame()) {
    return this.pointsLog[9].spare;
  };
};

Game.prototype._finalFrameIsStrike = function() {
  if (this._onFinalFrame()) {
    return this.pointsLog[9].strike;
  };
};
