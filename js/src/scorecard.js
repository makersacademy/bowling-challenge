'use strict';

var Scorecard = function() {
  this._baseScores = [];
  this._finalScores = [];
  this._frame = [];
  this._roll = 1;
  this._spareBonus = false;
  this._strikeBonus = false;
  this._strikeDoubleBonus = false;
  this._turn = 1;
};

// Return object properties

Scorecard.prototype.getBaseScores = function() {
  return this._baseScores;
};

Scorecard.prototype.getFinalScores = function() {
  return this._finalScores;
};

Scorecard.prototype.getFrame = function() {
  return this._frame;
};

Scorecard.prototype.getRoll = function() {
  return this._roll;
};

Scorecard.prototype.getScore = function() {
  return this._score;
};

Scorecard.prototype.getTurn = function() {
  return this._turn;
};

// Roll entry and scoring

Scorecard.prototype.enterScore = function(score) {
  this._frame.push(score);
  this.calculateBonus(score);
  this._applyScoreConditions();
};

Scorecard.prototype.calculateFrameScore = function() {
  var frameScore = 0;
  for (var i = 0; i < this.getFrame().length; i++) {
    frameScore += this.getFrame()[i];
  };
  this._finalScores.push(frameScore);
};

Scorecard.prototype.calculateBonus = function(score) {
  if (this._spareBonus === true) {
    this._applySpareBonus(score);
  } else if (this._strikeBonus === true && this.getRoll() === 2 || this._strikeBonus === true && score === 10) {
    this._applyStrikeBonus(score);
  };
};

Scorecard.prototype._applyScoreConditions = function() {
  if (this._isStrike()) {
    this._applyStrikeConditions();
  } else if (this._isSpare()) {
    this._applySpareConditions();
  } else if (this.getRoll() === 1) {
    this._roll = 2;
  } else {
    this._endTurn();
  };
};

Scorecard.prototype.totalScore = function() {
  var total = 0;
  this.getFinalScores().forEach(score => total += score);
  return total;
};

// Strike & Spare logic

Scorecard.prototype._applySpareBonus = function(score) {
  this._finalScores[this.getFinalScores().length - 1] += score;
  this._spareBonus = false;
};

Scorecard.prototype._applyStrikeBonus = function(score) {
  if (score === 10 && this._strikeDoubleBonus === true) {
    this._finalScores[this.getFinalScores().length - 1] += 10
    this._finalScores[this.getFinalScores().length - 2] += 10
    this._strikeDoubleBonus = true;
  } else if (score === 10) {
    this._finalScores[this.getFinalScores().length - 1] += 10
    this._strikeDoubleBonus = true;
  } else {
    this._finalScores[this.getFinalScores().length - 1] += (this.getFrame()[0] + this.getFrame()[1]);
  };
  this._strikeBonus = false;
};

Scorecard.prototype._applySpareConditions = function() {
  this._spareBonus = true;
  this._endTurn();
};

Scorecard.prototype._applyStrikeConditions = function() {
  this._strikeBonus = true;
  this._frame[1] = 0;
  this._endTurn();
};

// Conclude turn

Scorecard.prototype._resetTurn = function() {
  this.calculateFrameScore();
  this._baseScores.push(this._frame);
  this._frame = [];
  this._turn += 1;
  this._roll = 1;
};

Scorecard.prototype._endTurn = function() {
  if (this.getTurn() < 11) {
    this._resetTurn();
  };
};

// Internal boolean logic

Scorecard.prototype._isSpare = function() {
  return this.getFrame()[0] + this.getFrame()[1] === 10;
};

Scorecard.prototype._isStrike = function() {
  return (this.getFrame()[0] === 10) && (this.getRoll() === 1);
};
