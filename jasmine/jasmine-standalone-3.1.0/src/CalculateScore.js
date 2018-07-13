'use strict';

function CalculateScore() {
  this._score = 0;
}

CalculateScore.prototype.calculateScore = function(pins) {
  return this._score += pins
};


CalculateScore.prototype.getScore = function() {
  return this._score
};
