"use strict";

function ScoreCalculator() {
  this._currentTurn = { frame: 1, roll: 1 };
  this._nextTurn = {};
  this._scoreArray = Array(10).fill(0);
  this._runningTotal = 0;
  this._strike = { frame: 0 };
};

ScoreCalculator.prototype.increment = function(knockedPins, nextTurn) {
  this._nextTurn = nextTurn;
  this.incrementFrameTotal(knockedPins);
  this.calculateCurrentTotal();
  this._currentTurn = nextTurn;
  return this._runningTotal;
};

ScoreCalculator.prototype.incrementFrameTotal = function(knockedPins) {
  this._addKnockedPinsToArray(knockedPins);
  this._logIfStrike(knockedPins);
  this._addStrikeScores(knockedPins);
};

ScoreCalculator.prototype._addKnockedPinsToArray = function(knockedPins) {
  var index = this._currentTurn.frame - 1;
  this._scoreArray[index] += knockedPins;
};

ScoreCalculator.prototype._logIfStrike = function(knockedPins) {
  if (knockedPins === 10) {
    this._strike = { frame: this._currentTurn.frame };
  };
};

ScoreCalculator.prototype._addStrikeScores = function(knockedPins) {
  if (this._currentTurn.frame === this._strike.frame + 1) {
    console.log("In if" + this._scoreArray)
    var currentIndex = this._currentTurn.frame - 1;
    var strikeIndex = this._strike.frame - 1;
    this._scoreArray[strikeIndex] += knockedPins;
    console.log(this._scoreArray)
  };
};

ScoreCalculator.prototype.calculateCurrentTotal = function() {
  this._runningTotal = this._scoreArray.reduce((a, b) => a + b, 0);
};
