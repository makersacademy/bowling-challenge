/*jshint esversion: 6 */

var Game = function () {
  this.frame = new Frame();
  this.frames = [];
  this.PINS_NUMBER = 10;
  this.pins = this.PINS_NUMBER;
  this.score = 0;
  this.knockedPins = 0;
};

Game.prototype.hit = function () {
  this._knockedDownPins();
  this._calculateScore();
  this.changeFrames();
  this.gameOver();
};

Game.prototype._reset = function () {
  this.pins = 10;
};

Game.prototype.changeFrames = function () {
  if (this.knockedPins === 10) {
    this.frame = new Frame();
    this.frame.displayScore(this.score);
    this.frames.push(this.frame);
  }
  else {
    this.frame = new Frame();
    this.frame.displayScore(this.score);
    this.frames.push(this.frame);
  }
  return this.frames;
};

Game.prototype.displayScore = function () {
  return this.frame.displayScore(this.score);
};

Game.prototype.remainingPinsNumber = function () {
  var remainingPins =  this.PINS_NUMBER - this.knockedPins;
  return remainingPins;
};


Game.prototype._knockedDownPins = function () {
  this.knockedPins = this.PINS_NUMBER - this._randomNumber();
  return this.knockedPins;
};

Game.prototype._calculateScore = function () {
  this.score += this.knockedPins;
};

Game.prototype._randomNumber = function () {
  return Math.floor((Math.random() * 11));
};

Game.prototype.gameOver = function () {
  if (this.frames.length > 10) throw "The game has ended.";
};
