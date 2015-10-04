function Game() {
  this.score = 0;
  this.frameover = false;
  this.rolls = []
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};