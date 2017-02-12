'use strict';

function Game () {
  this._frames = new Array();
  this._scores = [0];
  this._strike = [];
  this._spare = [];
};

Game.prototype.getScore = function () {
  return this._scores._last();
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
  if (this.getScore() == 0) {
    return 'Gutter Game';
  } else if (this.getScore() == 300) {
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
    this._strike.push(true);
    this._spare.push(false);
  }
  else if (frame.isSpare()) {
    this._scores[frameNumber+1] = null;
    this._spare.push(true);
    this._strike.push(false);
  }
  else {
    // console.log('fm='+this._scores[frameNumber]);
    this._scores[frameNumber+1] = this._scores[frameNumber] + frame.getFrameScore();
    this._spare.push(false);
    this._strike.push(false);
  }
  this._fillInNullScores(frameNumber);
};

Game.prototype._fillInNullScores = function (frameNumber) {
  var frame = this._frames[frameNumber];
  if (frameNumber >= 1 && this._spare[frameNumber - 1] == true) {
     var delta = this._scores[frameNumber - 1] + this._frames[frameNumber-1].getFrameScore() + this._frames[frameNumber].getFrame()[0];
     this._scores[frameNumber] += delta;
     this._scores[frameNumber+1] += delta;
  }
  if (frameNumber >= 2 && this._strike[frameNumber - 1] == true && this._strike[frameNumber - 2] == true) {
    this._scores[frameNumber-1] = this._scores[frameNumber - 2] + 30;
  }
  if (!frame.isStrike() && this._strike[frameNumber - 1] == true) {
    var delta = this._scores[frameNumber - 1] + this._frames[frameNumber-1].getFrameScore() + this._frames[frameNumber].getFrameScore();
    this._scores[frameNumber] += delta;
    this._scores[frameNumber+1] += delta;
  }
}

Game.prototype._finalCalculations = function () {
  var frame = new Frame();
  frame.rollOneFrame(0,0);
  this.addNewFrame(frame);
  this._scores.pop();
  this._scores.pop();
}

// Can be moved to arrays

Array.prototype._last = function () {
  return this[this.length - 1];
};
