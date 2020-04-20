"use strict";

/* eslint-disable no-underscore-dangle */

function Game() {
  this._currentScore = 0;
  this._frames = [];
  for ( let i = 0; i < 10; i += 1 ) {
    this._frames.push( new Frame() );
  }
  this._currentFrameNumber = 0;
  this._currentFrame = this._frames[ this._currentFrameNumber ];
  this._framesNeedingBonuses = [];
}

Game.prototype.addScore = function addScore( scoreString ) {
  const score = parseInt( scoreString, 10 );
  this._addBonusToFrames( score );
  this._currentFrame.addScore( score );
  if ( this._currentFrame.isComplete() ) {
    this._handleCompleteFrame();
  }
};

Game.prototype.currentScore = function currentScore() {
  return this._currentScore;
};

Game.prototype.frame = function frame( number ) {
  return this._frames[ number ];
};

Game.prototype._handleCompleteFrame = function _handleCompleteFrame() {
  if ( this._currentFrame.hasAllBonuses() ) {
    this._currentFrame.calcTotal( this._currentScore );
    this._currentScore = this._currentFrame.total;
  } else {
    this._framesNeedingBonuses.push( this._currentFrame );
  }

  this._currentFrameNumber += 1;
  this._currentFrame = this._frames[ this._currentFrameNumber ];
};

Game.prototype._addBonusToFrames = function _addBonusToPreviousSpare( bonus ) {
  this._framesNeedingBonuses.forEach( ( frame ) => {
    frame.addBonus( bonus );
    if ( frame.hasAllBonuses() ) {
      frame.calcTotal( this._currentScore );
      this._currentScore = frame.total;
    }
  } );

  this._framesNeedingBonuses = this._framesNeedingBonuses.filter( ( frame ) => { return !frame.hasAllBonuses(); } );
};
