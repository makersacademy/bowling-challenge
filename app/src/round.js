'use strict';

function Round(isLastRound = false) {
  this.results = [];
  this.complete = false;
  this.isLastRound = isLastRound
};

Round.prototype.store = function(score) {
  if(score > this.maxPossibleScore()) { return false; }
  this.results.push(score);
  if(this.isRoundOver()) { this.endRound() }
  return true;
};

Round.prototype.maxPossibleScore = function() {
  if(this.roundSum() % 10 === 0) {
    return 10;
  } else {
    return 10 - this.getRoll(this.rollNumber() - 1);
  }
};

Round.prototype.rollNumber = function() {
  return this.results.length;
}

Round.prototype.getRoll = function(roll) {
  return this.results[roll] || 0;
};

Round.prototype.isRoundOver = function() {
  if(this.isLastRound) {
    return this.results.length === 3 || this.results.length === 2 && this.roundSum() < 10;
  } else {
    return this.getRoll(0) === 10 || this.results.length === 2;
  }
};

Round.prototype.endRound = function() {
  this.complete = true;
};

Round.prototype.roundSum = function() {
  var total = 0;
  this.results.forEach(function(item) { total += item; });
  return total;
};
