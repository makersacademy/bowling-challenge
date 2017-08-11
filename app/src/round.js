'use strict';

function Round(isLastRound = false) {
  this.result = [];
  this.complete = false;
  this.isLastRound = isLastRound
};

Round.prototype.store = function(score) {
  if(this.rollError(score)) { return; }
  this.result.push(score);
  if(this.isRoundOver()) { this.endRound() }
};

Round.prototype.rollError = function(score) {
  return score > 10
         || (this.result.length === 1
            && this.getRoll(0) + score > 10
            && this.getRoll(0) !== 10)
         || (this.result.length === 2
            && this.getRoll(0) === 10
            && this.getRoll(1) !== 10
            && this.getRoll(1) + score > 10)
};

Round.prototype.getRoll = function(roll) {
  return this.result[roll] || 0;
};

Round.prototype.isRoundOver = function() {
  if(this.isLastRound) {
    return this.result.length === 3 || this.result.length === 2 && this.roundSum() < 10;
  } else {
    return this.getRoll(0) === 10 || this.result.length === 2;
  }
};

Round.prototype.endRound = function() {
  this.complete = true;
};

Round.prototype.roundSum = function() {
  var total = 0;
  this.result.forEach(function(item) {
    total += item;
  });
  return total;
};
