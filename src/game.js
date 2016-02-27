'use strict;'

function Game() {
  this.frames = [];
  this._scores = [];
  this._frameNumber = 0;
}

Game.prototype.addFrame = function(frame) {
  if (this._frameNumber < 10) {
    this.frames.push(frame);
    this.calcScores(frame);
    this.calcTotalScore(frame);
    this._frameNumber ++;
  } else {
    throw new Error("10 frames per match only!")
  }
};

Game.prototype.calcScores = function(frame) {
  this.roll1 = frame.checkRoll()[0];
  this.roll2 = frame.checkRoll()[1] || 0;
  this.checkStrikeBonus();
  this.checkSpareBonus();
  this.checkDoubleStrikeBonus();
  this._scores[this._frameNumber] = this.roll1 + this.roll2;
};

Game.prototype.calcTotalScore = function(frame) {
  var totalFrames = Math.min(this.frames.length, 10);
  this.totalScore = 0;
  for(var i = 0; i < totalFrames; i++) {
    this.totalScore += this._scores[i];
  }
}

Game.prototype.checkSpareBonus = function() {
  var currentFrame = this._frameNumber;
  var previousFrame = this._frameNumber - 1;
  if (this.frames[previousFrame] && this.frames[previousFrame].isSpare()) {
    this._scores[previousFrame] += this.roll1;
  }
};

Game.prototype.checkStrikeBonus = function() {
  var currentFrame = this._frameNumber;
  var previousFrame = this._frameNumber - 1;
  if (this.frames[previousFrame] && this.frames[previousFrame].isStrike()) {
    this._scores[previousFrame] += this.roll1 + this.roll2;
  }
};

Game.prototype.checkDoubleStrikeBonus = function() {
  var currentFrame = this._frameNumber;
  var previousFrame = this._frameNumber - 1;
  var oneBeforeThat = this._frameNumber - 2;
  if(this.frames[oneBeforeThat] && this.frames[oneBeforeThat].isStrike() && this.frames[previousFrame].isStrike()) {
    this._scores[oneBeforeThat] += this.roll1
  }
};
