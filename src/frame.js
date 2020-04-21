"use strict";

/* eslint-disable no-underscore-dangle */
function Frame() {
  this._total = null;
  this._score1 = null;
  this._score2 = null;
  this._bonusScore = 0;
  this._bonusesRequired = 0;
}

Frame.prototype.addScore = function addScore( score ) {
  if ( this._score1 === null ) {
    this._score1 = score;
    if ( this.isStrike() ) {
      this._bonusesRequired = 2;
    }
  } else if ( this._score2 === null ) {
    this._score2 = score;
    if ( this.isSpare() ) {
      this._bonusesRequired = 1;
    }
  }
};

Frame.prototype.isComplete = function isComplete() {
  const bothScoresSet = this.score1 !== null && this.score2 !== null;
  return this.isStrike() || bothScoresSet;
};

Frame.prototype.calcTotal = function calcTotal( currentScore = 0 ) {
  this.total = this.score1 + this.score2 + this._bonusScore + currentScore;
};

Frame.prototype.isSpare = function isSpare() {
  const bothScoresReceived = this.score1 != null && this.score2 != null;
  return bothScoresReceived && this.score1 + this.score2 === 10;
};

Frame.prototype.isStrike = function isStrike() {
  return this.score1 === 10;
};

Frame.prototype.addBonus = function addBonus( bonus ) {
  if ( this._bonusesRequired > 0 ) {
    this._bonusScore += bonus;
    this._bonusesRequired -= 1;
  }
};

Frame.prototype.hasAllBonuses = function hasAllBonuses() {
  return this._bonusesRequired === 0;
};

Object.defineProperty( Frame.prototype, "score1", {
  get: function score1() {
    return this._score1;
  }
} );

Object.defineProperty( Frame.prototype, "score2", {
  get: function score2() {
    return this._score2;
  }
} );

Object.defineProperty( Frame.prototype, "total", {
  get: function score1() {
    return this._total;
  },
  set: function score1( total ) {
    this._total = total;
  }
} );
