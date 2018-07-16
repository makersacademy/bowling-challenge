'use strict';

var Scorecard = function() {
  this._baseScores = [];
  this._finalScores = [];
  this._frame = [];
  this._strike = false;
  this._spare = false;
  this._roll = 1;
  this._turn = 1;
};

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

Scorecard.prototype.isStrike = function() {
  return this._strike;
};

Scorecard.prototype.isSpare = function() {
  return this._spare;
};

Scorecard.prototype.calculateFrameScore = function() {
  var frameScore = 0;
  for (var i = 0; i < this.getFrame().length; i++) {
    frameScore += this.getFrame()[i];
  };
  this._finalScores.push([frameScore]);
};

Scorecard.prototype.enterScore = function(score) {
  this._frame.push(score);
  if (score === 10 && this.getRoll() === 1) {
    if (this.isStrike === true || this.isSpare === true) {
      this.finalScores[(this.getFinalScores().length) - 1] += 10;
    }
    this._frame.push(0);
    this._strike = true;
    this.endTurn();
  } else if ((this.getFrame()[0] + this.getFrame()[1]) === 10) {
    this._spare = true;
    this.endTurn();
  } else if (this.getRoll() === 1) {
    if (this.isSpare === true) {
      this._finalScores[(this.getFinalScores().length) - 1] += score;
    }
    this._roll = 2;
  } else {
    if (this.isStrike === true && this.getRoll() === 2) {
      this._finalScores[(this.getFinalScores().length) - 1] += (this.getFrame()[0] + this.getFrame()[1]);
      this._strike = false;
    } else if (this.isSpare === true && this.getRoll() === 2) {
      this._finalScores[(this.getFinalScores().length) - 1] += this.getFrame()[0];
      this._spare = false;
    }
    this.endTurn();
  };
};

Scorecard.prototype.endTurn = function() {
  if (this.getTurn() < 10) {
    this.calculateFrameScore();
    this._baseScores.push(this._frame);
    this._frame = [];
    this._turn += 1;
    this._roll = 1;
  };
};
