"use strict";

function Game() {
  this.frames = [];
}

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

Game.prototype.finalScore = function() {
  var finalScore = 0;
  for(var x = 0; x < this.frames.length; x++) {
    var firstRoll = this.frames[x].getFirstRoll()
    if (this.frames[x].isAStrike()) {
      finalScore += this._calculateStrikeChain(x);
    } else {
      finalScore += this.frames[x].getFrameScore();
    }
  }
    return finalScore;
};

Game.prototype._calculateStrikeChain = function(index) {
  var strikeScore = 0;
  if (this.frames[index + 1].isAStrike()) {
    if (this.frames[index + 2].isAStrike()) {
      strikeScore += this.frames[index].getFrameScore() +
                    this.frames[index + 1].getFrameScore() +
                    this.frames[index + 2].getFrameScore();

    } else {
      strikeScore += this.frames[index].getFrameScore() +
                    this.frames[index + 1].getFrameScore() +
                    this.frames[index + 2].getFirstRoll();
    }
  } else {
  strikeScore += this.frames[index].getFrameScore() +
                this.frames[index + 1].getFrameScore();
  }
  return strikeScore;
};
