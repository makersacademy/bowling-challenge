'use strict';

function Game () {
  this._frames = [];
  this._scores = [0];
  this._strike = [];
  this._spare = [];
}

Game.prototype.getScore = function(frameNumber) {
  return this._scores[frameNumber];
};

Game.prototype.addNewFrame = function(frame) {
  this._frames.push(frame);
  this._calculateScore(this._frames.length-1);
};

Game.prototype.finalFrame = function(frame, firstRoll, secondRoll) {
  this.addNewFrame(frame);
  frame.getFrameFinal(firstRoll, secondRoll);
  this.addNewFrame(frame);
  this._finalCalculations();
};

Game.prototype.whichGame = function () {
  if (this.getScore(this._scores.length-1) === 0) {
    return 'Gutter Game';
  }
  else if (this.getScore(this._scores.length-1) === 300) {
    return 'Perfect Game';
  }
  else {
    return 'Ordinary Game';
  }
};

Game.prototype._calculateScore = function(frameNumber) {
  var frame = this._frames[frameNumber];
  if (frame.isStrike()) {
    this._scores[frameNumber+1] = null;
    this._updateStikesAndSpares(true, false);
  }
  else if (frame.isSpare()) {
    this._scores[frameNumber+1] = null;
    this._updateStikesAndSpares(false, true);
  }
  else {
    this._scores[frameNumber+1] = this._scores[frameNumber] + frame.getFrameScore();
    this._updateStikesAndSpares(false, false);
  }
  this._fillInNullScores(frameNumber);
};

Game.prototype._fillInNullScores = function (frameNumber) {
  var frame = this._frames[frameNumber];
  var delta;
  if (frameNumber >= 1 && this._isPreviousFrameSpare(frameNumber)) {
    this._scores[frameNumber] = this._scores[frameNumber-1] + 10 + this._frames[frameNumber].getFrame()[0];
    this._scores[frameNumber+1] = this._scores[frameNumber] + this._frames[frameNumber].getFrame()[1];
  }
  if (frameNumber >= 2 && this._areTwoPreviousFramesStikes(frameNumber)) {
    this._scores[frameNumber-1] = this._scores[frameNumber - 2] + 30;
  }
  if (!frame.isStrike() && this._isPreviousFrameStrike(frameNumber)) {
    delta = this._scores[frameNumber-1] + 10 + this._frames[frameNumber].getFrameScore();
    this._increaseScoresByDelta(frameNumber, delta);
  }
};

Game.prototype._updateStikesAndSpares = function (strike, spare) {
  this._strike.push(strike);
  this._spare.push(spare);
};

Game.prototype._addingPreviousScores = function (frameNumber) {
  return this._scores[frameNumber - 1] + this._frames[frameNumber-1].getFrameScore();
};

Game.prototype._increaseScoresByDelta = function (frameNumber, delta) {
  this._scores[frameNumber] += delta;
  this._scores[frameNumber+1] += delta;
};

Game.prototype._isPreviousFrameSpare = function (frameNumber) {
  return (this._spare[frameNumber - 1] === true);
};

Game.prototype._isPreviousFrameStrike = function (frameNumber) {
  return (this._strike[frameNumber - 1] === true);
};

Game.prototype._areTwoPreviousFramesStikes = function (frameNumber) {
  return (this._strike[frameNumber - 1] === true && this._strike[frameNumber - 2] === true);
};

Game.prototype._finalCalculations = function () {
  var frame = new Frame();
  frame.rollOneFrame(0,0);
  this.addNewFrame(frame);
  this._scores.pop();
  this._scores.pop();
}

if (!Array.prototype._last){
    Array.prototype._last = function(){
        return this[this.length - 1];
    };
};
