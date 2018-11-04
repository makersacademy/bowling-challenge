'use strict';

function Scorecard() {
  this._frames = [];
  for(var i = 0; i < 10; ++i) {
    this._frames[i] = new Frame();
  };
};

Scorecard.prototype.getTotalScore = function() {
  var totalScore = 0;
  for(var frame in this._frames) {
    let rolls = this.getFrames()[frame].getRolls();
    for(var roll in rolls) {
      totalScore += rolls[roll].getScore();
    }
  }
  return totalScore;
};

Scorecard.prototype.getFrames = function() {
  return this._frames;
};
