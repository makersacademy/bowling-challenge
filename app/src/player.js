'use strict';

function Player(scoreCard) {
  this.scoreCard = scoreCard;
  this.finished = false
};

Player.prototype.bowl = function(score, roundNumber) {
  if(this.finished) { return; }
  this.scoreCard.process(score, roundNumber);
  if(this.isFinished()) { this.finish(); }
};

Player.prototype.roll = function(round) {
  return this.scoreCard.roll(round)
}

Player.prototype.isRoundOver = function(roundNumber) {
  return this.scoreCard.isRoundOver(roundNumber)
};

Player.prototype.isFinished = function() {
  return this.scoreCard.isComplete();
};

Player.prototype.finish = function() {
  this.finished = true;
};
