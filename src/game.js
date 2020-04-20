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
}

Game.prototype.addScore = function addScore( scoreString ) {
  const score = parseInt( scoreString, 10 );
  this._addBonusToPreviousSpare( score );
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
  if ( !this._currentFrame.isSpare() ) {
    this._currentFrame.calcTotal( this._currentScore );
    this._currentScore = this._currentFrame.total;
  }

  this._currentFrameNumber += 1;
  this._currentFrame = this._frames[ this._currentFrameNumber ];
};

Game.prototype._addBonusToPreviousSpare = function _addBonusToPreviousSpare( bonus ) {
  if ( this._currentFrameNumber !== 0 ) {
    this.frame( this._currentFrameNumber - 1 ).addBonus( bonus );
    if ( this.frame( this._currentFrameNumber - 1 ).hasAllBonuses() && this.frame( this._currentFrameNumber - 1 ).isSpare() ) {
      this.frame( this._currentFrameNumber - 1 ).calcTotal( this._currentScore );
    }
  }
};
