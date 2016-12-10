var Game = function () {
  this.frames = [];
  this.PINS_NUMBER = 10;
  this.pins = this.PINS_NUMBER;
};

Game.prototype.hit = function () {
  this._knockedDownPins();
  return console.log("You have " + this.pins + " pins remaining");
}

Game.prototype.reset = function () {

}

Game.prototype.frames = function () {
  var roll = 1;

}

Game.prototype.calculateScore = function () {

}

Game.prototype.displayScore = function () {

}

Game.prototype._randomNumber = function () {
  return Math.floor((Math.random() * 11));
}

Game.prototype._knockedDownPins = function () {
  this.pins = this.PINS_NUMBER - this._randomNumber();
  return this.pins;
}
