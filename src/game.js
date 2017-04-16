'use strict';

function Game(){

this._framesInPlay = [];
this._randRoll1 = 0;
this._randRoll2 = 0;
this._currentFrame;
}

Game.prototype.roll = function (knockedPins) {
  if ( this._framesInPlay.length === 9 ) {
    this._tenthRoll(knockedPins);
  } else if ( this._currentFrame == undefined  ) {
    this._currentFrame = new Frame(knockedPins);
    this._currentFrame.checkStrike(knockedPins);
  } else if ( this._currentFrame._rollNumber === 1 ) {
    this._currentFrame.playSecondRoll(knockedPins);
    this._currentFrame.checkSpare(knockedPins);
    this._currentFrame._rollNumber += 1;
  } else {
    this._framesInPlay.push(this._currentFrame);
    this._currentFrame = new Frame(knockedPins);
    this._currentFrame.checkStrike(knockedPins);
    };
}

Game.prototype._tenthRoll = function (knockedPins) {
  if ( this._currentFrame._isStrike && (this._currentFrame._rollNumber === 2 || this._currentFrame._rollNumber === 3) ){
    this._currentFrame.playBonusRoll(knockedPins);
    this._currentFrame._rollNumber += 1;
  } else if ( this._currentFrame._rollNumber === 1 ) {
    this._currentFrame.playSecondRoll(knockedPins);
    this._currentFrame.checkSpare(knockedPins);
    this._currentFrame._rollNumber += 1;
  } else if ( this._currentFrame._isSpare ) {
    this._currentFrame.playBonusRoll(knockedPins);
  }

}

Game.prototype.getFrameScore = function () {
  var frame = this._framesInPlay[this._framesInPlay.length - 1];

  if ( frame._isStrike ){
    frame.setScore( frame.getFirstRoll() + frame.getSecondRoll() + this._currentFrame.getFirstRoll() + this._currentFrame.getSecondRoll() );
  } else if ( frame._isSpare ){
    frame.setScore( frame.getFirstRoll() + frame.getSecondRoll() + this._currentFrame.getFirstRoll() );
  } else {
    frame.setScore( frame.getFirstRoll() + frame.getSecondRoll() );
    };

  return frame.getScore();
}




Game.prototype.generateRandRoll1 = function () {
  this._randRoll1 = Math.floor(Math.random() * 11);
};

Game.prototype.generateRandRoll2 = function () {
  this._randRoll2 = Math.floor(Math.random() * (11 - this._randRoll1))
};
