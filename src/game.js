"use strict";

/* eslint-disable no-underscore-dangle */

function Game() {
  this._currentScore = 0;
  this._frames = [];
  for ( let i = 0; i < 10; i += 1 ) {
    this._frames.push( new Frame() );
  }
  this._currentFrameNumber = 0;
}

Game.prototype.addScore = function addScore( scoreString ) {
  const score = parseInt( scoreString, 10 );
  this._frames[ this._currentFrameNumber ].addScore( score );
  this._currentScore += score;
};

Game.prototype.currentScore = function currentScore() {
  return this._currentScore;
};

Game.prototype.frame = function frame(number) {
  return this._frames[ number ];
};
