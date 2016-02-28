'use strict;'

function Game(frame) {
  this.frames = [];
  this.currFrameNum = 0;
  this.totalScore = [];
  this.currFrame = frame || new Frame();
}

Game.prototype.addRoll = function (pinsDown) {
  this.currFrameNum = this.frames.length;
  if (this.currFrameNum < 10 || this.lastFrameBonus()) {
    this.currFrame.addRoll(pinsDown);
  } else {
    throw new Error("Max frames");
  }
  this._updateFrameScores();
  if(this.currFrame.isRollsComplete()) {
    this.frames.push(this.currFrame)
    this._updateFrameScores();
    this.currFrame = new Frame();
  }
};

Game.prototype._updateFrameScores = function() {
  this.ball1 = this.currFrame.rolls[0];
  this.ball2 = this.currFrame.rolls[1];
  this.calcPrevSpareBonus();
  this.calcPrevStrikeBonus();
  this.calcPrevDoubleStrikeBonus();
  this._updateTotalScore();
};

Game.prototype._updateTotalScore = function() {
  for(var i = 0; i < this.frames.length; i++) {
    this.totalScore[i] = this.frames[i].calcTotal() + ( this.totalScore[i-1] || 0 );
  }
};

Game.prototype.calcPrevSpareBonus = function () {
  var prev = this.currFrameNum - 1;
  if(this.frames[prev] && this.frames[prev].isSpare()) {
    this.frames[prev].bonus0 = this.ball1;
  }
};

Game.prototype.calcPrevStrikeBonus = function () {
  var prev = this.currFrameNum - 1;
  if(prev >= 0 && this.frames[prev].isStrike() &&
    !this.currFrame.isStrike()) {
      this.frames[prev].bonus0 = this.ball1;
      if(this.currFrame.isRollsComplete()) {
        this.frames[prev].bonus1 = this.ball2;
      }
  }
};

Game.prototype.calcPrevDoubleStrikeBonus = function () {
  var prev = this.currFrameNum - 1;
  var prevprev = this.currFrameNum - 2;
  if(prevprev >= 0 &&
    this.frames[prevprev].isStrike() &&
    this.frames[prev].isStrike()) {
      this.frames[prevprev].bonus0 = 10;
      this.frames[prevprev].bonus1 = this.ball1;
    }
};

Game.prototype.lastFrameBonus = function () {
  var currFrameNum = this.currFrameNum;
  if (currFrameNum === 10 && this.frames[9].isStrike() &&
    this.frames[9].bonus1===null) { return true; }
  if (currFrameNum === 11 && this.frames[9].isStrike() &&
    this.frames[10].isStrike() && (this.frames[10].bonus0===null)) { return true; }
  if (this.frames[9].isSpare() && (this.frames[9].bonus0===null)) { return true; }
  return false;
};

// currFrameNum === 11 &&
