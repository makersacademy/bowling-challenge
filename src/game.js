var Game = function () {
  this.frames = [];
  this.PINS_NUMBER = 10;
  this.pins = this.PINS_NUMBER;
  this.score = 0;
};

Game.prototype.hit = function () {
  this._knockedDownPins();
  this._calculateScore();

}

Game.prototype._reset = function () {
  this.pins = 10;
  return this.pins;
}

Game.prototype.frames = function () {

}

Game.prototype.displayScore = function () {
  return this.score;
}

Game.prototype.remainingPinsNumber = function () {
  return this.pins;
}


Game.prototype._knockedDownPins = function () {
  this.pins = this.PINS_NUMBER - this._randomNumber();
  return this.pins;
}

Game.prototype._calculateScore = function () {
  this.score += this._knockedDownPins();
}


Game.prototype._randomNumber = function () {
  return Math.floor((Math.random() * 11));
}
