'use strict;'

function Game(frameKlass) {
  this.frames = [];
  this.currFrameNum = 0;
  this.totalScore = [];
  this.frameKlass = frameKlass;
  this.currFrame = new this.frameKlass();

}

Game.prototype.addRoll = function (pinsDown) {
  this.currFrameNum = this.frames.length;
  if (this.currFrameNum < 10 || this.lastFrameBonus()) {
    this.currFrame.addRoll(pinsDown);
  } else {
    throw new Error("Max frames");
  }
  this.calcPrevBonuses(pinsDown);
  this._updateTotalScore();
  // this._updateFrameScores();
  if(this.currFrame.isRollsComplete()) {
    this.frames.push(this.currFrame)
    this._updateTotalScore();
    // this._updateFrameScores();
    this.currFrame = new this.frameKlass();
  }
};

// Game.prototype._updateFrameScores = function() {
  // this.ball1 = this.currFrame.rolls[0];
  // this.ball2 = this.currFrame.rolls[1];
  // this.calcPrevSpareBonus();
  // this.calcPrevStrikeBonus();
  // this.calcPrevDoubleStrikeBonus();
  // this.calcPrevBonuses();
  // this._updateTotalScore();
// };

Game.prototype._updateTotalScore = function() {
  for(var i = 0; i < this.frames.length; i++) {
    this.totalScore[i] = this.frames[i].calcTotal() + ( this.totalScore[i-1] || 0 );
  }
};

Game.prototype.calcPrevBonuses = function (pinsDown) {
  for(var i = 0; i < this.frames.length; i++) {
    if(this.frames[i].bonusBalls >= 1) {
      this.frames[i].addBonus(pinsDown)
    }
  }
};

// Game.prototype.calcPrevSpareBonus = function () {
//   var prev = this.currFrameNum - 1;
//   if(this.frames[prev] && this.frames[prev].isSpare()) {
//     this.frames[prev].bonus[0] = this.ball1;
//   }
// };
//
// Game.prototype.calcPrevStrikeBonus = function () {
//   var prev = this.currFrameNum - 1;
//   if(prev >= 0 && this.frames[prev].isStrike() &&
//     !this.currFrame.isStrike()) {
//       this.frames[prev].bonus[0] = this.ball1;
//       if(this.currFrame.isRollsComplete()) {
//         this.frames[prev].bonus[1] = this.ball2;
//       }
//   }
// };
//
// Game.prototype.calcPrevDoubleStrikeBonus = function () {
//   var prev = this.currFrameNum - 1;
//   var prevprev = this.currFrameNum - 2;
//   if(prevprev >= 0 &&
//     this.frames[prevprev].isStrike() &&
//     this.frames[prev].isStrike()) {
//       this.frames[prevprev].bonus[0] = 10;
//       this.frames[prevprev].bonus[1] = this.ball1;
//     }
// };

Game.prototype.lastFrameBonus = function () {
  // var currFrameNum = this.currFrameNum;
  // if (currFrameNum === 10 && this.frames[9].isStrike() &&
  //   !this.frames[9].isFrameClosed()) { return true; }
  // if (currFrameNum === 11 && this.frames[9].isStrike() &&
  //   this.frames[10].isStrike() && !this.frames[10].isFrameClosed())   { return true; }
  // if (this.frames[9].isSpare() && !this.frames[9].isFrameClosed()) { return true; }
  if (!this.frames[9].isFrameClosed()) { return true; }
  return false;
};
