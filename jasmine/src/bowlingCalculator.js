'use strict';

var BowlingCalculator = function() {
  this.score = [];
  this.currentTurn = [];
  this.bonus = null;
  this.frames = 10;
  this.throws = 2;
};

BowlingCalculator.prototype.totalScore = function(){
  var sum = this.score.reduce(function(a, b){
    return a + b;}, 0)
  return sum
};

BowlingCalculator.prototype.endTurn = function() {
  this._addToScore(this._sumBalls());
  this._clearBalls();
  this._reduceFrames();
};

BowlingCalculator.prototype._addToScore = function(number) {
  this.totalScore += number
};

BowlingCalculator.prototype._sumBalls = function(){
  var sum = this.currentTurn.reduce(function(a, b){
    return a + b;}, 0)
  return sum
};

BowlingCalculator.prototype._clearBalls = function(){
  this.currentTurn = [];
};

BowlingCalculator.prototype._reduceFrames = function(){
  this.frames -= 1;
};

BowlingCalculator.prototype.throwBall = function(pins) {
  this._hasFramesLeft();
  this._hasThrowsLeft();
  this._validateThrowBall(pins);
  this.currentTurn.push(pins);
  this._reduceThrows();
  this._setBonus();
};

BowlingCalculator.prototype._hasFramesLeft = function() {
  if (this.frames === 0) {
    throw new Error("No frames left.");
  };
};

BowlingCalculator.prototype._hasThrowsLeft = function() {
  if (this.throws === 0) {
    throw new Error("No throws left.");
  };
};

BowlingCalculator.prototype._validateThrowBall = function(number) {
  this._isNotANegativeNumber(number);
  this._isNotANumber(number);
  this._isNotHigherThanTen(number);
  this._doesNotSumToMoreThanTen(number);
};

BowlingCalculator.prototype._isNotANegativeNumber = function(number) {
  if (number < 0) {
    throw new Error("Invalid input: negative number.");
  };
};

BowlingCalculator.prototype._isNotANumber = function(number) {
  if (isNaN(number)) {
    throw new Error("Invalid input: not a number.")
  };
};

BowlingCalculator.prototype._isNotHigherThanTen = function(number) {
  if (number > 10) {
    throw new Error("Invalid input: max score per throw is 10")
  }
};

BowlingCalculator.prototype._doesNotSumToMoreThanTen = function(number) {
  if (number + this.currentTurn[0] > 10) {
    throw new Error("Invalid input: trying to score more than 10 pins")
  }
};

BowlingCalculator.prototype._reduceThrows = function(){
  this.throws -= 1;
};

BowlingCalculator.prototype._setBonus = function(){
  if (this.currentTurn[0] === 10) {
    this.bonus = 'strike';
  };
  if (this._sumBalls() === 10 && !this.currentTurn.includes(10)) {
    this.bonus = 'spare';
  };
};
