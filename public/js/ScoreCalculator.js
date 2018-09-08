"use strict";

function ScoreCalculator() {
  this._currentTurn = { frame: 1, roll: 1 };
  this._scoreArray = Array(10).fill(0);
  this._strikeFrame = 0;
  this._spareFrame = 0;
};

ScoreCalculator.prototype.increment = function(knockedPins, nextTurn) {
  this.incrementFrameTotal(knockedPins);
  var currentTotal = this.calculateCurrentTotal();
  this._currentTurn = nextTurn;
  return currentTotal;
};

ScoreCalculator.prototype.incrementFrameTotal = function(knockedPins) {
  this._addKnockedPinsToArray(knockedPins);
  this._strikeFrame !== 0 ? this._addStrikeScores(knockedPins) : null;
  this._spareFrame !== 0 ? this._addSpareScores(knockedPins) : null;
  this._logIfStrike(knockedPins);
  this._currentTurn.roll == 2 ? this._logIfSpare() : null;
  console.log(this._spareFrame);
};

ScoreCalculator.prototype._addKnockedPinsToArray = function(knockedPins) {
  var index = this._currentTurn.frame - 1;
  this._scoreArray[index] += knockedPins;
};

ScoreCalculator.prototype._addStrikeScores = function(knockedPins) {
  if (this._currentTurn.frame === this._strikeFrame + 1) {
    var currentIndex = this._currentTurn.frame - 1;
    var strikeIndex = this._strikeFrame - 1;
    this._scoreArray[strikeIndex] += knockedPins;
  };
};

ScoreCalculator.prototype._logIfStrike = function(knockedPins) {
  if (knockedPins === 10) {
    this._strikeFrame = this._currentTurn.frame;
  };
};

ScoreCalculator.prototype._logIfSpare = function() {
  var index = this._currentTurn.frame - 1;
  if (this._scoreArray[index] === 10) {
    this._spareFrame = this._currentTurn.frame;
  };
};

ScoreCalculator.prototype._addSpareScores = function(knockedPins) {
  if (this._currentTurn.frame === this._spareFrame + 1 && this._currentTurn.roll === 1) {
    var currentIndex = this._currentTurn.frame - 1;
    var spareIndex = this._spareFrame - 1;
    this._scoreArray[spareIndex] += knockedPins;
  };
};

ScoreCalculator.prototype.calculateCurrentTotal = function() {
  return this._scoreArray.reduce((a, b) => a + b, 0);
};
