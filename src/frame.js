"use strict";

function Frame(numberOfPins){
  this._balls = [];
  this._BALLS_NUMBER = 2;
  this._PIN_NUMBER = numberOfPins; //wonder if this will attract spiders?
}

Frame.prototype.addBall = function (pinNumber) {
  this._balls.push(pinNumber);
};

Frame.prototype.getBalls = function () {
  return this._balls;
};

Frame.prototype.isStrike = function(){
  if (this._isOutOfPins()){
    if(this._isOutOfBalls()){
      return false
    }else{
      return true
    }
  }
}

Frame.prototype.pinsDown = function() {
  return this._balls.reduce(function(a, b) { return a + b; }, 0);
};

Frame.prototype.isComplete = function () {
  return (this._isOutOfPins() || this._isOutOfBalls());
};

Frame.prototype._isOutOfBalls = function(){
  return this._balls.length >= this._BALLS_NUMBER
};

Frame.prototype._isOutOfPins = function(){
  return this.pinsDown() >= this._PIN_NUMBER;
};
