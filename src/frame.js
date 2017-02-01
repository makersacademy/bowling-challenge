"use strict";

function Frame(){
  this._balls = [];
  this._PIN_NUMBER = 10;
  this._BALLS_NUMBER = 2;
}

Frame.prototype.addBall = function (pinNumber) {
  this._balls.push(pinNumber);
};

Frame.prototype.getBalls = function () {
  return this._balls;
};

Frame.prototype.isComplete = function () {
  return (this._isOutOfPins() || this._isOutOfBalls());
};

Frame.prototype._isOutOfBalls = function(){
  return this._balls.length === this._BALLS_NUMBER
};

Frame.prototype._isOutOfPins = function(){
  return this._sumBalls() === this._PIN_NUMBER;
};

Frame.prototype._sumBalls = function() {
  return this._balls.reduce(function(a, b) { return a + b; }, 0);
};
