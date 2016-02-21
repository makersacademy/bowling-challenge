'use strict;'

function Game() {
  this.frames = [];
  this.frameScores = [];
  this.currFrameNum = 0;
}

Game.prototype.addFrame = function (frame) {
  if (this.currFrameNum < 10) {
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
  this.calcPrevSpareBonus();
  this.calcPrevStrikeBonus();
  this.calcPrevDoubleStrikeBonus();
  this.frameScores[this.currFrameNum] = this.ball1 + this.ball2;
};

Game.prototype._updateTotalScore = function(frame) {
  var totalframes = Math.min(this.frames.length, 10);
  this.totalScore = 0;
  for(var i = 0; i < totalframes; i++) {
    this.totalScore += this.frameScores[i];
  }
}

Game.prototype.calcPrevSpareBonus = function () {
  var curr = this.currFrameNum;
  var prev = this.currFrameNum - 1;
  if(this.frames[prev] && this.frames[prev].isSpare()) {
    this.frameScores[prev] += this.ball1;
  }
};

Game.prototype.calcPrevStrikeBonus = function () {
  var curr = this.currFrameNum;
  var prev = this.currFrameNum - 1;
  if(this.frames[prev] && this.frames[prev].isStrike()) {
    this.frameScores[prev] += this.ball1 + this.ball2;
  }
};

Game.prototype.calcPrevDoubleStrikeBonus = function () {
  var curr = this.currFrameNum;
  var prev = this.currFrameNum - 1;
  var prevprev = this.currFrameNum - 2;
  if(this.frames[prevprev] &&
    this.frames[prevprev].isStrike() &&
    this.frames[prev].isStrike()) {
    this.frameScores[prevprev] += this.ball1;
  }
};


//
// if (currFrameNum >= 2 && this._prevDoubleStrike())
//   this._prevPrevFrameScoreIs(20 + ball1);
