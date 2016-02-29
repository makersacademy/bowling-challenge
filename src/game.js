'use strict;'

function Game(frameKlass) {
  this.frames = [];
  this.totalScore = [];
  this.frameKlass = frameKlass;
  this.currFrame = new this.frameKlass();
  this.MAXFRAMES = 10;
}

Game.prototype.addRoll = function (pinsDown) {
  if (this.frames.length < this.MAXFRAMES || this._lastFrameBonus()) {
    this.currFrame.addRoll(pinsDown);
  } else {
    throw new Error("Max frames");
  }
  this._calcPrevBonuses(pinsDown);
  this._checkReloadNewFrame();
};

Game.prototype._calcPrevBonuses = function (pinsDown) {
  for(var i = 0; i < this.frames.length; i++) {
    if(this.frames[i].bonusBalls >= 1) { this.frames[i].addBonus(pinsDown) }
  }
  this._updateTotalScore();
};

Game.prototype._updateTotalScore = function() {
  for(var i = 0, prev = 0; i < this.frames.length; i++) {
    this.totalScore[i] = this.frames[i].calcTotal() + prev;
    prev = this.totalScore[i];
  }
}

Game.prototype._checkReloadNewFrame = function () {
  if(this.currFrame.isRollsComplete()) {
    this.frames.push(this.currFrame)
    this._updateTotalScore();
    this.currFrame = new this.frameKlass();
  }
};

Game.prototype._lastFrameBonus = function () {
  if (!this.frames[this.MAXFRAMES-1].isFrameClosed()) { return true; }
  return false;
};
