'use strict';

function ScoreCard(rounds, parser) {
  this.results = rounds;
  this.lastRound = 9;
  this.parser = parser;
};

ScoreCard.prototype.process = function(score, roundNumber) {
  if(this.isComplete()) { return; }
  return this.results[roundNumber].store(score);
};

ScoreCard.prototype.getMaximumScore = function(round) {
  return this.results[round].maxPossibleScore();
};

ScoreCard.prototype.getRound = function(round) {
  var round = this.results[round];
  if(round) { return round.results; }
  return [];
}

ScoreCard.prototype.roll = function(round) {
  return this.results[round].rollNumber();
};

ScoreCard.prototype.isComplete = function() {
  if(this.results[this.lastRound].isRoundOver()) { return true; }
};

ScoreCard.prototype.isLastRound = function(roundNumber) {
  return roundNumber === this.lastRound;
};

ScoreCard.prototype.isRoundOver = function(roundNumber) {
  return this.results[roundNumber].complete;
};

ScoreCard.prototype.parse = function() {
  return this.parser.parse(this.results);
};
