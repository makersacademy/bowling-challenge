function Game() {
  this.score = 0;
  this.frameOver = false;
  this.rolls = [];
  this.currentFrame = 1;
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
  if (pins === 10 || this.frameOver === true) {this.currentFrame++};
  this.frameOver = !this.frameOver
};