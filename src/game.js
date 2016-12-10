var Game = function () {
  this.frames = []
  this.pins = 10;
};

Game.prototype.hit = function () {
  return this.randomNumber();
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

Game.prototype.randomNumber = function () {
  return Math.floor((Math.random() * 11));
}
