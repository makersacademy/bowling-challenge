'use strict';

function Player(scoreCard) {
  this.scoreCard = scoreCard;
  this.finished = false
};

Player.prototype.bowl = function(score, roundNumber) {
  if(this.finished) { return false; }
  var status = this.scoreCard.process(score, roundNumber);
  if(this.isFinished()) { this.finish(); }
  return status;
};

Player.prototype.getMaximumScore = function(round) {
  return this.scoreCard.getMaximumScore(round);
};

Player.prototype.getRound = function(round) {
  return this.scoreCard.getRound(round);
};

Player.prototype.roll = function(round) {
  return this.scoreCard.roll(round);
};

Player.prototype.isRoundOver = function(roundNumber) {
  return this.scoreCard.isRoundOver(roundNumber);
};

Player.prototype.isFinished = function() {
  return this.scoreCard.isComplete();
};

Player.prototype.finish = function() {
  this.finished = true;
};
