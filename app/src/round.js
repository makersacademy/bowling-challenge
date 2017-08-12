'use strict';

function Round(isLastRound = false) {
  this.results = [];
  this.complete = false;
  this.isLastRound = isLastRound
};

Round.prototype.store = function(score) {
  if(this.rollError(score)) { return; }
  this.results.push(score);
  if(this.isRoundOver()) { this.endRound() }
};

Round.prototype.rollError = function(score) {
  return score > 10
         || (this.results.length === 1
            && this.getRoll(0) + score > 10
            && this.getRoll(0) !== 10)
         || (this.results.length === 2
            && this.getRoll(0) === 10
            && this.getRoll(1) !== 10
            && this.getRoll(1) + score > 10)
};

Round.prototype.rollNumber = function() {
  return this.results.length + 1;
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
