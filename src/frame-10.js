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
  return this.score1 !== null && this.score2 !== null && this.score3 !== null;
};

Frame10.prototype.hasAllBonuses = function hasAllBonuses() {
  return true;
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
