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
  var currFrameNum = this.currFrameNum;
  var ball0 = frame.showRolls()[0];
  var ball1 = frame.showRolls()[1];
  this.frameScores[currFrameNum] = ball0 + ball1;
};

Game.prototype._updateTotalScore = function(frame) {
  this.totalScore = 0;
  var totalframes = Math.min(this.frames.length, 10);
  for(var i = 0; i < totalframes; i++) {
    this.totalScore += this.frameScores[i];
  }
}



// if (currFrameNum >= 1 && this.prevFrame().spare)
//   this.prevFrameScoreIs(10 + frame.ball1);
//
// if (currFrameNum >= 1 && this.prevFrame().strike)
//   this.prevFrameScoreIs(10 + frame.ball1 + frame.ball2);
//
// if (currFrameNum >= 2 && this.prevDoubleStrike())
//   this.prevPrevFrameScoreIs(20 + frame.ball1);
