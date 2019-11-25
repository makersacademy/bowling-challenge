"use strict";

function Game() {
  this.frames = [];
}

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

Game.prototype.finalScore = function() {
  var finalScore = 0;
  for(var x = 0; x < 9; x++) {
    if (this.frames[x].isAStrike()) {
      finalScore += this._calculateStrikeChain(x);
    } else {
      if (this.frames[x].isASpare()) {
        finalScore += this.frames[x].getFrameScore() +
                      this.frames[x + 1].getFirstRoll();
      } else {
        finalScore += this.frames[x].getFrameScore();
      }
    }
  }
  finalScore += this.frames[x].get10thFrameScore();
  console.log(finalScore);
  return finalScore;
};

Game.prototype._calculateStrikeChain = function(index) {
  var strikeScore = 0;
  if (index === 8) {
    return this._thisAndNextFrameScore(index)
  }

  if (this.frames[index + 1].isAStrike()) {
      strikeScore += this._thisAndNextFrameScore(index) +
                    this.frames[index + 2].getFirstRoll();
  } else {
      strikeScore += this._thisAndNextFrameScore(index);
  }
  return strikeScore;
};


Game.prototype._thisAndNextFrameScore = function(index) {
  var score = this.frames[index].getFrameScore() +
              this.frames[index + 1].getFrameScore();
  return score;
}
