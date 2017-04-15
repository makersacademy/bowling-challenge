'use strict';

function Game(){

this._framesInPlay = [];
this._randRoll1 = 0;
this._randRoll2 = 0;
this._currentFrame;
}

Game.prototype.roll = function (knockedPins) {
  if ( this._currentFrame == undefined  ) {
    this._currentFrame = new Frame(knockedPins);
    this._currentFrame.checkStrike(knockedPins);
  } else if ( this._currentFrame._rollNumber === 1 ) {
    this._currentFrame.secondRoll = knockedPins;
    this._currentFrame.checkSpare(knockedPins);
    this._currentFrame._rollNumber += 1;
  } else {
    this._framesInPlay.push(this._currentFrame);
    this._currentFrame = new Frame( knockedPins );
    };
  }






Game.prototype.generateRandRoll1 = function () {
  this._randRoll1 = Math.floor(Math.random() * 11);
};

Game.prototype.generateRandRoll2 = function () {
  this._randRoll2 = Math.floor(Math.random() * (11 - this._randRoll1))
};
