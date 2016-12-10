var Game = function () {
  this.frames = [];
  this.PINS_NUMBER = 10;
  this.pins = this.PINS_NUMBER;
  this.score = 0;
};

Game.prototype.hit = function () {
  this._knockedDownPins();
  return console.log("You have " + this.pins + " pins remaining");
}

Game.prototype._reset = function () {
  this.pins = 10;
  return this.pins;
}

Game.prototype.frames = function () {
  var roll = 1;

}

Game.prototype._calculateScore = function () {

}

Game.prototype.displayScore = function () {
  return this.score;
}

Game.prototype._randomNumber = function () {
  return Math.floor((Math.random() * 11));
}

Game.prototype._knockedDownPins = function () {
  this.pins = this.PINS_NUMBER - this._randomNumber();
  return this.pins;
}

Game.prototype._getPinsNumber = function () {
  return this.pins;
}
