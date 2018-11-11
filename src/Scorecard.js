'use strict';

function Scorecard() {
  this._frames = [];
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

Scorecard.prototype.getLastFrame = function() {
  return this._frames.length == 0 ? null : this._frames[this._frames.length - 1];
};

Scorecard.prototype.createNewFrame = function() {
  let frame = new Frame();
  this._frames.push(frame);
};

Scorecard.prototype.getScores = function() {
  var scores = [];
  for(var frame in this._frames) {
    let rolls = this.getFrames()[frame].getRolls();
    if (rolls.length != 2) {
      break;
    }
    var roll_score = 0;
    for(var roll in rolls) {
      roll_score += rolls[roll].getScore();
    }
    scores.push(roll_score);
  }
  return scores;
};