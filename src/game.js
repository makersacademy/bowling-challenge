"use strict";

/* eslint-disable no-underscore-dangle */

function Game() {
  this._currentScore = 0;
  this._frame = new Frame();
}

Game.prototype.addScore = function addScore( score ) {
  this._frame.addScore( score );
  this._currentScore += score;
};

Game.prototype.currentScore = function currentScore() {
  return this._currentScore;
};

Game.prototype.frame = function frame(number) {
  return this._frame;
};
