'use strict';

function Scorecard() {
  this._frames = [];
};

Scorecard.prototype.getTotalScore = function() {
  let scores = this.getScores();
  var totalScore = 0;
  if(scores.length > 0) {
    totalScore =  scores[scores.length-1];
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

Scorecard.prototype.calculateFrameScore = function(frameIndex) {
  let frame = this._frames[frameIndex];
  if(!frame.isComplete()) return null;

  var score = null;
  var bonusScore = null;
  if(frame.isStrike()) {
    bonusScore = this.getTwoRollsScore(frameIndex + 1);
  } else if(frame.isSpare()) {
    bonusScore = this.getOneRollScore(frameIndex + 1);
  } else {
    score = this.getTwoRollsScore(frameIndex);
  }
  if(bonusScore != null) {
    score = 10 + bonusScore;
  }

  return score;
};

Scorecard.prototype.getTwoRollsScore = function(frameIndex) {
  if(this._frames.length <= frameIndex) return null;
  var frame = this._frames[frameIndex];
  var score = null;

  if(frame.isStrike()) {
    let bonusScore = getOneRollScore(frameIndex + 1);
    if(bonusScore != null) {
      score = 10 + bonusScore;
    }
  } else {
    let rolls = frame.getRolls();
    if(rolls.length >= 2) {
      score = rolls[0].getScore() + rolls[1].getScore();
    }
  }
  return score;
};

Scorecard.prototype.getOneRollScore = function(frameIndex) {
  if(this._frames.length <= frameIndex) return null;
  var frame = this._frames[frameIndex];
  return frame.getRolls()[0].getScore();
};

Scorecard.prototype.getScores = function() {
  var scores = [];
  var score = 0;
  for(var index = 0; index < this._frames.length; ++index) {
    score += this.calculateFrameScore(index);
    scores.push(score);
  }
  return scores;
};
