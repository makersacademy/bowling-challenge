'use strict';

function Round(isLastRound = false) {
  this.results = [];
  this.complete = false;
  this.isLastRound = isLastRound
  this.MAXIMUMSCORE = 10
};

Round.prototype.store = function(score) {
  if(score > this.maxPossibleScore()) { return false; }
  this.results.push(score);
  if(this.isRoundOver()) { this.endRound() }
  return true;
};

Round.prototype.maxPossibleScore = function() {
  if(this.roundSum() % this.MAXIMUMSCORE === 0) {
    return this.MAXIMUMSCORE;
  } else {
    return this.MAXIMUMSCORE - this.getRoll(this.rollNumber() - 1);
  }
};

Round.prototype.rollNumber = function() {
  return this.results.length;
};

Round.prototype.getRoll = function(roll) {
  return this.results[roll] || 0;
};

Round.prototype.isRoundOver = function() {
  if(this.isLastRound) {
    return this.results.length === 3 || this.results.length === 2 && this.roundSum() < this.MAXIMUMSCORE;
  } else {
    return this.getRoll(0) === this.MAXIMUMSCORE || this.results.length === 2;
  }
};

Round.prototype.endRound = function() {
  if(!this.isLastRound) { this.checkStrikeOrSpare(); }
  this.complete = true;
};

Round.prototype.checkStrikeOrSpare = function() {
  if(this.roundSum() < this.MAXIMUMSCORE) { return; }
  if(this.results.length === 1) { this.isStrike = true; }
  else { this.isSpare = true; }
};

Round.prototype.roundSum = function() {
  var total = 0;
  this.results.forEach(function(item) { total += item; });
  return total;
};
