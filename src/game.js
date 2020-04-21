"use strict";

/* eslint-disable no-underscore-dangle */

function Game() {
  this._currentScore = 0;
  this._frames = [];
  for ( let i = 0; i < 9; i += 1 ) {
    this._frames.push( new Frame() );
  }
  this._frames.push( new Frame10() );
  this._currentFrameNumber = 0;
  this._currentFrame = this._frames[ this._currentFrameNumber ];
  this._framesNeedingBonuses = [];
}

Game.prototype.addScore = function addScore( scoreString ) {
  const score = parseInt( scoreString, 10 );
  this._addBonusToPreviousFrames( score );
  this._currentFrame.addScore( score );

  if ( this._currentFrame.isComplete() ) {
    this._handleCompleteFrame();
  }
};

Game.prototype.frame = function frame( number ) {
  return this._frames[ number ];
};

Game.prototype._handleCompleteFrame = function _handleCompleteFrame() {
  if ( this._currentFrame.hasAllBonuses() ) {
    this._updateTotals( this._currentFrame );
  } else {
    this._framesNeedingBonuses.push( this._currentFrame );
  }

  this._currentFrameNumber += 1;
  this._currentFrame = this._frames[ this._currentFrameNumber ];
};

Game.prototype._addBonusToPreviousFrames = function _addBonusToPreviousSpare( bonus ) {
  this._framesNeedingBonuses.forEach( ( frame ) => {
    frame.addBonus( bonus );
    if ( frame.hasAllBonuses() ) {
      this._updateTotals( frame );
    }
  } );
  this._removeFramesWithAllBonuses();
};

Game.prototype._updateTotals = function _updateTotals( frame ) {
  frame.calcTotal( this.currentScore );
  this.currentScore = frame.total;
};

Game.prototype._removeFramesWithAllBonuses = function _removeFramesWithAllBonuses() { 
  this._framesNeedingBonuses = this._framesNeedingBonuses
    .filter( ( frame ) => { return !frame.hasAllBonuses(); } );
};

Object.defineProperty( Game.prototype, "currentScore", {
  get: function currentScore() {
    return this._currentScore;
  },
  set: function currentScore( score ) {
    this._currentScore = score;
  }
} );
