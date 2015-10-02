function Game() {
  this.total = 0;
};

Game.prototype.countFallenPins = function(pins) {
  this.total += pins
};
