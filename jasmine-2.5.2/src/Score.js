'use strict';

function Score() {
  this._hits = 0;
  this._bonus = 0;
  this._rollTotal = 0;
  this._runningTotal = 0;
};
Score.prototype.getHits = function() {return this._hits;};
Score.prototype.getBonus = function() {return this._bonus;};
Score.prototype.getRollTotal = function() {return this._rollTotal;};
Score.prototype.getRunningTotal = function() {return this._runningTotal;};

Score.prototype.setHits = function(hits) {
  this._hits = hits;
};
Score.prototype.setBonus = function(multiplier) {
  this._bonus = this._hits * multiplier;
};
Score.prototype.updateRollTotal = function(frame) {
  this._rollTotal = this.getBonus();
  if (frame < 11) this._rollTotal += this.getHits();
};
Score.prototype.updateRunningTotal = function() {
  this._runningTotal += this.getRollTotal();
};
