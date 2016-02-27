'use strict;'

function Game() {
  this.frames = [];
  this.frameScores = [];
  this.currFrameNum = 0;
  this.totalScore = [];
}

Game.prototype.addFrame = function (frame) {
  if (this.currFrameNum < 10) { //plus bonus ball
    this.frames.push(frame);
    this._updateFrameScores(frame);
    this._updateTotalScore();
    this.currFrameNum++;
  } else {
    throw new Error("Max frames");
  }
};

Game.prototype._updateFrameScores = function(frame) {
  this.ball1 = frame.showRolls()[0];
  this.ball2 = frame.showRolls()[1] || 0;
  this.frameScores[this.currFrameNum] = this.ball1 + this.ball2;
  this.calcPrevSpareBonus();
  this.calcPrevStrikeBonus();
  this.calcPrevDoubleStrikeBonus();
};

Game.prototype._updateTotalScore = function() {
  for(var i = 0; i < this.frames.length; i++) {
    this.totalScore[i] = this.frameScores[i] + ( this.totalScore[i-1] || 0 )
  }
};

Game.prototype.calcPrevSpareBonus = function () {
  var prev = this.currFrameNum - 1;
  if(this.frames[prev] && this.frames[prev].isSpare()) {
    this.frameScores[prev] += this.ball1;
  }
};

Game.prototype.calcPrevStrikeBonus = function () {
  var prev = this.currFrameNum - 1;
  if(prev >= 0 && this.frames[prev].isStrike()) {
    this.frameScores[prev] += this.ball1 + this.ball2;
  }
};

Game.prototype.calcPrevDoubleStrikeBonus = function () {
  var prev = this.currFrameNum - 1;
  var prevprev = this.currFrameNum - 2;
  if(prevprev >= 0 &&
    this.frames[prevprev].isStrike() &&
    this.frames[prev].isStrike()) {
    this.frameScores[prevprev] += this.ball1;
    // this.totalScore += this.ball1;
  }
};
