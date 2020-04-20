"use strict";

/* eslint-disable no-underscore-dangle */
function Frame10() {
  this._score1 = null;
  this._score2 = null;
  this._score3 = null;
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