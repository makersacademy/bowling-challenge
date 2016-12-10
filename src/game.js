var Game = function () {
  this.frames = []
  this.pins = 10;
};

Game.prototype.hit = function () {

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
  var pins = this.pins - this._randomNumber();
  return pins;
}
