"use strict";

/* eslint-disable no-underscore-dangle */
function Frame10() {
  this._score1 = null;
  this._score2 = null;
  this._score3 = null;
  this._total = null;
}

Frame10.prototype.addScore = function addScore( score ) {
  if ( this._score1 === null ) {
    this._score1 = score;
  } else if ( this._score2 === null ) {
    this._score2 = score;
  } else {
    this._score3 = score;
  }
};

Frame10.prototype.isComplete = function isComplete() {
  const firstBallStrike = this.score1 === 10;
  const twoBallSpare = this.score1 + this.score2 === 10;
  const needsThreeScores = firstBallStrike || twoBallSpare;
  if ( ( needsThreeScores && this.score3 === null ) || this.score2 == null ) {
    return false;
  } else {
    return true;
  }
};

Frame10.prototype.hasAllBonuses = function hasAllBonuses() {
  return true;
};

Frame10.prototype.calcTotal = function calcTotal( currentScore ) {
  this._total = this.score1 + this.score2 + this.score3 + currentScore;
};

Frame10.prototype.isSpare = function isSpare() {
  return false;
};

Frame10.prototype.isStrike = function isStrike() {
  return false;
};

Frame10.prototype.maxNextScore = function maxNextScore() {
  if ( this.score1 === null && this.score2 === null && this.score3 === null ) {
    return 10;
  }

  if ( this.score1 === 10 ) {
    return 10;
  }

  if ( this.score1 < 10 ) {
    return 10 - this.score1;
  }
};

Object.defineProperty( Frame10.prototype, "score1", {
  get: function score1() {
    return this._score1;
  }
} );

Object.defineProperty( Frame10.prototype, "score2", {
  get: function score2() {
    return this._score2;
  }
} );

Object.defineProperty( Frame10.prototype, "score3", {
  get: function score2() {
    return this._score3;
  }
} );

Object.defineProperty( Frame10.prototype, "total", {
  get: function score1() {
    return this._total;
  },
  set: function score1( total ) {
    this._total = total;
  }
} );
