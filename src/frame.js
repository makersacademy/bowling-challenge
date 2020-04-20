"use strict";

/* eslint-disable no-underscore-dangle */
function Frame() {
  this._total = null;
  this._score1 = null;
  this._score2 = null;
}

Frame.prototype.addScore = function addScore( score ) {
  if ( this._score1 === null ) {
    this._score1 = score;
  } else if ( this._score2 === null ) {
    this._score2 = score;
  }
};

Frame.prototype.isComplete = function isComplete() {
  return this.score1 !== null && this.score2 !== null;
};

Frame.prototype.calcTotal = function calcTotal() {
  this.total = this.score1 + this.score2;
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
