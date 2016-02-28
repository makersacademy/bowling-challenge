'use strict;'

function Game() {
  this.frames = [];
  this.frameScores = [];
  this.currFrameNum = 0;
  this.totalScore = [];
}

Game.prototype.addRoll = function (pinsDown) {
  if(this.frames[this.currFrameNum] && this.frames[this.currFrameNum]._frameComplete()) {
    this.currFrameNum++;
  }

  if(!this.frames[this.currFrameNum]) {
    this.addFrame(new Frame());
  }
  this.frames[this.currFrameNum].addRoll(pinsDown);
  this._updateFrameScores();
  console.log(this.totalScore)
};


Game.prototype.addFrame = function (frame) {
  this.currFrameNum = this.frames.length;
  if (this.currFrameNum < 10 || this.addBonusBall()) {
    this.frames.push(frame);
    this._updateFrameScores();
    this._updateTotalScore();
  } else {
    throw new Error("Max frames");
  }
};

Game.prototype._updateFrameScores = function() {
  this.ball1 = this.frames[this.currFrameNum].showRolls()[0];
  this.ball2 = this.frames[this.currFrameNum].showRolls()[1] || 0;
  this.frameScores[this.currFrameNum] = this.ball1 + this.ball2;
  this.calcPrevSpareBonus();
  this.calcPrevStrikeBonus();
  this.calcPrevDoubleStrikeBonus();
  this._updateTotalScore();
};

Game.prototype._updateTotalScore = function() {
  for(var i = 0; i < this.frames.length; i++) {
    this.totalScore[i] = this.frameScores[i] + ( this.totalScore[i-1] || 0 )
  }
  if(this.frames[this.currFrameNum].isSpare() ||
    this.frames[this.currFrameNum].isStrike()) {
    this.totalScore[this.currFrameNum] = '';
  }
  if(this.currFrameNum > 0 && this.frames[this.currFrameNum].isStrike() &&
    this.frames[this.currFrameNum-1].isStrike()) {
    this.totalScore[this.currFrameNum] = '';
    this.totalScore[this.currFrameNum-1] = '';
  }

  if(this.currFrameNum > 0 && !this.frames[this.currFrameNum]._frameComplete() &&
    this.frames[this.currFrameNum-1].isStrike()) {
    this.totalScore[this.currFrameNum-1] = '';
  }
  if(this.frames[this.currFrameNum] && !this.frames[this.currFrameNum]._frameComplete()) {
    this.totalScore[this.currFrameNum] = '';
  }
};

Game.prototype.calcPrevSpareBonus = function () {
  var prev = this.currFrameNum - 1;
  if(this.frames[prev] && this.frames[prev].isSpare()) {
    this.frameScores[prev] = 10 + this.ball1;
  }
};

Game.prototype.calcPrevStrikeBonus = function () {
  var prev = this.currFrameNum - 1;
  if(prev >= 0 && this.frames[prev].isStrike()) {
    this.frameScores[prev] = 10 + this.ball1 + this.ball2;
  }
};

Game.prototype.calcPrevDoubleStrikeBonus = function () {
  var prev = this.currFrameNum - 1;
  var prevprev = this.currFrameNum - 2;
  if(prevprev >= 0 &&
    this.frames[prevprev].isStrike() &&
    this.frames[prev].isStrike()) {
    this.frameScores[prevprev] = 20 + this.ball1;
  }
};

Game.prototype.addBonusBall = function () {
  var currFrameNum = this.currFrameNum;
  if (currFrameNum === 10 &&
    (this.frames[9].isSpare() || this.frames[9].isStrike())) { return true; }
  if (currFrameNum === 11 &&
    (this.frames[9].isStrike() && this.frames[10].isStrike())) { return true; }
  return false;
};
