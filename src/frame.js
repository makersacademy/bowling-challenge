"use strict";

/* eslint-disable no-underscore-dangle */
function Frame() {
}

Frame.prototype.score = function score() {
  return { score1: this._score1, score2: this._score2, total: this._total };
};

Frame.prototype.addScore = function addScore( scoreString ) {
  const score = parseInt( scoreString, 10 );
  if ( this._score1 === undefined ) {
    this._score1 = score;
    this._total = score;
  } else if ( this._score2 === undefined ) {
    this._score2 = score;
    this._total += score;
  }
};
